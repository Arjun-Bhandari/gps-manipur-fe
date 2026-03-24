'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { YouTube } from '@/lib/icons'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/lib/store/authStore'

const Cta = () => {
  const router = useRouter()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  return (
    <section className='w-full relative z-10 py-6 sm:py-8 md:py-10 lg:py-12'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='relative overflow-hidden rounded-[2.5rem] mac-border bg-card shadow-mac-lg p-8 sm:p-12 md:p-16 lg:p-20'>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

          <div className='relative z-10 flex flex-col items-center text-center space-y-8 sm:space-y-10'>

            <div className='space-y-4 sm:space-y-6'>
              <h2 className='text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl'>
                Your Guide At Your{' '}
                <span className='text-primary'>
                  Finger Tips
                </span>
              </h2>
              <h3 className='text-xl font-medium sm:text-2xl md:text-3xl text-muted-foreground'>
                Join thousands of students mastering exams today.
              </h3>
            </div>

            <p className='max-w-150 text-lg sm:text-xl text-muted-foreground leading-relaxed'>
              Get access to comprehensive video tutorials, solved PYQs, and expert guidance. Start your success journey with GPS Manipur.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                asChild
                size='lg'
                className='rounded-full h-14 px-10 text-lg font-semibold shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-95'
              >
                <a
                  href='https://youtube.com/@gpsmanipur'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3'
                >
                  <YouTube className='w-6 h-6' />
                  <span>Subscribe Now</span>
                </a>
              </Button>

              <Button
                variant="ghost"
                className="rounded-full h-14 px-8 text-lg font-medium"
                onClick={() => router.push(isAuthenticated ? '/dashboard' : '/login')}
              >
                View Courses
              </Button>
            </div>

            <div className='flex flex-wrap justify-center gap-x-8 gap-y-4 pt-4 border-t border-border/50 w-full max-w-2xl'>
              {['Free Video Lessons', 'Solved PYQs', 'Complete Guides', 'Expert Tips'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta