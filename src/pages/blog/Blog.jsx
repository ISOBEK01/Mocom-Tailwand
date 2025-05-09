import React from 'react'
import res65 from "../../assets/images/Rectangle 65.svg"
import res66 from "../../assets/images/Rectangle 67.svg"

const Blog = () => {
  return (
    <div>


      <div className="max-w-7xl mt-20 mx-auto px-4 py-10">
         
       
        <h2 className="text-3xl font-bold mb-10">Blog Posts</h2>

        {/* Post 1 */}
        <div className="bg-gray-100 rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-4">Tempered Glass</h3>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.


            </p>
          </div>
          <div className="w-full md:w-1/2">
          <img
  src={res65}
  alt="Tempered Glass"
  className=" md:w-1/2  rounded-xl"
/>
          </div>
        </div>

        {/* Post 2 */}
        <div className="bg-gray-100 shadow rounded-xl p-6 mb-8 flex flex-col md:flex-row-reverse items-center gap-6">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-4">Back Cover</h3>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.


            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={res66}
              alt="Back Cover"
              className="w-[310px] rounded-xl"
            />
          </div>
        </div>

        {/* Post 3 */}
        <div className="bg-gray-100 rounded-xl p-10 mb-8">
          <h3 className="text-xl font-bold mb-4">Mobile Brand and Price Strategy</h3>
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.


          </p>
        </div>
      </div></div>
  )
}

export default Blog