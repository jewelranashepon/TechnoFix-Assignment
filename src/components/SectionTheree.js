import React from 'react';
import '../input.css';


const SectionTheree = () => {
const imageUrl = 'back3.png'; // Replace this with your image URL

  return (
    <div className="container mx-auto py-10">
        <div className="relative">
            <img src="back3.png" alt="background"/>
            <div className="absolute top-52 right-32 max-sm:top-16 max-sm:right-8">
                <h1 className="font-semibold text-xl mb-2 max-sm:text-sm">The Way We Work</h1>
                <p className="text-md mb-2 max-sm:text-sm">How has our relationship with work changed?</p>
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 rounded-3xl text-white  py-1 px-4">
                    View the report →
                </button>
            </div>
        </div>

        
        
    </div>
    
  )
}

export default SectionTheree