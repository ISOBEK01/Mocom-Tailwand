import React from 'react'
import { FaTruck, FaHandHoldingUsd, FaAward } from 'react-icons/fa';


const Choose = () => {
  return (
    <div>1
      <div className="bg-white py-16 px-4 lg:px-24 text-center max-w-7xl m-auto">
      <div className="mb-12">
        <div className="w-3 h-12  bg-red-600 mx-auto rounded-full mb-2"></div>
        <h2 className="text-gray-800 font-medium text-lg">Why Choose US</h2>
      </div>
<br />
<br />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <FaTruck className="text-red-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
          <p className="text-gray-700 max-w-xs mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div>
          <FaHandHoldingUsd className="text-red-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Cheap Price</h3>
          <p className="text-gray-700 max-w-xs mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div>
          <FaAward className="text-red-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
          <p className="text-gray-700 max-w-xs mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Choose