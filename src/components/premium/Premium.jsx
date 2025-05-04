import React from 'react'
import res22 from "../../assets/images/Rectangle 22.svg"
const Premium = () => {
  return (
    <div>    <div className="relative max-w-7xl m-auto flex justify-center items-center min-h-screen bg-white p-6 max-w-7xl m-auto">
    {/* Decorative Blue Background Box (Behind the Card) */}
    <div className="absolute right-20 top-24  w-[530px] h-[500px] bg-[#002d47]  z-0 hidden lg:block"></div>

    {/* Main Card */}
    <div className="relative z-10 bg-[#f1f7fa] rounded-xl p-6 md:p-10 flex flex-col lg:flex-row items-center max-w-6xl w-full shadow-lg">
      
      {/* Left Side - Text */}
      <div className="lg:w-1/2 w-full text-center lg:text-left mb-6 lg:mb-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-600 mb-2">Shop Premium</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mb-4">
          Tempered Glass in wholesale Price !
        </h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-800 font-medium mb-4">LKR : 299</p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-200">
          Shop Tempered Glass
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <img
          src={res22}
          alt="Tempered Glass"
          className="w-56 sm:w-64 lg:w-72"
        />
      </div>
    </div>
  </div></div>
  )
}

export default Premium