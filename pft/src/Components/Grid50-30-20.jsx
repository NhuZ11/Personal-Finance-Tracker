import React from 'react'
import Need from '../assets/Confectionery.png'
import Want from '../assets/Jewelry.png'
import Car from '../assets/Automotive.png'


const Grid = () => {
    const comps = [
        { title: 'Needs', imgSrc: Need },
        { title: 'Wants', imgSrc: Want },
        { title: 'Saving', imgSrc: Car },
      ];
  return (
    <div>
        <section className="bg-white py-24 px-4 lg:px-16">
      <div className="container mx-auto px-4 md:px-24 xl:px-12 max-w-[1300px]">
        <h1 className="text-center font-bold text-5xl pb-12 mb-5">Divide Your <span className="text-[#2eb82e]">Finance</span> Into</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
          {comps.map((comp, index) => (
            <div key={index} className="relative group h-48 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <a href="#" className="block">
                <div className="h-28">
                  <div className="absolute -top-20 lg:top-[-10%] left-[5%] z-40 group-hover:top-[-40%] group-hover:opacity-[0.9] duration-300 w-[90%] h-48 bg-[#2eb82e] rounded-xl justify-items-center align-middle">
                    <img
                      src={comp.imgSrc}
                      className="w-36 h-36 mt-6 m-auto"
                      alt={comp.title}
                      title={comp.title}
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div className="p-6 z-10 w-full">
                  <p className="mb-2 inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased">
                    {comp.title}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Grid