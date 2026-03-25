"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useOnboardingMutation } from "@/lib/services/auth/auth.queries";
import { useAuthStore } from "@/lib/store/authStore";
import FullLogo from "@/components/fulllogo";
import { toast } from "sonner";

export default function OnboardingPage() {
    const router = useRouter();
    const user = useAuthStore((state) => state.user);
    const onboardingMutation = useOnboardingMutation();

    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: user?.name || "",
        phone: "",
        studentClass: "",
        gender: "",
    });

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
    };

    const handleBack = () => {
        setStep(1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            await onboardingMutation.mutateAsync(formData);
            toast.success("Onboarding completed successfully.");
            router.push("/dashboard");
        } catch (err: any) {
            const message = err.message || "Failed to complete onboarding. Please try again.";
            setError(message);
            toast.error(message);
            setIsLoading(false);
        }
    };

    // Form validation
    const isStep1Valid = formData.name.length > 2 && formData.phone.length >= 10;
    const isStep2Valid = formData.studentClass !== "" && formData.gender !== "";

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
                        src="/drapj-illustration.png"
                        alt="Dr. A.P.J. Abdul Kalam"
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
                                    "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, knowledge makes you great."
                                </p>
                                <p className="text-[15px] font-semibold text-primary text-right tracking-wide">— Dr. A.P.J. Abdul Kalam</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Right Side: Form */}
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
                        <h2 className="text-3xl font-bold tracking-tight text-foreground">
                            {user?.name ? `Welcome, ${user.name.split(' ')[0]}` : "Complete your profile"}
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground pb-6">
                            Step {step} of 2. Provide your details to customize your learning experience.
                        </p>

                        {/* Progress Bar */}
                        <div className="w-full bg-secondary h-1.5 justify-start items-center rounded-sm overflow-hidden mb-8">
                            <motion.div
                                className="bg-primary h-full"
                                initial={{ width: "50%" }}
                                animate={{ width: step === 1 ? "50%" : "100%" }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        </div>
                    </motion.div>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                            className="bg-destructive/15 text-destructive text-sm p-3 rounded-md mb-6 text-center"
                        >
                            {error}
                        </motion.div>
                    )}

                    <div className="relative overflow-visible">
                        <AnimatePresence mode="wait" custom={step}>
                            {step === 1 ? (
                                <motion.form
                                    key="step1"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -30 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    onSubmit={handleNext}
                                    className="space-y-5"
                                >
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="h-11 focus:ring-2 focus:ring-primary/20 bg-background"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="+91 9876543210"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="h-11 focus:ring-2 focus:ring-primary/20 bg-background"
                                            required
                                        />
                                    </div>
                                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="pt-2">
                                        <Button type="submit" className="w-full h-11" disabled={!isStep1Valid}>
                                            Continue
                                        </Button>
                                    </motion.div>
                                </motion.form>
                            ) : (
                                <motion.form
                                    key="step2"
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                                >
                                    <div className="space-y-2">
                                        <Label htmlFor="studentClass">Class / Standard</Label>
                                        <Select
                                            value={formData.studentClass}
                                            onValueChange={(value) => setFormData({ ...formData, studentClass: value })}
                                        >
                                            <SelectTrigger className="h-11 bg-background">
                                                <SelectValue placeholder="Select your class" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="CLASS_9">Class 9</SelectItem>
                                                <SelectItem value="CLASS_10">Class 10</SelectItem>
                                                <SelectItem value="CLASS_11">Class 11</SelectItem>
                                                <SelectItem value="CLASS_12">Class 12</SelectItem>
                                                <SelectItem value="OTHER">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="gender">Gender</Label>
                                        <Select
                                            value={formData.gender}
                                            onValueChange={(value) => setFormData({ ...formData, gender: value })}
                                        >
                                            <SelectTrigger className="h-11 bg-background">
                                                <SelectValue placeholder="Select gender" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="MALE">Male</SelectItem>
                                                <SelectItem value="FEMALE">Female</SelectItem>
                                                <SelectItem value="OTHER">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex gap-3 pt-2">
                                        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="w-1/3">
                                            <Button type="button" variant="outline" className="w-full h-11" onClick={handleBack}>
                                                Back
                                            </Button>
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="w-2/3">
                                            <Button type="submit" className="w-full h-11" disabled={!isStep2Valid || isLoading}>
                                                {isLoading ? "Saving..." : "Complete Profile"}
                                            </Button>
                                        </motion.div>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
