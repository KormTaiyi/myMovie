import { Link } from "react-router"
import { FaBars, FaHeart, FaUser } from "react-icons/fa6";
import logo from "../assets/logo.png"
import { useState } from "react";

const HeadCom = () => {
    const [isOpen,setIsOpen]= useState(false)
    return (
        <header className="w-full">
                <div className="bg-(--primary-color) relative">
                    <div className="max-w-7xl sm:w-[90%] m-auto flex items-center justify-between py-2 sm:px-0">
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-2 px-2">
                                <FaBars className="text-xl text-white block md:hidden" onClick={() => setIsOpen(!isOpen)}/>
                                <Link to="/"><img src={logo} alt="" className=" w-14 sm:w-20 md:w-24"/></Link>
                            </div>
                            <ul type="none" className={`${isOpen?"":"md:flex hidden"}  w-full bg-(--primary-color) md:static absolute z-20 sm:top-23 top-17 gap-5 md:bg-inherit rounded-b-lg px-3 py-3 md:px-0 md:py-0`}>
                                <li className=" md:border-0 border-b-[1px] md:w-auto w-full py-1"><Link to="/movie" className="text-lg text-white" onClick={() => setIsOpen(!isOpen)}>Movie</Link></li>
                                <li className=" md:border-0 border-b-[1px] md:w-auto w-full py-1"><Link to="/tv" className="text-lg text-white" onClick={() => setIsOpen(!isOpen)}>TV Show</Link></li>
                                <li className=" md:border-0 border-b-[1px] md:w-auto w-full py-1"><Link to="" className="text-lg text-white" onClick={() => setIsOpen(!isOpen)}>Contact</Link></li>
                            </ul>
                        </div>
                        <ul type="none" className="flex gap-4 px-2">
                            <FaUser className="text-xl text-white"/>
                            <FaHeart className="text-xl text-white"/>
                        </ul>
                    </div>
                </div>
                <div className="w-[90%] max-w-7xl m-auto">
                    <input type="search" placeholder="Search movie, TV Show ..." className="w-full py-2.5 focus:border-none focus:outline-none focus:ring-0"/>
                </div>
        </header>
    );
  };
  
  export default HeadCom;