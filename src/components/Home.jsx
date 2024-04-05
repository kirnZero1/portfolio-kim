import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import  greenHat  from '../assets/greenhat01.jpg';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className=" flex text-center items-center justify-center bg-black">
            <div className="w-[1024px] h-[100vh] text-white flex items-center justify-center  overflow-hidden">
                <div className="w-auto h-[100vh] flex items-center justify-center max-md:flex-col max-md:w-[700px] ">
                    <div className="text-left w-[700px] max-md:w-[500px]">
                    <p className="text-3xl mb-3 max-md:text-2xl">Hello, It's Me</p>
                    <p className="text-5xl mb-3 max-md:text-3xl">Ponciano Kim Aguas</p>
                    <p className="text-3xl mb-3 max-md:text-2xl">And I'm a <span className="text-[#FD5901] font-bold text-3xl">FrontEnd Developer</span>,</p>
                    <p className="text-3xl mb-3 max-md:text-2xl text-[#FD5901] font-bold ">Network Engineer, Highly Trainable</p>
                    <p className="text-2xl font-bold mb-3 max-md:text-1xl">APRIL 2007</p>
                    <p className="text-2xl font-bold mb-3 max-md:text-1xl">BACHELOR OF SCIENCE IN COMPUTER SCIENCE AND INFORMATION SYSTEM,</p>
                    <p className="text-1xl font-thin mb-3 max-md:text-1xl">Centro Escolar University, Malolos, Bulacan,</p>
                    <p className="text-1xl font-thin mb-3 max-md:text-1xl">Calumpit Institute, 2003</p>
                    <p className="text-1xl font-thin mb-3 max-md:text-1xl"> Arsenio Santos Memorial Elementary School, 1998</p>
                    <div className="flex items-center justify-left mb-5" >
                      <Link className="text-[#FD5901] text-2xl py-3 px-3 rounded-full border-2 border-orange-600 mr-3 hover:bg-orange-400 hover:text-white hover:border-white hover:scale-125 duration-300 "><FaFacebookF /> </Link>
                      <Link className="text-[#FD5901] text-2xl py-3 px-3 rounded-full border-2 border-orange-600 mr-3 hover:bg-orange-400 hover:text-white hover:border-white hover:scale-125 duration-300 "><FaGithub /> </Link>
                      <Link className="text-[#FD5901] text-2xl py-3 px-3 rounded-full border-2 border-orange-600 mr-3 hover:bg-orange-400 hover:text-white hover:border-white hover:scale-125 duration-300"><FaInstagram /></Link> 
                      <Link className="text-[#FD5901] text-2xl py-3 px-3 rounded-full border-2 border-orange-600  hover:bg-orange-400 hover:text-white hover:border-white hover:scale-125 duration-300 "><FaLinkedinIn /></Link>
                    </div>
                    <div><button className="bg-[#FD5901] px-14 py-1 rounded-lg max-md:px-4 font-bold hover:text-black hover:bg-orange-400 hover:scale-110 duration-300 shadow-[1px_1px_8px_orange] ">Download CV</button></div>
                    </div>
                    <div className="text-center w-[300px]  flex justify-center items-center " >
                      <img className="w-[300px] h-[350px] max-md:w-[200px] max-md:h-[250px] rounded-lg " src={greenHat} />
                    </div>
                    
                </div>
            </div>
    </div>
  )
}

export default Home