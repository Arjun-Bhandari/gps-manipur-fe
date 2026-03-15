'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import FullLogo from './fulllogo'
import { Button } from '@/components/ui/button'
import Container from './container'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const router = useRouter()

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' }
    ]

    return (
        <nav className=' sticky top-0 z-50 w-full'>
            <Container>
                <div className='flex items-center justify-between py-3 md:py-4'>
                    <FullLogo height={400} width={400} className='h-14' />

                    {/* Desktop Navigation */}
                    <div className='hidden items-center gap-2 md:flex'>
                        {navItems.map((item) => (
                            <Link
                                href={item.href}
                                key={item.href}
                                className='rounded-full px-4 py-2 text-lg font-medium text-muted-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary'
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className='hidden items-center gap-3 md:flex'>
                        <Button variant="ghost" size="lg" className="rounded-full font-medium">Log in</Button>
                        <Button size="lg" className="rounded-full px-5 font-semibold shadow-md shadow-primary/10" onClick={() => router.push('/dashboard')}>Join Now</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant='ghost'
                        size='icon'
                        className='md:hidden rounded-full hover:bg-primary/5'
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label='Toggle menu'
                    >
                        <svg
                            className='h-5 w-5'
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
                </div>
            </Container>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className='absolute left-0 right-0 top-full z-50 mt-2 px-4 md:hidden'>
                    <div className='mac-glass border border-border p-2 rounded-[2rem] shadow-mac-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200'>
                        {navItems.map((item) => (
                            <Link
                                href={item.href}
                                key={item.href}
                                className='flex items-center rounded-2xl px-5 py-4 text-base font-medium transition-all hover:bg-primary/5 hover:text-primary active:bg-primary/10'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="mt-2 grid grid-cols-2 gap-2 p-2">
                            <Button variant="ghost" className="rounded-xl h-12">Log in</Button>
                            <Button className="rounded-xl h-12 shadow-lg shadow-primary/20">Join Now</Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
