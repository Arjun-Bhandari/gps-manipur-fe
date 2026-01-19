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
      {/* Fixed Navbar */}
      <div className='fixed left-0 right-0 top-0 z-50 w-full'>
        <Container>
          <Navbar />
        </Container>
      </div>
      
      <HeroSection />
      <WhyGps />
      <Cta />
          <Footer />
       
    </>
  )
}

export default Page