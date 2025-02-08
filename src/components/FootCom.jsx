import { Link } from "react-router"
import logo from "../assets/logo.png"
const FootCom = () => {
  return (
    <footer className="bg-(--primary-color) py-8">
      <div className="md:w-full w-[90%] h-auto m-auto md:flex items-start md:justify-between px-6">
        <img src={logo} alt="" className="w-20 md:mb-0 mb-4 object-contain md:m-0 m-auto"/>
        <div className="flex text-white gap-10 items-center justify-between flex-col sm:flex-row sm:text-left text-center">
          <ul type="none" className="">
            <h1 className="text-lg md:text-xl mb-4">The Basics</h1>
            <li><Link to="" className="text-sm md:text-md hover:text-gray-400 hover:underline">About TMDB</Link></li>
            <li><Link to="" className="text-sm md:text-md hover:text-gray-400 hover:underline">Contact Us</Link></li>
            <li><Link to="" className="text-sm md:text-md hover:text-gray-400 hover:underline">Support Forums</Link></li>
          </ul>
          <ul type="none" className="">
            <h1 className="text-lg md:text-xl mb-4">Get Involved</h1>
            <li><Link to="" className="text-sm md:text-md hover:text-gray-400 hover:underline">Contribution Bible</Link></li>
            <li><Link to="" className="text-sm md:text-md hover:text-gray-400 hover:underline">Add New Movie</Link></li>
            <li><Link to="" className="text-sm md:text-md hover:text-gray-400 hover:underline">Add New TV Show</Link></li>
          </ul>
          <ul type="none" className="">
            <h1 className="text-lg md:text-xl mb-4">Community</h1>
            <li><Link to="" className="text-sm md:text-md hover:text-gray-400 hover:underline">Guidelines</Link></li>
            <li><Link to="" className="text-sm md:text-md hover:text-gray-400 hover:underline">Discussions</Link></li>
            <li><Link to="" className="text-sm md:text-md hover:text-gray-400 hover:underline">Leaderboard</Link></li>
          </ul>
          <ul type="none" className="">
            <h1 className="text-lg md:text-xl mb-4">Legal</h1>
            <li><Link to="" className="text-sm md:text-md hover:text-gray-400 hover:underline">Terms of Use</Link></li>
            <li><Link to="" className="text-sm md:text-md hover:text-gray-400 hover:underline">Privacy Policy</Link></li>
            <li><Link to="" className="text-sm md:text-md hover:text-gray-400 hover:underline">DMCA Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default FootCom