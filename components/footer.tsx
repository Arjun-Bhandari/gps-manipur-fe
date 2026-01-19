import React from 'react'
import Link from 'next/link'
import FullLogo from './fulllogo'
import { YouTube } from '@/lib/icons'

const Footer = () => {
  const resourceLinks = [
    { label: 'Solved PYQs', href: '/pyqs' },
    { label: 'Subject Guides', href: '/guides' },
    { label: 'Video Playlist', href: '/videos' },
    { label: 'Notes', href: '/notes' },
    { label: 'Exam Guide', href: '/exam-guide' },
  ]

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className='w-full relative z-10 border-t border-border/50'>
      {/* Professional Footer Content */}
      <div className='container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12'>
          {/* Logo Section */}
          <div className='lg:col-span-1'>
            <FullLogo />
            <p className='mt-4 text-sm text-muted-foreground leading-relaxed'>
              Your centralized platform for board & competitive exam preparation.
            </p>
          </div>

          {/* Resource Links */}
          <div>
            <h3 className='text-sm font-semibold mb-4 uppercase tracking-wider'>Resources</h3>
            <ul className='space-y-3'>
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-sm text-muted-foreground hover:text-primary transition-colors duration-200'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-sm font-semibold mb-4 uppercase tracking-wider'>Quick Links</h3>
            <ul className='space-y-3'>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-sm text-muted-foreground hover:text-primary transition-colors duration-200'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & YouTube */}
          <div>
            <h3 className='text-sm font-semibold mb-4 uppercase tracking-wider'>Connect</h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='https://youtube.com/@gpsmanipur'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200'
                >
                  <YouTube className='w-5 h-5' />
                  YouTube Channel
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='border-t border-border/50 '>
          <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
            <p className='text-sm text-muted-foreground'>
              © {new Date().getFullYear()} GPS Manipur. All rights reserved.
            </p>
            <div className='flex items-center gap-6 text-sm text-muted-foreground'>
              <Link href='/privacy' className='hover:text-primary transition-colors duration-200'>
                Privacy Policy
              </Link>
              <Link href='/terms' className='hover:text-primary transition-colors duration-200'>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Text - GPS Manipur */}
      <div className='flex flex-col items-center justify-center py-6 sm:py-8 md:py-10'>
        <span className='pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl sm:text-8xl md:text-9xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10'>
          GPS Manipur
        </span>
      </div>
    </footer>
  )
}

export default Footer