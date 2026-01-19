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

        {/* Bento Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  p-4 rounded-md shadow-2xl shadow-primary/20 '>
          {features.map((feature) => (
            <Link
              key={feature.id}
              href={feature.link}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={cn(
                'group relative overflow-hidden  border border-border transition-all duration-300',
                feature.colSpan,
                feature.rowSpan,
                hoveredCard === feature.id
                  ? ' shadow-2xl shadow-primary/20 ring-2 ring-primary/50'
                  : hoveredCard
                    ? 'opacity-60 '
                    : ' hover:shadow-lg'
              )}
            >
                
              <Card className='h-full border rounded-none bg-transparent p-6'>
                <CardHeader className='space-y-4 p-0'>
                  <div className='flex items-start justify-between'>
                    <div
                      className={cn(
                        'rounded-lg p-3 transition-all duration-300',
                        feature.color,
                        hoveredCard === feature.id ? 'scale-110 ' : ''
                      )}
                    >
                      <div className='text-white'>{feature.icon}</div>
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <CardTitle className='text-lg font-bold sm:text-xl'>
                      {feature.title}
                    </CardTitle>
                    <CardDescription className='text-sm sm:text-base leading-relaxed'>
                      {feature.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className='p-0 pt-4'>
                  <div className='flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 group-hover:gap-3'>
                    {feature.linkText}
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
                </CardContent>
              </Card>
              
              {/* Hover Glow Effect */}
              <div
                className={cn(
                  'absolute inset-0 -z-10 rounded-xl bg-linear-to-br from-primary/0 via-primary/0 to-primary/0 transition-all duration-300',
                  hoveredCard === feature.id && 'from-primary/10 via-primary/5 to-primary/0'
                )}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyGps