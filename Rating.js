import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import Review from './Review'

function Rating() {

  return (
    <div className='w-full md:px-10 py-10'>
      <h5 className='text-3xl font-sans text-black font-semibold text-center'>RATINGS</h5>
      <div className='w-full'>
        <AiFillStar style={{ marginLeft: '42rem', height: '3rem', fontSize: 'x-large' }}>
         <div>
         <h5 className='text-2xl font-sans text-black font-semibold'>8.1/10</h5>
         </div>
        </AiFillStar>
        <Review />
      </div>
      
    </div>
  )
}

export default Rating