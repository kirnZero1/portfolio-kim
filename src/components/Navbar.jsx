import React,{useState} from 'react'
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


function Navbar() {
  const [nav, setNav] = useState(true)

  return (
    <div className=" text-center flex  items-center justify-center  bg-black sticky top-0">
        <div className=" w-[1024px] h-[50px] text-center bg-black  text-white">
            <div className="w-auto h-[50px] ">
              <div className="flex justify-between items-center text-center">
              <Link to="/home" className="text-3xl font-bold hover:text-[#FD5901] mt-2 ml-2">Personal Portfolio</Link>
                  <ul className="flex items-center justify-center font-semibold mt-[11px] mr-2 max-md:hidden ">
                    <li className="list-none" ><NavLink exact="true" to="/home" activeclassname="active" className=" text-xl hover:text-[#FD5901] mr-3 duration-300">Home</NavLink></li>
                    <li className="list-none" ><NavLink exact="true" to="/about" activeclassname="active" className=" text-xl hover:text-[#FD5901] mr-3 duration-300">About</NavLink></li>
                    <li className="list-none" ><NavLink exact="true" to="/services" activeclassname="active" className="text-xl hover:text-[#FD5901] mr-3 duration-300">Services</NavLink></li>
                    <li className="list-none" ><NavLink exact="true" to="/portfolio" activeclassname="active" className=" text-xl hover:text-[#FD5901] mr-3 duration-300">Portfolio</NavLink></li>
                    <li className="list-none" ><NavLink exact="true" to="/contact" activeclassname="active" className=" text-xl hover:text-[#FD5901] mr-3 duration-300">Contact</NavLink></li>
                  </ul>
                <NavLink className=" text-white cursor-pointer md:hidden text-4xl items-center text-center justify-center mt-2" onClick={()=>setNav(!nav)}>{!nav ? <IoClose /> : <GiHamburgerMenu />}</NavLink>
              </div>
                <div className={!nav ? "md:hidden bg-black w-auto h-[100vh] " : "hidden" } >
                <ul className="flex-col items-center justify-center font-semibold ">
                      <li className="list-none py-4 text-center" onClick={()=>setNav(!nav)}><NavLink exact="true" to="/home" activeclassname="active" className="text-xl hover:text-[#FD5901] mr-3 duration-300">Home</NavLink></li>
                      <li className="list-none py-4 text-center" onClick={()=>setNav(!nav)}><NavLink exact="true" to="/about" activeclassname="active" className="text-xl hover:text-[#FD5901] mr-3 duration-300">About</NavLink></li>
                      <li className="list-none py-4 text-center" onClick={()=>setNav(!nav)}><NavLink exact="true" to="/services" activeclassname="active" className="text-xl hover:text-[#FD5901] mr-3 duration-300">Services</NavLink></li>
                      <li className="list-none py-4 text-center" onClick={()=>setNav(!nav)}><NavLink exact="true" to="/portfolio" activeclassname="active" className="text-xl hover:text-[#FD5901] mr-3 duration-300">Portfolio</NavLink></li>
                      <li className="list-none py-4 text-center" onClick={()=>setNav(!nav)}><NavLink exact="true" to="/contact" activeclassname="active" className="text-xl hover:text-[#FD5901] duration-300">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
   </div>   
  )
}

export default Navbar