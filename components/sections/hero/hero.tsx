import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import About from '../about/about'
import { YouTube } from '@/lib/icons'

const HeroSection = () => {
    return (
        <section className='relative w-full'>
            <div className='fixed inset-0 z-0 bg-background'>
                <div 
                    className='absolute inset-0 pointer-events-none'
                    style={{
                        background: 'radial-gradient(ellipse 1200px 800px at 50% 0%, oklch(0.61 0.11 222 / 0.15) 0%, oklch(0.61 0.11 222 / 0.12) 8%, oklch(0.61 0.11 222 / 0.08) 18%, oklch(0.61 0.11 222 / 0.05) 30%, oklch(0.61 0.11 222 / 0.03) 45%, oklch(0.61 0.11 222 / 0.015) 60%, transparent 75%)',
                    }}
                />
                <div 
                    className='absolute inset-0 pointer-events-none'
                    style={{
                        background: 'radial-gradient(ellipse 1000px 600px at 50% 5%, oklch(0.61 0.11 222 / 0.1) 0%, oklch(0.61 0.11 222 / 0.06) 15%, oklch(0.61 0.11 222 / 0.03) 35%, transparent 55%)',
                    }}
                />
            </div>
            <div className='relative z-10'>
                <div className='container mx-auto px-4 pt-32 pb-6 sm:px-6 sm:pt-32 md:pt-24 lg:pt-20'>
                    <div className='flex w-full flex-col gap-6 sm:gap-8 md:gap-10 lg:flex-row lg:items-center lg:justify-between'>
                        {/* Left Content - Perfectly Aligned with Navbar */}
                        <div className='w-full space-y-4 sm:space-y-5 md:space-y-6 lg:w-1/2'>
                            <Badge className='border border-primary/30 bg-primary/20 px-4 py-4 text-sm font-semibold text-white backdrop-blur-md sm:text-base md:text-lg shadow-lg'>
                                Trusted by 4k+ Students 🚀
                            </Badge>
                            <h1 className='text-xl font-bold leading-tight sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl'>
                             Board's & Competitive Exam Prep
                            </h1>
                            <p className='max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl'>
                                GPS Manipur is a centralized education platform for 10th and 12th board students and competitive exam aspirants, with curated notes, PYQs, solved PYQs, and exam guides
                            </p>
                            <div className='flex flex-col gap-3 pt-2 sm:flex-row'>
                                <Button
                                    variant='default'
                                    className='w-full text-white px-6 py-6 text-base transition-all duration-300 hover:scale-105 sm:w-auto sm:text-lg'
                                >
                                    Start Learning
                                </Button>
                                <Button
                                    variant='outline'
                                    className='w-full px-6 py-6 text-base transition-all duration-300 hover:scale-105 sm:w-auto sm:text-lg'
                                >
                                    <YouTube className='h-5 w-5'/>Subscribe to YouTube Channel
                                </Button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className='flex w-full justify-center lg:w-1/2 lg:justify-end'>
                            <div className='relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] mask-b-from-80% mask-radial-[60%_60%] mask-radial-from-70%'>
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
