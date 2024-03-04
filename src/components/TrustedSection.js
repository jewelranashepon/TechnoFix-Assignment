import React from 'react';
import '../input.css';
import { SiWalmart } from "react-icons/si";
import { SiCisco } from "react-icons/si";
import { SiVolvo } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { SiSamsung } from "react-icons/si";


const TrustedSection = () => {
  return (
    <>
    <div className="container my-10 p-4 bg-gray-50 mx-auto">
        <p className="text-sm">Trusted by 45M+ users</p>
        <div className="flex justify-between mx-16 max-sm:mx-1">
             <SiWalmart className="text-9xl max-sm:text-6xl"/>
             <SiCisco className="text-7xl mt-5 max-sm:text-4xl max-sm:mt-3"/>
             <SiVolvo className="text-5xl mt-8 max-sm:text-2xl max-sm:mt-5"/>
             <FaApple className="text-6xl mt-6 max-sm:text-3xl max-sm:mt-4"/>
             <SiSamsung className="text-8xl mt-2 max-sm:text-5xl"/>

        </div>
    </div>
        
    </>
  )
}

export default TrustedSection