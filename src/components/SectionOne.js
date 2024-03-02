import React from 'react'

const SectionOne = () => {
  return (
    <div className="container mx-auto py-10">
        <div className="grid-cols-2 gap-16 mt-4 flex items-center h-full">
            <div>
                <h1 className="text-3xl font-semibold text-start">Work together,<br/> wherever you work</h1>
                <p className="mt-3 text-left">
                    In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate,
                    and co-create in one space no matter where you are.
                </p>

                <a href="#" className="grid justify-items-start mt-10 underline text-blue-600">Learn More</a>

            </div>

            <div className="w-full h-full object-cover">
                <img src="hybridwork.png" alt="hybrid-work" />
            </div>

        </div>
        
    </div>
  )
}

export default SectionOne