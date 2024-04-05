import React from 'react'
import pcblack from '../assets/pcblack1.jpg'
import pctwo from '../assets/pcblack2.jpg'
import pcthree from '../assets/pcblack4.jpg'

function Portfolio() {
  return (
    <div className="flex items-center justify-center bg-black" >
      <div className="w-[1024px] h-[100vh] text-center text-white">
            <div className='w-auto h-auto'>
                <div className="w-auto h-[20vh] flex items-center justify-center">
                  <h1 className="text-5xl font-bold max-md:text-3xl">Latest <span className="text-orange-700">Project</span></h1>
                </div>
                <div className="w-auto h-[80vh] flex items-center justify-center max-md:flex-col max-md:flex max-md:items-center max-md:justify-center max-md:mt-[180px]  max-md:w-[640px] max-md:h-[30vh]">
                      <div className="w-[280px] h-auto flex flex-col items-center justify-center relative mr-6 max-md:mr-0 group shadow-[1px_1px_8px_orange] rounded-lg cursor-pointer max-md:mb-10 max-md:w-[350px] ">
                        <img src={pcblack} className="w-[100%] h-[350px] rounded-lg group-hover:opacity-20 max-md:h-[200px] max-md:w-[350px]" />
                            <h1 className="absolute mb-[120px] text-3xl font-bold text-orange-700 opacity-0 group-hover:opacity-100 duration-300">Web Design</h1>
                            <h3 className=" absolute opacity-0 group-hover:opacity-100 duration-300 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nam voluptatem</h3>
                            <h2 className="absolute mt-[120px] text-2xl text-orange-700 font-bold opacity-0 group-hover:opacity-100 duration-300">LOGO</h2>
                      </div>
                      <div className="w-[280px] h-auto flex flex-col items-center justify-center relative mr-6 max-md:mr-0 group shadow-[1px_1px_8px_orange] rounded-lg cursor-pointer max-md:mb-4 max-md:w-[350px] ">
                        <img src={pctwo} className="w-[100%] h-[350px] rounded-lg group-hover:opacity-20 max-md:h-[200px] max-md:w-[350px]" />
                            <h1 className="absolute mb-[120px] text-3xl font-bold text-orange-700 opacity-0 group-hover:opacity-100 duration-300">Computer Network</h1>
                            <h3 className=" absolute opacity-0 group-hover:opacity-100 duration-300 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nam voluptatem</h3>
                            <h2 className="absolute mt-[120px] text-2xl text-orange-700 font-bold opacity-0 group-hover:opacity-100 duration-300">LOGO</h2>
                      </div>
                      {/* <div className="w-[280px] h-auto flex flex-col items-center justify-center relative mr-6 group shadow-[1px_1px_8px_orange] rounded-lg cursor-pointer max-md:mb-4 max-md:w-[350px]">
                        <img src={pcthree} className="w-[100%] h-[350px] rounded-lg group-hover:opacity-20 max-md:h-[200px] max-md:w-[350px]" />
                            <h1 className="absolute mb-[120px] text-3xl font-bold text-orange-700 opacity-0 group-hover:opacity-100 duration-300">Web Design</h1>
                            <h3 className=" absolute opacity-0 group-hover:opacity-100 duration-300 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nam voluptatem</h3>
                            <h2 className="absolute mt-[120px] text-2xl text-orange-700 font-bold opacity-0 group-hover:opacity-100 duration-300">LOGO</h2>
                      </div> */}
                </div>
          </div>      
      </div>
    </div>
  )
}

export default Portfolio