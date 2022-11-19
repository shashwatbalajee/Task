import React from 'react'
import {useNavigate} from 'react-router-dom'

function Review() {
  const navigate= useNavigate()
  
  const handleLogin = () => {
    navigate('/Login')
  }
  return (
    <div className='w-full md:px-10 py-8'>
      <div className='flex flex-wrap justify-left bg-gray-300 rounded-md'>
        <div className='grid grid-cols-2'>
         <div className='grid col-span-1 px-2'>
          <h5 className='text-xl font-sans text-black font-semibold'>Add your rating & review</h5>
          <p className='text-medium font-sans text-black font-normal'>Your rating matter</p>
         </div>
         <div className='grid col-span-1 '>
          <button className='w-42 border-solid border-2 border-black rounded-md px-4' onClick={handleLogin}>Rate Now</button>
         </div>
        </div>
      </div>
      <div className='w-full md:px-10 py-8'>
        <h5 className='text-large text-black font-sans font-semibold'>Most helpul reviews</h5>
      </div>
     
    </div>
  )
}

export default Review