import React from 'react'
import FeatureCardHolder from './FeatureCard/FeatureCardHolder'


function Features() {
  return (
    <div id='features' className='bg-[#051024] w-full flex flex-col items-center shadow-md text-[#D9D9D9] py-8 px-12 border border-[#D9D9D9] border-opacity-25 gap-10'>
      
      <div className='w-full flex flex-col gap-2'>
        <p className='text-3xl text-center lg:text-left'>Features</p>
        <p className='text-white text-opacity-55 text-center lg:text-left'>There is a lot to discover !</p>
      </div>
      <FeatureCardHolder/>

    </div>
  )
}

export default Features