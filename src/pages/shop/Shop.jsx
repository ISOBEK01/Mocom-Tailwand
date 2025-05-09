import React from 'react'
import { useEffect, useState } from 'react';
import { FcLike } from "react-icons/fc";
import axios from 'axios'
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Shop = () => {
  const [product, setProducts] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios 
    .get ('https://dummyjson.com/products')
    .then(res => {
      setProducts(res.data.products)
      
    })
    .catch(err => console.log(err)
    )
    .finally()
  }, [])  
  return (
    <div className="py-10 h- mt-36">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {product.map(pro => (
        <div key={pro.id} className="shadow-lg rounded-2xl p-5  ">
          <img onClick={() => navigate(`/detail/${pro.id}`)} src={pro.thumbnail} alt={pro.title} className="w-full rounded-2xl cursor-pointer bg-[#EDF2F4] h-80" />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">{pro.title}</h2>
            <h3 className="text-sm text-gray-500 mb-2">{pro.catem}</h3>
            <p className="text-sm text-gray-600 mb-3">{pro.description}</p>
            <p className="text-md font-bold text-blue-600">{pro.price}$</p>
            <button className='mt-10'><FaShoppingCart className='text-xl active:text-blue-900'/></button>
            <button className='ml-60'><FcLike className='text-xl '/></button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Shop