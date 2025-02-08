const MoviePage = () => {
  return (
    <section className="w-full flex flex-wrap justify-around gap-3 pt-11 md:pt-12 lg:pt-13  min-h-screen">
      <div className="w-[150px] max-h-[330px] md:w-[170px] lg:w-[190px] overflow-hidden rounded-b-lg shadow-gray-400 shadow-lg mb-8">
          <img src="" alt="" className="w-full h-[200px] sm:h-[210px] md:h-[230px] rounded-t-lg bg-blue-400"/>
          <div className="p-2.5"> 
            <h1 className="font-bold tracking-wider capitalize">title{}</h1>
            <p>date{}</p>
          </div>
      </div>
      {/*  */}
    </section>
  )
}

export default MoviePage