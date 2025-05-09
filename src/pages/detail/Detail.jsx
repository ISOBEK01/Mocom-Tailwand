import axios from 'axios';
import i14 from "../../assets/images/Rectangle 144.svg"
import i15 from "../../assets/images/Rectangle 15.svg"
import i16 from "../../assets/images/Rectangle 16.svg"
import i17 from  "../../assets/images/Rectangle 17.svg"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(res => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className='max-w-7xl m-auto'>
    <div className="p-10 mt-20 mb-20">
      <h1 className='ml-[500px] mt-24 absolute'>Malumot</h1>
      <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
      <br />
      <img
      
        src={product.thumbnail}
        alt={product.title}
        className="w-96 mb-4 ml-10 rounded-2xl cursor-pointer bg-[#EDF2F4] h-80"
      />
      <div className="m-auto max-w-[700px] ml-[500px] absolute -mt-[270px]">
      <p className='font-semibold mb-5'>{product.title}</p>
      <p className='font-semibold mb-5'>{product.catem}</p>

      <p className="mb-5">Price: ${product.description}</p>
      <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus est amet magni, quo animi totam laboriosam atque obcaecati impedit hic.</p>
      <p className='font-semibold mb-5'>{product.price}</p>
     
    </div>
    </div>











           <div className=" bg-white p-6 max-w-7xl m-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            
            <div className="bg-gray-100 rounded-lg p-4 text-center shadow hover:shadow-md transition">
              <div className="flex justify-start">
                <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">sale !</span>
              </div>
              <img  src={i14} className="w-full h-48 object-contain my-4" />
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
  );
};

export default Detail;
