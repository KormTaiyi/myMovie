import { FaArrowRight } from "react-icons/fa6"

const LeftSide = () => {
  return (
    <section className="w-full px-2">
        <div className="sticky top-[300px]">
          <h1 className="text-xl md:text-2xl lg:text-3xl mb-4">Popular Movies{}</h1>
          <div className="flex flex-col gap-5">
            <div className=" w-[70%] sm:w-[95%] md:w-full border rounded-lg flex px-4 shadow-lg items-center justify-between cursor-pointer">
                <h1 className="py-2 text-xl font-bold">Sort </h1>
                <FaArrowRight/>
            </div>
            <div className="w-[70%] sm:w-[95%] md:w-full border rounded-lg shadow-lg cursor-pointer">
                <div className=" flex px-4 items-center justify-between">
                  <h1 className="py-2 text-xl font-bold">Filters</h1>
                  <FaArrowRight/>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default LeftSide