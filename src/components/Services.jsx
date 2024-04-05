import React from 'react'

function Services() {
  return (
    <div className=" flex items-center justify-center bg-black">
      <div className="w-auto h-[100vh] text-white">
        <div className="w-[1024px] h-[100vh] flex items-center justify-center">
          <div className=" flex flex-col items-center justify-center">
                    <div className="text-center w-auto h-[10vh] justify-center items-center flex " >
                    <h1 className="text-5xl font-bold">Our <span className="text-orange-600">Services</span></h1>
                  </div>
                  <div className="w-auto h-[70vh] text-center justify-center items-center flex  max-md:flex-col  max-md:mt-10 max-md:h-[90vh] max-md:w-[350px]">
                      <div className='w-[280px] h-[300px] bg-zinc-900  rounded-lg  flex flex-col justify-center items-center mr-8 max-md:mr-0 hover:shadow-[1px_1px_8px_orange] hover:scale-125 duration-700 max-md:mb-2'>
                       <h2 className="text-3xl mb-5 text-orange-600">Logo</h2>
                        <h2 className="text-2xl mb-5 font-bold">Web Development</h2>
                        <p className="text-1xl mb-5 max-md:mb-3">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Sed nam voluptatem</p>
                        <div><button className="bg-[#FD5901] px-6 py-1 rounded-lg text-black max-md:px-4 font-bold hover:text-white hover:bg-orange-400  duration-300 shadow-[1px_1px_8px_orange] ">Read More</button></div>
                      </div>
                      <div className='w-[280px] h-[300px] bg-zinc-900  rounded-lg  flex flex-col justify-center items-center mr-8 max-md:mr-0 hover:shadow-[1px_1px_8px_orange] hover:scale-125 duration-700 max-md:mb-2'>
                       <h2 className="text-3xl mb-5 text-orange-600">Logo</h2>
                        <h2 className="text-2xl mb-5 font-bold">Computer Network</h2>
                        <p className="text-1xl mb-5 max-md:mb-3">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Sed nam voluptatem</p>
                        <div><button className="bg-[#FD5901] px-6 py-1 rounded-lg text-black max-md:px-4 font-bold hover:text-white hover:bg-orange-400  duration-300 shadow-[1px_1px_8px_orange] ">Read More</button></div>
                      </div>
                      <div className='w-[280px] h-[300px] bg-zinc-900  rounded-lg  flex flex-col justify-center items-center  hover:shadow-[1px_1px_8px_orange] hover:scale-125 duration-700 max-md:mb-8'>
                       <h2 className="text-3xl mb-5 text-orange-600">Logo</h2>
                        <h2 className="text-2xl mb-5 font-bold">Web Development</h2>
                        <p className="text-1xl mb-5 max-md:mb-3">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Sed nam voluptatem</p>
                        <div><button className="bg-[#FD5901] px-6 py-1 rounded-lg text-black max-md:px-4 font-bold hover:text-white hover:bg-orange-400  duration-300 shadow-[1px_1px_8px_orange]  ">Read More</button></div>
                      </div>
                  </div>
            </div>
        </div>
      </div>
    </div>
  )
}


export default Services