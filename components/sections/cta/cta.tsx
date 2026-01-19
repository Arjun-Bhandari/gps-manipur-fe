import React from 'react'
import { Button } from '@/components/ui/button'
import { YouTube } from '@/lib/icons'
import { cn } from '@/lib/utils'

const Cta = () => {
  return (
    <section className='w-full relative z-10 py-6 sm:py-8 md:py-10 lg:py-12'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='relative overflow-hidden rounded-2xl border border-secondary/50  backdrop-blur-sm p-8 sm:p-12 md:p-16 lg:p-20'>
          <div className='relative z-10 flex flex-col items-center text-center space-y-6 sm:space-y-8'>
        
            <div className='space-y-4 sm:space-y-6'>
              <h2 className='text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl'>
                Guide At Your{' '}
                <span className='bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
                  Finger Tip?
                </span>
              </h2>
              <h3 className='text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl text-muted-foreground'>
                Start Learning
              </h3>
            </div>

            {/* Catchy Text */}
            <p className='max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed'>
              Join thousands of students mastering board exams and competitive tests with our comprehensive video tutorials, solved PYQs, and expert guidance. Your success journey starts here!
            </p>

            {/* YouTube Button */}
            <Button
              asChild
              size='lg'
              className={cn(
                'group relative h-14 px-8 text-base sm:text-lg font-semibold',
                'bg-primary hover:bg-primary/90 text-white',
                'shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40',
                'transition-all duration-300 hover:scale-105'
              )}
            >
              <a
                href='https://youtube.com/@gpsmanipur'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3'
              >
                <YouTube className='w-6 h-6 transition-transform duration-300 group-hover:scale-110' />
                <span>Subscribe to YouTube Channel</span>
                <svg
                  className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </a>
            </Button>

            {/* Additional Info */}
            <p className='text-sm text-muted-foreground/80'>
              🎥 Free video lessons • 📚 Solved PYQs • 📖 Complete guides • ✨ Expert tips
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta