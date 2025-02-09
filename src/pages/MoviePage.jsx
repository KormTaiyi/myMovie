import { useEffect, useState } from "react"
import { SavedMovie } from "../components/AllButton";

const MoviePage = () => {
  const [movie, setMovie] = useState([])
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
          <div className="relative w-[150px] md:w-[170px] lg:w-[190px] overflow-hidden rounded-b-lg shadow-gray-400 shadow-lg mb-8" key={m.id}>
            <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} className="cursor-pointer object-center w-full h-[190px] md:h-[200px] lg:h-[220px] rounded-t-lg bg-blue-400"/>
            <div className=" p-2.5"> 
              <h1 className="font-bold tracking-wider capitalize">{m.title}</h1>
              <p>{m.release_date}</p>
            </div>
              <SavedMovie/>
          </div>
        ))
      }
    </section>
  )
}

export default MoviePage