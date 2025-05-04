import React from 'react'
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import log from "../../assets/images/log.svg"
const Footer = () => {
  return <div>
    <br />
    <br />
    <br />
    <br />  
     <footer className="bg-[#f1f7fa] w-full py-10 px-6 md:px-16 ">
      <div className="max-w-7xl max-w-7xl m-auto mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-800">
        
        {/* Logo + About */}
        <div className="text-center md:text-left">
          <img src={log} alt="MOCOM" className="mx-auto md:mx-0 w-16 mb-4" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>

        {/* Contact Info */}
        <div className='ml-10'>
          <h3 className="font-semibold mb-2">Contact us</h3>
          <br />
          <p>E: <a href="mailto:info@example.com" className="text-blue-600">info@example.com</a></p>
          <br />
          <p>P: +94 767000000</p>
          <br />
          <p>A: 123 Hospital rd, <br /><br />Kalubowila, Dehiwela</p>
          <br />
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-2">Useful links</h3>
          <br />
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Shop All</a></li>
            <br />
            <li><a href="#" className="hover:underline">Tempered Glass</a></li>
            <br />
            <li><a href="#" className="hover:underline">Back-cover</a></li>
            <br />
            <li><a href="#" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-2xl" />
              <br />
              <span>Whatsapp</span>
              <br />
            </li>
            <br />
            <li className="flex items-center gap-3">
              <FaFacebook className="text-2xl" />
              <br />
              <span>Facebook</span>
              <br />
            </li>
            <br />
            <li className="flex items-center gap-3">
              <FaInstagram className="text-2xl" />
              <br />
              <span>Instagram</span>
              <br />
            </li>
            <br />
            <li className="flex items-center gap-3">
              <FaTiktok className="text-2xl" />
              <br />
              <span>Tik Tok</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
}

export default Footer
