import React from 'react';
import '../input.css';
import { RiArrowDownSLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";


const Header = () => {
  return (
    <>
    <nav className="bg-gray-100 p-4">
      <div className="flex justify-between">
        {/* left section of navbar */}
        <div className="flex justify-start">
          <div className="w-16 h-6">
              <img src="logo.png" alt="logo"/>
          </div>
          <div className="ms-10">
            <ul className="flex space-x-5">
              <li className="flex items-center gap-1">
                  <a href="#" className="hover:text-gray-500">Products</a>
                  <RiArrowDownSLine />
              </li>
              <li className="flex items-center gap-1">
                <a href="#" className="hover:text-gray-500">Solutions</a>
                <RiArrowDownSLine />

              </li>
              <li className="flex items-center gap-1">
                <a href="#" className="hover:text-gray-500">Resources</a>
                <RiArrowDownSLine />

              </li>
              <li className="flex items-center gap-1">
                <a href="#" className="hover:text-gray-500">Enterprise</a>
              </li>
              <li className="flex items-center gap-1">
                <a href="#" className="hover:text-gray-500">Pricing</a>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Right section of navbar */}
        <div className="flex justify-end">
            <ul className="flex space-x-5">
              <li className="flex items-center gap-0">
              <TbWorld  className="text-xl"/>
              <a href="#" className="hover:text-gray-600" >EN</a>
              </li>
              <li className="flex items-center gap-1">
                <a href="#" className="hover:text-gray-500">Contact</a>
              </li>

              <li className="flex items-center gap-1">
                <a href="#" className="hover:text-gray-500">Sales</a>
              </li>
              <li className="flex items-center gap-1">
                <a href="#" className="hover:text-gray-500">Login</a>
              </li>
              <li className="flex items-center gap-1">
              <button class="flex  gap-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded-2xl">
                 Sign up free →
              </button>
              </li>
            </ul>
          </div>        
      </div>
    </nav>

    </>
  )
}

export default Header