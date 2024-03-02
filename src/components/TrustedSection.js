import React from 'react';
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
        <div className="flex justify-between mx-16">
             <SiWalmart className="text-9xl"/>
             <SiCisco className="text-7xl mt-4"/>
             <SiVolvo className="text-5xl mt-7"/>
             <FaApple className="text-6xl mt-5"/>
             <SiSamsung className="text-8xl mt-2"/>

        </div>
    </div>
        
    </>
  )
}

export default TrustedSection