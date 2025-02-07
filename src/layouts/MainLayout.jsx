import { Outlet } from "react-router"
import HeadCom from "../components/HeadCom"
import FootCom from "../components/FootCom"

const MainLayout = () => {
  return (
    <main>
        <HeadCom/>
        <Outlet/>
        <FootCom/>
    </main>
  )
}

export default MainLayout