import React from 'react'
import res from "../../assets/images/Rectangle 3.svg"
const Hero = () => {
  return (
    <div className='max-w-7xl m-auto'>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-white">
        <div className="text-center md:text-left space-y-4 md:w-1/2">
          <h2 className="text-black text-3xl md:text-4xl font-bold">Mobile</h2>
          <br />
          <h1 className="text-red-600 text-4xl md:text-5xl font-extrabold">
            Backcover
          </h1>
          <h1 className="text-red-600 text-4xl md:text-5xl font-extrabold">
            Tempered Glass
          </h1>
          <br />
          <br />
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
            Shop all !
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={res}
            alt="Mobile Accessories"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero