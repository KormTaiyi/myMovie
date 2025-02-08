import { Outlet } from "react-router"
import HeadTwo from "../components/HeadTwo"
import FootCom from "../components/FootCom"
import LeftSide from "../components/movie/LeftSide"

const MainLayoutMovie = () => {
  return (
    <section>
        <HeadTwo/>
        <div className="w-full lg:w-[90%] m-auto grid grid-cols-12">
            <div className="col-span-12 sm:col-span-4 md:col-span-3">
                <LeftSide/>
            </div>
            <div className="col-span-12 sm:col-span-8 px-1 md:px-0 md:col-span-9">
                <Outlet/>
            </div>
        </div>
        <FootCom/>
    </section>
  )
}

export default MainLayoutMovie