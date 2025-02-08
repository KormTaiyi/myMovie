import { useEffect, useState } from "react"
import { Link } from "react-router"

const TrendingPage = () => {
  const url = "";
  const [data,setData] = useState([])
  useEffect(()=>{
    async function fetchingData(){
      try {
        const response = await fetch(url)
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchingData();
  },[])
  return (
    <main className="w-full py-5">
      <div className="m-auto w-full sm:w-[90%] sm:px-0 px-2">
        <div className="flex gap-4 mb-6">
          <h1 className="text-lg md:text-2xl">Trending{}</h1>
            {
              <div className="flex items-center gap-4 border-1 rounded-2xl">
                <p className="cursor-pointer pl-2 md:text-lg text-sm bg-clip-text text-transparent bg-linear-to-br from-teal-300 to-purple-600">Today</p>
                <p className="cursor-pointer pr-2 md:text-lg text-sm bg-clip-text text-transparent bg-linear-to-br from-teal-300 to-blue-600">This Week</p>
              </div>
            }
        </div>
        <div className="w-full">
          <div className="overflow-hidden">
              {
                // data.map(d=>(
                  <div className="flex gap-5 overflow-x-auto">
                    <div className="w-[130px] sm:w-[160px] shrink-0">
                        <Link to=""><img src="" alt="" className="w-full rounded-xl h-[190px] sm:h-[220px] bg-red-300"/></Link>
                        <div className="w-full min-h-[60px] p-3">
                          <Link to="" className="font-bold text-md">title{}</Link>
                          <p className="text-gray-800 font-thin text-md">date{}</p>
                        </div>
                    </div>
                  </div>
                // ))
              }
          </div>
        </div>
      </div>
    </main>
  )
}

export default TrendingPage