import { Outlet } from "react-router"
import HeadCom from "../components/HeadCom"
import FootCom from "../components/FootCom"
import LeftSide from "../components/movie/LeftSide"

const MainLayoutMovie = () => {
  return (
    <section>
        <HeadCom/>
        <div className="w-full grid grid-cols-12">
            <div className="col-span-4">
                <LeftSide/>
            </div>
            <div className="col-span-8">
                <Outlet/>
            </div>
        </div>
        <FootCom/>
    </section>
  )
}

export default MainLayoutMovie