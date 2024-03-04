import React from 'react';
import '../input.css';


const SectionTwo = () => {
  return (
    <div className="container mx-auto py-10">
        <div className="grid grid-cols-2 gap-16 mt-4 items-center h-full max-sm:gap-2">

            <div className="w-full h-full object-cover">
                <img src="section2.png" alt="hybrid-work" />
            </div>

            <div>
                <h1 className="text-3xl font-semibold text-start max-sm:text-xl">Connect your tools,<br/>close your tabs</h1>
                <p className="mt-3 text-left max-sm:text-sm">
                    Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom,
                    Miro has 100+ integrations with tools you already use and love.
                </p>
                <a href="#" className="grid justify-items-start mt-10 text-blue-600 max-sm:mt-3">Learn More →</a>
            </div>

        </div>
        
    </div>
  )
}

export default SectionTwo