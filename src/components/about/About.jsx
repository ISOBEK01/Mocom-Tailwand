import React from 'react'
import res19 from '../../assets/images/Rectangle 19.svg'
const About = () => {
  return (
    <div>
      <div className="-py-96 px-4 text-center max-w-7xl m-auto bg-white">
  <div className="flex justify-center mb-2">
    <div className="w-2 h-10 bg-red-600 rounded-full"></div>
  </div>

  <p className="text-sm text-gray-700 mb-4">about us</p>

  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 leading-snug">
    If you’re looking for a Premium Quality <br />
    Tempered Glass or Back-cover for <br />
    your Device
  </h2>

  <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-sm sm:text-base">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </p>

  <div className="mt-10 flex justify-center">
    <img 
      src={res19}
      alt="Mobile Accessories" 
      className="w-96 sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] object-contain"
    />
  </div>
</div>
    </div>
  )
}

export default About
