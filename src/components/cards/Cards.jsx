import React from 'react'
import i14 from "../../assets/images/Rectangle 144.svg"
import i15 from "../../assets/images/Rectangle 15.svg"
import i16 from "../../assets/images/Rectangle 16.svg"
import i17 from  "../../assets/images/Rectangle 17.svg"
const Cards = () => {
  return (
    <div>
       <div className="min-h-screen bg-white p-6 max-w-7xl m-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        <div className="bg-gray-100 rounded-lg p-4 text-center shadow hover:shadow-md transition">
          <div className="flex justify-start">
            <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">sale !</span>
          </div>
          <img src={i14} className="w-full h-48 object-contain my-4" />
          <h3 className="text-sm font-semibold text-gray-700">iPhone 13 Pro - Transparent</h3>
          <p className="text-gray-500 text-sm">LKR 499</p>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 text-center shadow hover:shadow-md transition">
          <div className="flex justify-start">
            <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">sale !</span>
          </div>
          <img src={i15} className="w-full h-48 object-contain my-4" />
          <h3 className="text-sm font-semibold text-gray-700">Samsung S23+ - Transparent</h3>
          <p className="text-gray-500 text-sm">LKR 799</p>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 text-center shadow hover:shadow-md transition">
          <div className="flex justify-start">
            <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">sale !</span>
          </div>
          <img src={i16} alt="iPhone 14" className="w-full h-48 object-contain my-4" />
          <h3 className="text-sm font-semibold text-gray-700">iPhone 14 - Transparent with magsafe</h3>
          <p className="text-gray-500 text-sm">LKR 799</p>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 text-center shadow hover:shadow-md transition">
          <div className="flex justify-start">
            <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">sale !</span>
          </div>
          <img src={i17} className="w-full h-48 object-contain my-4" />
          <h3 className="text-sm font-semibold text-gray-700">Pixel 7 Pro - Transparent Wireless</h3>
          <p className="text-gray-500 text-sm">LKR 599</p>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Cards