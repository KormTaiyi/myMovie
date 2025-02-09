import { useEffect, useState } from "react"
import { Link } from "react-router"
import { Quickview } from "../AllButton";

const TrendingPage = ({type,state1,state2}) => {
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=aacdbe83dedab8fc913bd72adf3fdbad`;

  const [data,setData] = useState([])
  useEffect(()=>{
    async function fetchingData(){
      try {
        const response = await fetch(url)
        const result = await response.json()
        setData(result.results || [])
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchingData();
  },[])
  const handleQuickView=()=>{
    Quickview()
  }
  return (
    <main className="max-w-7xl m-auto w-full pt-5">
      <div className="m-auto w-full sm:w-[90%] sm:px-0 px-2">
        <div className="flex gap-4 mb-6">
          <h1 className="text-lg md:text-2xl">{type}</h1>
            {
              <div className="flex items-center gap-4 border-1 rounded-2xl">
                <p className="cursor-pointer pl-2 md:text-xl text-lg bg-clip-text text-transparent bg-linear-to-br from-teal-300 to-purple-600">{state1}</p>
                <p className="cursor-pointer pr-2 md:text-xl text-lg bg-clip-text text-transparent bg-linear-to-br from-teal-300 to-blue-600">{state2}</p>
              </div>
            }
        </div>
        <div className="w-full">
          <div className="overflow-hidden">
            <div className="flex gap-5 overflow-x-auto pb-5">
              {
                data.map(d=>(
                  <div onClick={handleQuickView} className="cursor-pointer w-[140px] sm:w-[170px] shrink-0" key={d.id}>
                      <Link to=""><img src={`https://image.tmdb.org/t/p/w500${d.poster_path}`} alt="" className="w-full rounded-xl h-[190px] sm:h-[220px] bg-red-300"/></Link>
                      <div className="w-full p-2.5 bg-white rounded-lg shadow-lg">
                        <Link to="" className="font-bold">{d.title}</Link>
                        <p className="text-gray-800 font-light text-md">{d.release_date}</p>
                      </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default TrendingPage