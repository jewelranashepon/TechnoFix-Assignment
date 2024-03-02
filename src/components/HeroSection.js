import React from 'react'

const HeroSection = () => {
  return (
    <>
    <div className="container mx-auto p-8 ">
         <div class="grid grid-cols-5 gap-2">
            <div class="col-span-2">
                <h1 className="font-bold text-4xl justify-items-start">Take ideas from better to best</h1>
                <p className="py-3">Miro is your team's visual platform to connect, collaborate, and create — together.</p>
                <form className="grid grid-cols-1 gap-y-4" >
                    <input type="email" 
                        class="appearance-none border border-solid border-gray-600 rounded-3xl py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" 
                        placeholder="Enter your work email"/>
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 rounded-3xl text-white font-bold py-1 px-4">
                        Sign up free
                    </button>

                </form>

            </div>
            <div class="col-span-3">
                <img src="hero_image.png" className="object-cover" />
            </div>
        </div>

    </div>
        
    </>
  )
}

export default HeroSection