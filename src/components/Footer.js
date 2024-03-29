import React from 'react';
import '../input.css';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-footer-color mt-20 py-12 max-sm:py-1">
    <div className="container mx-auto max-sm:pb-8">
        <div className="grid grid-cols-9 text-left py-12 gap-16 max-sm:grid-cols-1 max-sm:p-8 max-sm:gap-6">
            <div className="col-span-3">
                <h2 className="text-white font-semibold text-lg">Scan. Detect. Remove.</h2>
                <div className="flex gap-6 mt-8 max-sm:mt-2">
                    <FaTwitter className="text-white text-2xl"/>
                    <FaFacebookSquare className="text-white text-2xl"/>
                    <FaYoutube className="text-white text-2xl"/>
                </div>
                <div className="flex text-white text-sm gap-5 mt-6 max-sm:mt-4">
                    <a href="#" className="underline mask-p">Privacy Policy</a>
                    <a href="#" className="underline mask-p">Terms of Service</a>
                </div>
                <p className="mt-4 mask-p text-white">
                    Copyright © 2024 Certo Software Limited | Registered in England & Wales No. 10072356
                </p>

                <p className="text-white mask-p mt-4">Designed & developed by Bigger Picture</p>

            </div>

            <div className="col-span-2">
                    <h1 className="text-white text-2xl font-bold">Miro.</h1>
                    <div className="mt-8 max-sm:mt-4">
                        <hr/>
                    </div>

                    <div className="mt-8 max-sm:mt-4">
                        <ul className="space-y-2 max-sm:space-y-1">
                            <li className="justify-items-center">
                                <a href="#" className="flex gap-4">
                                    <img src="bar.png" style={{width:"20px", height:"2px"}} className="mt-3"/>
                                    <p className="text-footer-list-color font-semibold">iPhone</p>
                                </a>
                            </li>

                            <li className="justify-items-center">
                                <a href="#" className="flex gap-4">
                                    <img src="bar.png" style={{width:"20px", height:"2px"}} className="mt-3"/>
                                    <p className="text-footer-list-color font-semibold">Android</p>
                                </a>
                            </li>

                            <li className="justify-items-center">
                                <a href="#" className="flex gap-4">
                                    <img src="bar.png" style={{width:"20px", height:"2px"}} className="mt-3"/>
                                    <p className="text-footer-list-color font-semibold">Help</p>
                                </a>
                            </li>

                            <li className="justify-items-center">
                                <a href="#" className="flex gap-4">
                                    <img src="bar.png" style={{width:"20px", height:"2px"}} className="mt-3"/>
                                    <p className="text-footer-list-color font-semibold">About</p>
                                </a>
                            </li>

                            <li className="justify-items-center">
                                <a href="#" className="flex gap-4">
                                    <img src="bar.png" style={{width:"20px", height:"2px"}} className="mt-3"/>
                                    <p className="text-footer-list-color font-semibold">Insights</p>
                                </a>
                            </li>
                        </ul>
                    </div>

            </div>

            <div className="col-span-4">
                <div className="w-full h-56 m-2 rounded-3xl bg-footer-list-color relative">
                    <img src="path.svg" alt="mark-image" className="object-cover h-full absolute right-32 max-sm:right-20 max-md:right-12"/>
                    <div className="relative w-3/5 top-8 left-16 max-sm:top-4 max-md:top-2">
                        <div className="space-y-2 max-sm:space-y-0">
                            <h2 className="font-semibold text-xl max-sm:text-lg">Sign up to our newsletter</h2>
                            <p className="mask-p">
                                Receive the latest mobile security news, exclusive discounts & offers straight
                                to your inbox!
                            </p>

                        </div>  
                    </div>

                    <div className="relative w-3/4 top-12 left-16 max-sm:top-6 max-md:top-4 ">
                        <form className="flex max-md:grid max-md:gap-1">
                            <input type="email" 
                                class="appearance-none border border-solid border-gray-600 rounded-3xl rounded-tr-none rounded-br-none py-1  px-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 max-md:rounded-full" 
                                placeholder="Enter your work email"/>

                            <button type="submit" class="bg-footer-submit-color hover:bg-blue-700 rounded-3xl rounded-tl-none rounded-bl-none text-white py-1 px-2 max-md:rounded-full">
                                Sign up free
                            </button>
                        </form>
                    </div>   

                </div>
            </div>

        </div>

        <div>
            <p className="w-3/5 text-white text-left mask-p max-sm:px-8 max-sm:w-full">
            Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other
            countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play
            logo are trademarks of Google LLC.
            </p>
        </div>
    </div>               
    </footer>
  )
}

export default Footer;