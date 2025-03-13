import { useEffect, useState } from "react";
import { SavedMovie } from "../components/AllButton";
import { ImCross } from "react-icons/im";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function FetchMovieAPI() {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=aacdbe83dedab8fc913bd72adf3fdbad&page=1"
        );
        const result = await response.json();
        setMovies(result.results || []);
      } catch (error) {
        console.log(error);
      }
    }
    FetchMovieAPI();
  }, []);

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

  return (
    <section className="w-full flex flex-wrap justify-around gap-3 pt-11 md:pt-12 lg:pt-13 min-h-[360px]">
      {movies.map((movie) => (
        <div key={movie.id}>
          <div
            className="relative w-[150px] md:w-[170px] lg:w-[190px] overflow-hidden rounded-b-lg shadow-gray-400 shadow-lg mb-8"
          >
            <img onClick={() => openModal(movie)}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="object-center cursor-pointer w-full h-[190px] md:h-[200px] lg:h-[220px] rounded-t-lg"
              alt={movie.title}
            />
            <div className="p-2.5">
              <h1 className="font-bold tracking-wider capitalize">{movie.title}</h1>
              <p>{movie.release_date}</p>
            </div>
            <SavedMovie />
          </div>
        </div>
      ))}

      {/* Modal Section */}
      {modal && selectedMovie && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 z-50">
          <div
            className="relative w-[95%] lg:w-[86%] min-h-[80vh] bg-no-repeat bg-cover overflow-hidden rounded shadow-2xl md:flex"
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path})` }}
            onClick={(e) => e.stopPropagation()}
          >
            <p onClick={closeModal} className="absolute border p-1 rounded-md text-white bg-black right-4 z-30 top-2 cursor-pointer">
              <ImCross />
            </p>
            <div className="w-full h-full bg-black absolute opacity-60"></div>
            <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
              className="relative z-10 ml-2 my-3 object-contain w-[350px] h-[300px]"
              alt={selectedMovie.title}/>
            <div className="p-4 w-full h-full text-white relative z-10">
              <h1 className="font-bold tracking-wider capitalize md:text-2xl text-xl">
                {selectedMovie.title}
              </h1>
              <div className="flex items-center gap-1 mb-4">
                <p>{selectedMovie.release_date}</p>
                <p className="capitalize">({selectedMovie.original_language})</p>
              </div>
              <p className="text-lg md:text-xl font-bold">Overview</p>
              <p className="text-sm">{selectedMovie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MoviePage;