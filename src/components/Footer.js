import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-footer-color mt-20">
    <div className="container mx-auto">
        <div className="grid grid-cols-9 text-left py-12 gap-16">
            <div className="col-span-3">
                <h2 className="text-white font-semibold text-lg">Scan. Detect. Remove.</h2>
                <div className="flex gap-6 mt-8">
                    <FaTwitter className="text-white text-2xl"/>
                    <FaFacebookSquare className="text-white text-2xl"/>
                    <FaYoutube className="text-white text-2xl"/>
                </div>
                <div className="flex text-white text-sm gap-5 mt-6">
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
                    <div className="mt-8">
                        <hr/>
                    </div>

                    <div className="mt-8">
                        <ul className="space-y-2">
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
                <div className="w-full h-52 m-2 rounded-3xl bg-footer-list-color relative">
                    <img src="path.svg" alt="mark-image" className="object-cover h-full absolute right-32"/>
                    <div className="relative left-10 top-6 right-10">
                        <div className="object-cover">
                            <h2>Sign up to our newsletter</h2>
                            <p className="mask-p">
                                Receive the latest mobile security news, exclusive discounts & offers straight
                                to your inbox!
                            </p>

                        </div>
                        
                    </div>

                </div>
                        

            </div>

        </div>
    </div>               
    </footer>
  )
}

export default Footer;