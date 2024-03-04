import React from 'react';
import { FaFigma } from "react-icons/fa6";
import '../input.css';




const SectionFive = () => {
  return (
    <div className="container py-6 mx-auto max-sm:py-0">
        <h1 className="text-3xl font-semibold text-left max-md:text-2xl max-md:text-center">Built for all kinds of teams</h1>

        <div className="my-4 max-sm:my-1">
            <nav class="py-4">
                    <ul class="flex justify-start gap-4 max-md:text-sm max-md:grid max-md:grid-cols-2 max-md:gap-y-3">
                        <li><a href="#" class="hover:bg-gray-300 rounded-full px-3 py-1 border bg-gray-200">UX & Design</a></li>
                        <li><a href="#" class="hover:bg-gray-300 rounded-full px-3 py-1 border">Marketing</a></li>
                        <li><a href="#" class="hover:bg-gray-300 rounded-full px-3 py-1 border">Product Management</a></li>
                        <li><a href="#" class="hover:bg-gray-300 rounded-full px-3 py-1 border">Engineering</a></li>
                        <li><a href="#" class="hover:bg-gray-300 rounded-full px-3 py-1 border">Consultants</a></li>
                        <li><a href="#" class="hover:bg-gray-300 rounded-full px-3 py-1 border">Agile Coaches</a></li>
                        <li><a href="#" class="hover:bg-gray-300 rounded-full px-3 py-1 border">Sales</a></li>
                    </ul>
            </nav>
        </div>

        <div className="grid grid-cols-6 my-4 gap-3 p-2 max-md:my-0 max-md:grid-cols-1">
            <div class="col-span-2 py-4 items-center mt-6">
                <ul class="space-y-2">
                    <li class="flex items-center gap-2 text-sm">
                        <img src="vector.svg"/>
                        Build low-fi wireframes
                    </li>
                    <li class="flex items-center gap-2 text-sm">
                        <img src="vector.svg"/>
                        Involve stakeholders in the design process
                    </li>
                    <li class="flex items-center gap-2 text-sm">
                        <img src="vector.svg"/>
                        Run engaging design workshops
                    </li>
                </ul>

                <div className="mt-8 max-sm:mt-2">
                  <a href="#" className="flex items-center gap-1  text-blue-600 hover:text-green-500">
                    Learn more →
                  </a>
                </div>  

                <div className="text-left mt-16 max-sm:mt-4">
                    <h3>Integrate your favorite tools</h3>
                    <ul className="flex items-center justify-start mt-2 gap-8">
                        <a href="#"><img src="v_0.svg" alt="vector0"/></a>
                        <a href="#" className="flex p-1" style={{backgroundImage: "url('v_1.svg')"}}><img src="v_2.svg" alt="vector1"/><img src="v_3.svg"/></a>
                        <a href="#"><img src="v_4.svg" alt="vector0"/></a>
                        <a href="#"><FaFigma className="text-2xl"/></a>
                    </ul>
                </div>
               
            </div>
            <div class="col-span-4 max-sm:">
                <img src="section5.png" alt="section5 image" className="object-cover h-full w-full"/>
                
            </div>

        </div>

        
        
    </div>
  )
}

export default SectionFive