'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import FullLogo from './fulllogo'
import { Button } from '@/components/ui/button'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navItems = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'About',
            href: '/about'
        },
        {
            label: 'Contact',
            href: '/contact'
        }
    ]

    return (
        <nav className='flex w-full items-center justify-between bg-transparent/80 backdrop-blur-sm py-3 sm:py-4 md:py-5'>
            <FullLogo />
            
            {/* Desktop Navigation */}
            <div className='hidden items-center gap-4 md:flex lg:gap-6'>
                {navItems.map((item) => (
                    <Link
                        href={item.href}
                        key={item.href}
                        className='text-sm font-medium transition-all duration-300 hover:scale-105 hover:text-primary lg:text-base'
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
                variant='ghost'
                size='icon'
                className='md:hidden'
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label='Toggle menu'
            >
                <svg
                    className='h-6 w-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                >
                    {isMobileMenuOpen ? (
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M6 18L18 6M6 6l12 12'
                        />
                    ) : (
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    )}
                </svg>
            </Button>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className='absolute left-0 right-0 top-full z-50 mt-2 flex flex-col gap-2 border-t border-border bg-background p-4 md:hidden'>
                    {navItems.map((item) => (
                        <Link
                            href={item.href}
                            key={item.href}
                            className='rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-muted hover:text-primary'
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar
