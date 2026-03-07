import React from 'react'

const About = () => {
    const youtubeUrl = 'https://www.youtube.com/embed/5NjUaZces3w'
 
  return (
    <section className='w-full py-12 sm:py-16 md:py-20 lg:py-24'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='mb-8 sm:mb-12'>
        <h2 className='text-xl font-bold sm:text-xl md:text-2xl lg:text-3xl'>
            What is GPS Manipur?
          </h2>
          <p className='mt-4 text-base text-muted-foreground sm:text-lg md:text-xl'>
            Learn more about our platform and mission
          </p>
        </div>

        <div className='relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl border-2 border-secondary shadow-2xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-secondary p-1'>
          {/* Video container with aspect ratio */}
          <div className='relative aspect-video w-full rounded-2xl'>
            <iframe
              src={youtubeUrl}
              title='GPS Manipur Platform Introduction'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
              className='h-full w-full border-0 rounded-2xl'
              loading='lazy'
            />
          </div>

          {/* Subtle glow effect */}
          <div className='absolute -inset-1 -z-20 rounded-2xl bg-secondary/20 blur-2xl' />
        </div>
      </div>
    </section>
  )
}

export default About

