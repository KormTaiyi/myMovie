import { Link } from "react-router"
import logo from "../assets/logo.png"
import { useEffect, useState } from 'react'
import { FaBars, FaHeart, FaUser } from "react-icons/fa"

const HeadCom = () => {
    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Features", path: "javascript:void(0)" },
        { title: "Integrations", path: "javascript:void(0)" },
        { title: "Customers", path: "javascript:void(0)" },
        { title: "Pricing", path: "javascript:void(0)" }
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])
  return (
    <header className={" pb-5 md:text-sm ${state ? "shadow-lg rounded-xl border  md:shadow-none md:border-none md:mx-2 md:mt-0" : ""}"}>
        <div className="w-full bg-(--primary-color)">
            <div  className="w-full px-1 sm:w-[90%] m-auto flex items-center justify-between">
                <ul type="none" className="flex items-center gap-2">
                    <div className="flex items-center">
                        <div className="md:hidden">
                            <button className="menu-btn text-gray-500 hover:text-gray-800"
                                onClick={() => setState(!state)}><FaBars className="text-lg text-white font-bold"/>
                            </button>
                        </div>
                        <Link to="/"><img src={logo} alt="" className="w-22"/></Link>
                    </div>
                    <div className={flex items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} }>
                        <ul type="none" className="justify-center items-center space-y-6 md:flex">
                            <li><Link to="" className="text-md text-white font-bold">Movies</Link></li>
                            <li><Link to="" className="text-md text-white font-bold">TV Shows</Link></li>
                            <li><Link to="" className="text-md text-white font-bold">People</Link></li>
                        </ul>
                    </div>
                </ul>
                <ul type="none" className="flex gap-4">
                    <FaUser className="text-white text-xl cursor-pointer"/>
                    <FaHeart className="text-white text-xl"/>
                </ul>
            </div>
        </div>
        <form className="w-full">
            <input type="search" placeholder="Search for a movie, tv show, person.." className="px-10 w-full py-2"/>
        </form>
    </header>
  )
}

export default HeadCom