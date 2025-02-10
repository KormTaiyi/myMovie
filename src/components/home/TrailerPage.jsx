import { Link } from "react-router"
import {useState, useEffect} from "react"

const TrailerPage = () => {
  const [trailer,setTrailer] = useState([])

  useEffect(()=>{
    async function FetchTrailerAPI(){
      try {
          const response = await fetch("https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=...")
          const result = await response.json()
          setTrailer(result.results || [])
      } catch (error) {
        console.log(error)
      }
    }
    FetchTrailerAPI();
  },[])
  return (
    <section className="w-full bg-green-200 pt-5">
      <div className="w-full sm:w-[90%]   max-w-7xl m-auto sm:px-0 px-2">
        <div className="flex gap-2 sm:gap-4 md:gap-6 mb-6">
          <h1 className="text-lg md:text-2xl">Latest Trailers</h1>
          {
            <div className="flex items-center sm:gap-4 gap-3 border-1 rounded-2xl">
              <p className="cursor-pointer pl-2 md:text-xl text-lg bg-clip-text text-transparent bg-linear-to-br from-teal-300 to-purple-600">Popular</p>
              <p className="cursor-pointer pr-2 md:text-xl text-lg bg-clip-text text-transparent bg-linear-to-br from-teal-300 to-blue-600">In Theaters</p>
            </div>
          }
        </div>
        <div className="w-full">
          <div className="overflow-hidden">
            <div className="flex gap-10 overflow-x-auto">
              {
                trailer.map(trail=>(
                  <div className="w-[250px] sm:w-[300px] overflow-hidden rounded-xl shrink-0 mb-5" key={trail.id}>
                    <Link to="" className=" overflow-hidden rounded-xl">
                      <div className="overflow-hidden block rounded-xl hover:scale-105 duration-200">
                        <iframe src="https://www.youtube.com/embed/50NudnPC_Qw?mute=0" className="w-full rounded-xl h-[170px]" allow="encrypted-media" allowFullScreen title="Trailer Video"/>
                      </div>
                    </Link>
                    <div className="w-full min-h-[60px] p-2 text-center">
                      <Link to="" className="text-white font-bold text-xl md:text-2xl">{trail.title}</Link>
                      <p className="text-white text-2xs md:text-xl">{trail.vote_average}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrailerPage