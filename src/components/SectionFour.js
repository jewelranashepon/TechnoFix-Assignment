import React from 'react';
import { MdOutlineArrowRightAlt } from "react-icons/md";


const SectionFour = () => {
  return (
    <div className="container mx-auto py-6">
        <h1 className="text-4xl text-left font-semibold">Built for the way you work</h1>

        <div className="my-4">
            <nav class="py-4">
                    <ul class="flex justify-between">
                        <li><a href="#" class="hover:bg-gray-300 rounded-full px-3 py-1 border bg-gray-200">Brainstorming</a></li>
                        <li><a href="#" class="hover:bg-gray-300 rounded-full px-3 py-1 border">Diagramming</a></li>
                        <li><a href="#" class="hover:bg-gray-300 rounded-full px-3 py-1 border">Meetings & Workshops</a></li>
                        <li><a href="#" class="hover:bg-gray-300 rounded-full px-3 py-1 border">Scrum Events</a></li>
                        <li><a href="#" class="hover:bg-gray-300 rounded-full px-3 py-1 border">Mapping</a></li>
                        <li><a href="#" class="hover:bg-gray-300 rounded-full px-3 py-1 border">Research & Design</a></li>
                        <li><a href="#" class="hover:bg-gray-300 rounded-full px-3 py-1 border">Strategic Planning</a></li>
                    </ul>
            </nav>
        </div>

        <div className="grid grid-cols-6 my-4 gap-3 items-center">
            <div class="col-span-2 py-4 items-center">
                <h3 className="text-xl font-semibold text-left">Brainstorming</h3>
                <p className="text-sm text-left mt-2">Unleash creative ideas and build on them with the help of sticky notes, images, mind maps,
                 videos, drawing capabilities — the list goes on.
                </p>
                <div className="mt-6">
                  <a href="#" className="flex items-center gap-1 underline text-blue-600 hover:text-green-500">
                    Learn more
                    <MdOutlineArrowRightAlt/>
                  </a>
                </div>  
            </div>
            <div class="col-span-4">
                <img src="section4.png" alt="section4 image" className="object-cover h-full w-full"/>
                
            </div>

        </div>
        
    </div>
  )
}

export default SectionFour