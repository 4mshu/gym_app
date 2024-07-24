import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>
            <p>IT'S TIME TO GET</p>
            <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>SUPER<span className='text-blue-400'>FIT!</span></h1>
        </div>
        
        <p className='text-sm md:text-base font-light'>I hereby declare to run the <span className='text-blue-400 font-medium'>Kathmandu 5k on September 28th 2024</span> at my <span className='text-blue-400 font-medium'>personal best</span> pace and give it my all. I will also do my best to reduce my weight by following a <span className='text-blue-400 font-medium'>diet plan</span> and <span className='text-blue-400 font-medium'>working out </span>daily!!!</p>
        <button className='px-8 py-4 rounded:md border-[2px] bg-slate-950  border-blue-400 border-solid blueShadow duration-200'><p>Accept and Begin</p></button>
    </div>
  )
}
