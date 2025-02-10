import { useEffect, useState } from "react"
import { SavedMovie } from "../components/AllButton";
import { ImCross } from "react-icons/im";

const MoviePage = () => {
  const [movie, setMovie] = useState([])
  const [modal,setModal] = useState(false)
  useEffect(()=>{
    async function FetchMovieAPI(){
      try {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=aacdbe83dedab8fc913bd72adf3fdbad&page=1");
        const result = await response.json()
        setMovie(result.results || [])
      } catch (error) {
        console.log(error)
      }
    }
    FetchMovieAPI();
  },[])
  return (
    <section className="w-full flex flex-wrap justify-around gap-3 pt-11 md:pt-12 lg:pt-13  min-h-[360px]">
      {
        movie.map((m)=>(
          <div key={m.id}>
            <div onClick={()=>{setModal(!modal)}} className="relative w-[150px] md:w-[170px] lg:w-[190px] overflow-hidden rounded-b-lg shadow-gray-400 shadow-lg mb-8">
              <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} className="cursor-pointer object-center w-full h-[190px] md:h-[200px] lg:h-[220px] rounded-t-lg"/>
              <div className=" p-2.5"> 
                <h1 className="font-bold tracking-wider capitalize">{m.title}</h1>
                <p>{m.release_date}</p>
              </div>
              <SavedMovie/>
            </div>
            {modal && (
              <div className="relative min-h-[80vh] bg-center bg-no-repeat bg-cover overflow-hidden rounded shadow md:flex" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${m.backdrop_path})`}}>
                  <p onClick={()=>{setModal(!modal)}} className="absolute border p-1 rounded-md text-white right-1 z-30 top-1 cursor-pointer"><ImCross/></p>
                  <div className="w-full h-full bg-red-950 absolute opacity-80"></div>
                  <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} className="relative z-10 ml-2 my-3 object-contain w-[400px] h-[350px]"/>
                  <div className="p-4 w-full h-full text-white relative z-10">
                    <h1 className="font-bold tracking-wider capitalize md:text-2xl text-xl">{m.title}</h1>
                    <div className="flex items-center gap-1 mb-4">
                      <p>{m.release_date}</p>
                      <p className="capitalize">({m.original_language})</p>
                    </div>
                    <p className="text-lg md:text-xl font-bold">Overview</p>
                    <p className="text-sm">{m.overview}</p>
                  </div>
              </div>
            )}
          </div>
        ))
      }
    </section>
  )
}

export default MoviePage