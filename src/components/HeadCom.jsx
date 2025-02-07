import { Link } from "react-router"
import logo from "../assets/logo.png"
import { FaBars, FaHeart, FaUser } from "react-icons/fa"

const HeadCom = () => {
  return (
    <header className="w-full">
        <div className="w-full bg-(--primary-color)">
            <div  className="w-[90%] m-auto flex items-center justify-between">
                <ul type="none" className="flex items-center gap-2">
                    <div className="flex items-center">
                        <FaBars className="text-lg text-white font-bold"/>
                        <Link to="/"><img src={logo} alt="" className="w-22"/></Link>
                    </div>
                    <ul type="none" className="flex gap-4">
                        <li><Link to="" className="text-md text-white font-bold">Movies</Link></li>
                        <li><Link to="" className="text-md text-white font-bold">TV Shows</Link></li>
                        <li><Link to="" className="text-md text-white font-bold">People</Link></li>
                    </ul>
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