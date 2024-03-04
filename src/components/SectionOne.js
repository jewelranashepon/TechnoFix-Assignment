import React from 'react';
import '../input.css';


const SectionOne = () => {
  return (
    <div className="container mx-auto py-10 p-2">
        <div className="grid grid-cols-2 gap-16 mt-4 items-center h-full max-sm:gap-2">
            <div>
                <h1 className="text-3xl font-semibold text-start max-sm:text-xl">Work together,<br/> wherever you work</h1>
                <p className="mt-3 text-left max-sm:text-sm">
                    In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate,
                    and co-create in one space no matter where you are.
                </p>
                <a href="#" className="grid justify-items-start mt-10  text-blue-600 max-sm:mt-3">Learn More →</a>
            </div>

            <div className="w-full h-full object-cover">
                <img src="hybridwork.png" alt="hybrid-work"/>
            </div>
        </div>
        
    </div>
  )
}

export default SectionOne