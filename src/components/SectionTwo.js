import React from 'react';

const SectionTwo = () => {
  return (
    <div className="container mx-auto py-10">
        <div className="grid-cols-2 gap-16 mt-4 flex items-center h-full">

            <div className="w-full h-full object-cover">
                <img src="section2.png" alt="hybrid-work" />
            </div>

            <div>
                <h1 className="text-3xl font-semibold text-start">Connect your tools,<br/>close your tabs</h1>
                <p className="mt-3 text-left">
                    Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom,
                    Miro has 100+ integrations with tools you already use and love.
                </p>
                <a href="#" className="grid justify-items-start mt-10 text-blue-600">Learn More →</a>
            </div>

        </div>
        
    </div>
  )
}

export default SectionTwo