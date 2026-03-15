'use client'

import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ExamGuide, Notes, SolvedPYQs, SubjectsGuides, YouTube } from '@/lib/icons'
interface FeatureCard {
  id: string
  title: string
  description: string
  link: string
  linkText: string
  icon: React.ReactNode
  color: string
  colSpan?: string
  rowSpan?: string
}



export { YouTube };

const WhyGps = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const features: FeatureCard[] = [
    {
      id: 'solved-pyqs',
      title: 'Solved PYQs',
      description: 'Access comprehensive solved previous year question papers with detailed explanations and step-by-step solutions.',
      link: '/pyqs',
      linkText: 'View PYQs →',
      icon: (
        <SolvedPYQs className='w-12 h-12' />
      ),
      color: '',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1',
    },
    {
      id: 'subjects-guides',
      title: 'Subjects Guides',
      description: 'Comprehensive subject-wise guides covering all topics for 10th and 12th board exams with structured learning paths.',
      link: '/guides',
      linkText: 'Explore Guides →',
      icon: (
        <SubjectsGuides className='w-12 h-12' />
      ),
      color: '',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1',
    },
    {
      id: 'video-playlist',
      title: 'Solved Chapter-wise Video Playlist',
      description: 'Watch detailed video explanations for each chapter with solved examples and concept clarity from expert educators.',
      link: '/videos',
      linkText: 'Watch Videos →',
      icon: (
        <YouTube className='w-12 h-12' />
      ),
      color: '',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1',
    },
    {
      id: 'notes',
      title: 'Notes',
      description: 'Well-structured notes covering all important topics, formulas, and concepts for quick revision and better understanding.',
      link: '/notes',
      linkText: 'Browse Notes →',
      icon: (
        <Notes className='w-12 h-12' />
      ),
      color: '',
      colSpan: 'col-span-1',
      rowSpan: 'row-span-1',
    },
    {
      id: 'exam-guide',
      title: 'Exam Guide',
      description: 'Complete exam preparation guides with strategies, tips, and resources to excel in board and competitive exams.',
      link: '/exam-guide',
      linkText: 'Get Started →',
      icon: (
        <ExamGuide className='w-12 h-12' />
      ),
      color: '',
      colSpan: 'col-span-1 sm:col-span-2',
      rowSpan: 'row-span-1',
    },
  ]

  return (
    <section className='w-full relative z-10 py-12 sm:py-16 md:py-20 lg:py-24'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='mb-8 sm:mb-12'>
          <h2 className='text-xl font-bold sm:text-xl md:text-2xl lg:text-3xl'>
            Why GPS Manipur?
          </h2>
          <p className='mt-4 text-base text-muted-foreground sm:text-lg md:text-xl'>
            Our Purpose is to make learning easy and accessible for everyone.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature) => (
            <Link
              key={feature.id}
              href={feature.link}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={cn(
                'group relative flex flex-col overflow-hidden bg-card mac-border rounded-[2rem] p-8 transition-all duration-500 ease-out',
                feature.colSpan,
                feature.rowSpan,
                hoveredCard === feature.id
                  ? 'shadow-mac-lg -translate-y-1'
                  : 'shadow-mac'
              )}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {feature.icon}
              </div>

              <div className='flex grow flex-col space-y-3'>
                <h3 className='text-xl font-bold tracking-tight sm:text-2xl'>
                  {feature.title}
                </h3>
                <p className='text-base leading-relaxed text-muted-foreground'>
                  {feature.description}
                </p>
              </div>

              <div className='mt-8 flex items-center gap-2 text-sm font-semibold text-primary'>
                <span className="relative">
                  {feature.linkText}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </span>
                <svg
                  className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1'
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
              </div>

              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-radial-gradient(circle at 50% 0%, var(--primary)/5 0%, transparent 70%) opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyGps