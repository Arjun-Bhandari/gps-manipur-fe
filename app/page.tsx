import Navbar from '@/components/navbar'
import React from 'react'
import Container from '@/components/container'
import HeroSection from '@/components/sections/hero/hero'
import WhyGps from '@/components/sections/why-gps/why-gps'
import Footer from '@/components/footer'
import Cta from '@/components/sections/cta/cta'

const Page = () => {
  return (
    <>
      <Navbar />
      
      <HeroSection />
      <WhyGps />
      <Cta />
      <Footer />
       
    </>
  )
}

export default Page
