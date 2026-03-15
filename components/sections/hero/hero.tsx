'use client'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import About from '../about/about'
import { YouTube } from '@/lib/icons'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
const HeroSection = () => {
    const router = useRouter()
    return (
        <section className='relative w-full'>

            <div className='relative z-10'>
                <div className='container mx-auto px-4 pt-12 pb-8 sm:pt-16 md:pt-20'>
                    <div className='flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:justify-between'>

                        <div className='w-full space-y-5 lg:w-3/5'>
                            <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-bold text-primary backdrop-blur-md rounded-full">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Trusted by 4k+ Students 🚀
                            </div>

                            <h1 className='text-3xl font-black leading-[1.1] tracking-tighter sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl'>
                                <span className="block md:inline-block md:whitespace-nowrap">Board's & Competitive</span>
                                <span className="block mt-1 bg-linear-to-r from-primary via-primary/80 to-primary/40 bg-clip-text text-transparent">
                                    Exam Prep
                                </span>
                            </h1>

                            <p className='max-w-xl text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium'>
                                Get access to comprehensive video tutorials, solved PYQs, and expert guidance. Start your success journey with GPS Manipur today.
                            </p>

                            <div className='flex flex-col gap-4 pt-6 sm:flex-row'>
                                <Button
                                    variant='default'
                                    className='group w-full h-14 px-8 text-lg font-bold transition-all duration-500 rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.05] active:scale-[0.98] sm:w-auto bg-primary text-primary-foreground'
                                    onClick={() => router.push('/dashboard')}
                                >
                                    Start Learning
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                                <Link href="https://www.youtube.com/@gpsmanipur " target='_blank' className="w-full sm:w-auto">
                                    <Button
                                        variant='outline'
                                        className='w-full h-14 px-8 text-lg font-semibold transition-all duration-300 rounded-full border-border/50 hover:bg-secondary hover:border-primary/50 group sm:w-auto'
                                    >
                                        <YouTube className='h-5 w-5 mr-3 text-red-500 group-hover:scale-110 transition-transform' />
                                        Subscribe
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className='flex w-full justify-center lg:w-1/2 lg:justify-end'>
                            <div className='relative w-full max-w-70 sm:max-w-80 md:max-w-90 lg:max-w-100 mask-b-from-80% mask-radial-[60%_60%] mask-radial-from-70%'>
                                <Image
                                    src='/hero.png'
                                    alt='Student reading a book'
                                    width={400}
                                    height={400}
                                    priority
                                    sizes='(min-width: 1024px) 400px, (min-width: 768px) 360px, (min-width: 640px) 320px, 280px'
                                    className='h-auto w-full object-contain'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative z-10'>
                    <About />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
