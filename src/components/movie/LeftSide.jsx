import { useState } from "react"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"

const LeftSide = () => {
  const [FirstBox,setFirstBox] = useState(false)
  const [SecondBox,setSecondBox] = useState(false)
  return (
    <section className="w-full px-2">
        <div className="sticky top-[300px]">
          <h1 className="text-xl md:text-2xl lg:text-3xl mb-4">Popular Movies{}</h1>
          <div className="flex flex-col gap-5">
            <div onClick={()=>{setFirstBox(!FirstBox),setSecondBox(false)}} className="w-[60%] sm:w-[40%] md:w-full border rounded-lg flex flex-col px-4 shadow-lg items-center justify-between cursor-pointer">
              <div className="w-full flex items-center justify-between">
                <h1 className="py-2 text-xl font-bold">Sort </h1>
                {
                  FirstBox?<IoIosArrowDown/>:<IoIosArrowForward/>
                }
              </div>
              {
                FirstBox&&(
                  <div className="w-full mb-5 border-t-[1px] pt-5">
                    <p className="text-green-500">coshh</p>
                  </div>
                )
              }
            </div>
            <div onClick={()=>{setSecondBox(!SecondBox),setFirstBox(false)}} className="w-[60%] sm:w-[40%] md:w-full border rounded-lg flex flex-col px-4 shadow-lg items-center justify-between cursor-pointer">
              <div className="w-full flex items-center justify-between">
                <h1 className="py-2 text-xl font-bold">Filters</h1>
                {
                  SecondBox?<IoIosArrowDown/>:<IoIosArrowForward/>
                }
              </div>
              {
                SecondBox&&(
                  <div className="w-full mb-5 border-t-[1px] pt-5">
                    <p className="text-green-500">coshh</p>
                  </div>
                )
              }
            </div>
            <button className="w-[50%] sm:w-[60%] md:w-[70%] m-auto border text-white cursor-pointer text-lg py-2 rounded-3xl bg-(--secondary-color)">Search</button>
          </div>
        </div>
    </section>
  )
}

export default LeftSide