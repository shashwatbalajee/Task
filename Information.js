import List from "../Movie/List";
import {AiFillStar} from 'react-icons/ai'
export default function Information({ image, title, year, filter, language, castimage, name,crewimage }) {
  return (
    <>
      <div className="w-full h-96 relative px-2 py-2 rounded-md" style={{ backgroundImage: 'url(' + image + ')' }}>
        <div className="absolute">
          <h5 className="text-2xl font-sans text-white font-semibold">{title}</h5>
          <div className="w-50 h-50" >
            <AiFillStar />
          </div>
          <div className="border-solid border-2 border-white-600 rounded-md py-1">
            <h6 className="text-3xl font-sans text-white font-semibold">{year}</h6>
          </div>
          <div className="flex flex-wrap justify-left border-0">
            <h5 className="text-xl font-sans text-white font-normal">{filter}</h5>
            <div className="px-3">
              <h5 className="text-xl font-sans text-white font-normal">{language}</h5>
            </div>
          </div>
          
        </div>
      </div>

      <div className="w-full md:px-10 py-10">
        <h4 className="text-2xl font-sans text-black font-semibold">Cast</h4>
      </div>
      <div className="flex md:basis-6 p-3">
        <div className="w-20 h-20 rounded-full" style={{ backgroundImage: 'url(' + castimage + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
      </div>
      <div className="p-0">
        <h5 className="text-medium font-sans text-black font-normal justify-">{name}</h5>
      </div>

      <div className="w-full md:px-10 py-10">
        <h4 className="text-2xl font-sans text-black font-semibold">Crew</h4>
      </div>
      <div className="flex md:basis-6 p-3">
        <div className="w-20 h-20 rounded-full" style={{ backgroundImage: 'url(' + crewimage + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
      </div>
    </>
  )
}