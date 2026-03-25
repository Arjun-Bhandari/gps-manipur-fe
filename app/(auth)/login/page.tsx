"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authService } from "@/lib/services/auth/auth";
import {
    useGoogleSignInMutation,
    useSendOtpMutation,
    useSessionQuery,
    useVerifyOtpMutation,
} from "@/lib/services/auth/auth.queries";
import { useAuthStore } from "@/lib/store/authStore";
import FullLogo from "@/components/fulllogo";
import { toast } from "sonner";

export default function LoginPage() {
    const router = useRouter();
    const setUser = useAuthStore((state) => state.setUser);

    const [step, setStep] = useState<"email" | "otp">("email");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [lastUsedProvider, setLastUsedProvider] = useState<"google" | "email-otp" | null>(null);
    const [isGoogleCallback, setIsGoogleCallback] = useState(false);
    const [googleCallbackHandled, setGoogleCallbackHandled] = useState(false);

    const sendOtpMutation = useSendOtpMutation();
    const verifyOtpMutation = useVerifyOtpMutation();
    const googleSignInMutation = useGoogleSignInMutation();
    const googleSessionQuery = useSessionQuery(isGoogleCallback && !googleCallbackHandled);

    const extractErrorMessage = (err: any, fallback: string) => {
        if (err?.message) return err.message;
        if (err?.response?.data?.message) return err.response.data.message;
        return fallback;
    };

    const isFormPending = sendOtpMutation.isPending || verifyOtpMutation.isPending;
    const isGoogleLoading = googleSignInMutation.isPending || (isGoogleCallback && !googleCallbackHandled && googleSessionQuery.isPending);

    const pageError =
        sendOtpMutation.error ||
        verifyOtpMutation.error ||
        googleSignInMutation.error ||
        (isGoogleCallback ? googleSessionQuery.error : null);

    const errorMessage = pageError ? extractErrorMessage(pageError, "Something went wrong. Please try again.") : null;

    useEffect(() => {
        setLastUsedProvider(authService.getLastUsedProvider());
        const provider = new URLSearchParams(window.location.search).get("provider");
        setIsGoogleCallback(provider === "google");
    }, []);

    useEffect(() => {
        if (!isGoogleCallback || googleCallbackHandled) {
            return;
        }

        if (googleSessionQuery.isError) {
            const message = extractErrorMessage(googleSessionQuery.error, "An error occurred verifying your session.");
            toast.error(message);
            setGoogleCallbackHandled(true);
            return;
        }

        if (googleSessionQuery.isSuccess) {
            if (googleSessionQuery.data?.session) {
                authService.setLastUsedProvider("google");
                setLastUsedProvider("google");
                setUser(googleSessionQuery.data.user);
                toast.success("Google login successful.");
                setGoogleCallbackHandled(true);
                router.push(googleSessionQuery.data.user.isOnboarded ? "/dashboard" : "/onboarding");
                return;
            }

            const message = "Google sign-in failed or was cancelled.";
            toast.error(message);
            setGoogleCallbackHandled(true);
        }
    }, [
        googleSessionQuery.data,
        googleSessionQuery.error,
        googleSessionQuery.isError,
        googleSessionQuery.isPending,
        googleSessionQuery.isSuccess,
        googleCallbackHandled,
        isGoogleCallback,
        router,
        setUser,
    ]);

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await sendOtpMutation.mutateAsync({ email, type: "sign-in" });
            setStep("otp");
            setLastUsedProvider("email-otp");
            toast.success("Verification code sent to your email.");
        } catch (err: any) {
            const message = extractErrorMessage(err, "Failed to send OTP. Please try again.");
            toast.error(message);
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await verifyOtpMutation.mutateAsync({
                email,
                otp,
            });
            if (response?.user) {
                setUser(response.user);
                toast.success("Login successful.");
                if (!response.user.isOnboarded) {
                    router.push("/onboarding");
                } else {
                    router.push("/dashboard");
                }
            }
        } catch (err: any) {
            const message = extractErrorMessage(err, "Invalid OTP. Please try again.");
            toast.error(message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await googleSignInMutation.mutateAsync(`${window.location.origin}/login?provider=google`);
        } catch (err: any) {
            const message = extractErrorMessage(err, "Could not initiate Google sign in.");
            toast.error(message);
        }
    };

    return (
        <div className="flex min-h-screen items-stretch justify-center bg-background md:flex-row flex-col">

            {/* Left Side: Educational Image & Quotes */}
            <div className="flex-1 hidden md:flex flex-col justify-between bg-primary/5 dark:bg-primary/10 relative overflow-hidden border-r border-border/50 pt-20">
                <div className="absolute inset-0 bg-linear-to-bl from-primary/5 via-transparent to-primary/10 pointer-events-none" />

                <div className="absolute top-8 left-6 lg:left-16 z-20">
                    <FullLogo height={42} width={42} />
                </div>

                {/* Illustration Top */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="relative w-full h-[55%] min-h-75 mb-8 z-10"
                >
                    <Image
                        src="/einstein-illustration.png"
                        alt="Albert Einstein"
                        fill
                        className="object-contain object-center"
                        priority
                    />
                </motion.div>

                {/* Quote Bottom */}
                <div className="px-12 md:px-16 pb-16 relative z-10 max-w-xl self-end">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <div className="space-y-4 flex flex-col">
                            <div className="w-full text-left">
                                <svg className="h-10 w-10 text-primary/40 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                            </div>
                            <div className=" space-y-4">
                                <p className="text-xl md:text-2xl font-medium text-foreground/80 leading-snug font-serif">
                                    "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world."
                                </p>
                                <p className="text-[15px] font-semibold text-primary text-right tracking-wide">— Albert Einstein</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 relative">
                <div className="md:hidden absolute top-8 left-6">
                    <FullLogo height={32} width={32} />
                </div>

                <div className="mx-auto w-full max-w-sm mt-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    >
                        <div className="space-y-1 mb-8 text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground">Welcome Back</h2>
                            <p className="text-sm text-muted-foreground pb-2">
                                Sign in to continue your learning journey
                            </p>
                        </div>

                        <div className="space-y-6">
                            {errorMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-destructive/15 text-destructive text-sm p-3 rounded-md text-center mb-6"
                                >
                                    {errorMessage}
                                </motion.div>
                            )}

                            <div className="space-y-4">
                                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        variant="outline"
                                        className="w-full relative h-11"
                                        onClick={handleGoogleSignIn}
                                        disabled={isGoogleLoading || isFormPending}
                                    >
                                        {isGoogleLoading ? (
                                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                                        ) : (
                                            <>
                                                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                                </svg>
                                                Continue with Google
                                            </>
                                        )}
                                        {lastUsedProvider === "google" && !isGoogleLoading && (
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                                                Last used
                                            </span>
                                        )}
                                    </Button>
                                </motion.div>

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t border-border" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                                    </div>
                                </div>

                                <AnimatePresence mode="wait">
                                    {step === "email" ? (
                                        <motion.form
                                            key="email-form"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                            onSubmit={handleSendOtp}
                                            className="space-y-4"
                                        >
                                            <div className="space-y-2 relative">
                                                <Label htmlFor="email">Email address</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="m@example.com"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="h-11 transition-all focus:ring-2 focus:ring-primary/20 bg-background"
                                                />
                                                {lastUsedProvider === "email-otp" && (
                                                    <span className="absolute right-3 top-9 text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium pointer-events-none">
                                                        Last used
                                                    </span>
                                                )}
                                            </div>
                                            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="pt-2">
                                                <Button type="submit" className="w-full h-11" disabled={isFormPending}>
                                                    {sendOtpMutation.isPending ? "Sending code..." : "Send Verification Code"}
                                                </Button>
                                            </motion.div>
                                        </motion.form>
                                    ) : (
                                        <motion.form
                                            key="otp-form"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                            onSubmit={handleVerifyOtp}
                                            className="space-y-4"
                                        >
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <Label htmlFor="otp">Verification Code</Label>
                                                    <button
                                                        type="button"
                                                        onClick={() => setStep("email")}
                                                        className="text-xs text-primary hover:underline"
                                                    >
                                                        Change email
                                                    </button>
                                                </div>
                                                <Input
                                                    id="otp"
                                                    type="text"
                                                    placeholder="Enter 6-digit code"
                                                    required
                                                    maxLength={6}
                                                    value={otp}
                                                    onChange={(e) => setOtp(e.target.value)}
                                                    className="h-11 tracking-widest text-center text-lg transition-all focus:ring-2 focus:ring-primary/20 bg-background"
                                                />
                                                <p className="text-[11px] text-muted-foreground text-center pt-1">
                                                    We sent a code to <span className="font-medium text-foreground">{email}</span>
                                                </p>
                                            </div>
                                            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="pt-2">
                                                <Button type="submit" className="w-full h-11" disabled={isFormPending}>
                                                    {verifyOtpMutation.isPending ? "Verifying..." : "Sign In"}
                                                </Button>
                                            </motion.div>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
