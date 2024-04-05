import React from 'react'
import  greenHat  from '../assets/greenhat01.jpg';

function About() {
  return (
    <div className=" flex text-center items-center justify-center bg-black">
            <div className="w-[1024px] h-[100vh] text-white flex items-center justify-center  overflow-hidden">
                    <div className="w-auto h-[100vh] flex items-center justify-center max-md:flex-col max-md:w-[700px] ">
                    <div className="text-center w-[400px]  flex justify-center items-center " >
                    <img className="w-[350px] h-[400px] max-md:w-[200px] max-md:h-[250px] rounded-lg shadow-[1px_1px_8px_orange] ml-1" src={greenHat} />
                    </div>
                    <div className="text-left w-[650px] max-md:w-[500px]">
                    <p className="text-3xl mb-3 max-md:text-2xl">About  <span className="text-[#FD5901] font-bold text-3xl">Me</span>,</p>
                    <p className="text-4xl mb-4 max-md:text-2xl text-[#FD5901] font-bold">Network Engineer, Frontend Developer</p>
                    <p className="text-2xl font-bold mb-3 max-md:text-1xl max-md:font-thin">SKILLS</p>
                    <p className="text-2xl font-bold mb-3 max-md:text-1xl max-md:font-thin">1. COMPUTER NETWORK.</p>
                    <p className="text-2xl font-bold mb-3 max-md:text-1xl max-md:font-thin">2. TROUBLESHOOTING WINDOWS SERVER HP ML350 SERIES, AVAYA PHONE, COMPUTER AND LAPTOPS.</p>
                    <p className="text-2xl font-bold mb-5 max-md:text-1xl max-md:font-thin">3. WEB DEVELOPMENT -- JAVASCRIPT, REACTJS, HTML, CSS,TAILWIND CSS, MYSQL, BASIC knowledge on NODEJS, EXPRESSJS, MONGODB</p>
                    <div><button className="bg-[#FD5901] px-14 py-1 rounded-lg max-md:px-4 font-bold hover:text-black hover:bg-orange-400 hover:scale-110 duration-300 shadow-[1px_1px_8px_orange]">Read More</button></div>   
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About