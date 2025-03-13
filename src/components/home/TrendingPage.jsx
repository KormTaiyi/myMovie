import { useEffect, useState } from "react"
import { Link } from "react-router"
import { ImCross } from "react-icons/im";

const TrendingPage = ({type,state1,state2}) => {
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=aacdbe83dedab8fc913bd72adf3fdbad`;

  const [data,setData] = useState([])
  // const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModal(false);
    setSelectedMovie(null);
    document.body.style.overflow = "auto"; 
  };

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
                  <div onClick={()=>{!modal}} className="cursor-pointer w-[140px] sm:w-[170px] shrink-0" key={d.id}>
                    <Link to="">
                    <img onClick={() => openModal(d)} 
                      src={`https://image.tmdb.org/t/p/w500${d.poster_path}`} 
                      alt="" className="w-full rounded-xl h-[190px] sm:h-[220px] bg-red-300"/>
                    </Link>
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
      {modal && selectedMovie && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 z-50">
          <div
            className="max-w-6xl relative w-[85%] lg:w-[78%] min-h-[60vh] bg-no-repeat bg-cover overflow-hidden rounded-xl shadow-2xl"
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path})` }}
            onClick={(e) => e.stopPropagation()}
          >
            <p onClick={closeModal} className="absolute border p-1 rounded-md text-white right-6 z-30 top-2 cursor-pointer">
              <ImCross />
            </p>
            <div className="w-full h-full bg-black absolute opacity-60"></div>
            <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
              className="relative z-10 my-4 object-contain w-[350px] h-[300px]"
              alt={selectedMovie.title}/>
            <div className="p-4 w-full h-full text-white relative z-10">
              <h1 className="font-bold tracking-wider capitalize md:text-2xl text-xl">
                {selectedMovie.title}
              </h1>
              <div className="flex items-center gap-1 mb-4">
                <p>{selectedMovie.release_date}</p>
                <p className="capitalize">({selectedMovie.original_language})</p>
              </div>
              <p className="text-lg md:text-xl mb-3 font-bold">Overview</p>
              <p>{selectedMovie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default TrendingPage