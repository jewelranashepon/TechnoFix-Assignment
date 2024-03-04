import React from 'react';
import '../input.css';


const SectionSix = () => {
  return (
    <>
    <div className="container mx-auto">
        <h1 className="font-semibold text-4xl max-sm:text-2xl">Loved by the world's best teams</h1>
        <div className="mt-6">
            <a href="#" className="text-blue-600 border rounded-full px-3 py-1">See all customer stories →</a>
        </div>

        <div className="grid grid-cols-3 px-2 gap-10 mt-20 justify-items-start max-sm:mt-6 max-sm:grid-cols-1">
            <div>
                <h1 className="text-4xl font-semibold text-left max-sm:text-2xl">vmware</h1>
                <p className="text-left mt-6 text-sm max-sm:mt-2">
                    “When the pandemic hit, those of us who thrive on in-person collaboration were worried that
                    our creativity and productivity would suffer. Miro was the perfect tool to help us with
                    collaboration, whiteboarding, and retrospectives while remote.”
                </p>

                <div className="flex gap-3 mt-10 max-sm:mt-4">
                    <img src="mask1.png" className="h-14 w-14"/>
                    <div className="text-left text-sm">
                        <h5 className="mask-h">Roxanne Mustafa</h5>
                        <p className="mask-p">Design Team Lead at VMware</p>
                    </div>

                </div>
            </div>

            <div>
                <h1 className="text-4xl font-semibold text-left max-sm:text-2xl">DocuSign</h1>
                <p className="text-left mt-6 text-sm max-sm:mt-2">
                    “Miro helps solve one of the major gaps in product design: how to manage tasks across
                    product designers whose projects are in different tools.”
                </p>

                <div className="flex gap-3 mt-20 max-sm:mt-4">
                    <img src="mask2.png" className="h-14 w-14"/>
                    <div className="text-left text-sm">
                        <h5 className="mask-h">Jane Ashley</h5>
                        <p className="mask-p">Head of Design at DocuSign</p>
                    </div>

                </div>
            </div>

            <div>
                <h1 className="text-4xl font-semibold text-left max-sm:text-2xl">Frog</h1>
                <p className="text-left mt-6 text-sm max-sm:mt-2">
                    “As we used Miro we moved from skepticism to belief to innovation, and now we have a
                    tool that’s at the core of what we do and will continue to extend into the future.”
                </p>

                <div className="flex gap-3 mt-16 max-sm:mt-4">
                    <img src="mask3.png" className="h-14 w-14"/>
                    <div className="text-left text-sm">
                        <h5 className="mask-h">Laura Baird</h5>
                        <p className="mask-p">Associate Design Director at frog</p>
                    </div>

                </div>

            </div>

        </div>

    </div>
        
    </>
  )
}

export default SectionSix