import React from 'react'
import List from './List'

function Movie() {
  const title='Drishyam2'
  const desc='Drama/Mystery/Thriller'
  const imageLink='https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/drishyam-2-et00331997-1667547668.jpg'
  const title1= 'Ram Setu'
  const desc1= 'Action/Adventure/Thriller'
  const imageLink2='https://upload.wikimedia.org/wikipedia/en/b/b6/Ram-Setu.jpeg'
  

  // const imageLink5='https://images.hindustantimes.com/img/2022/09/28/1600x900/Drishyam2AjayDevgnmovie_1664360891948_1664360892187_1664360892187.jpeg'
  return (
    <div className='w-full md:px-10 py-10'>
      <div className='w-full md:px-10 py-8'>
        <h5 className='text-2xl font-sans text-black font-semibold text-left'>
          Recommended Movies
        </h5>
      </div>
      <div className='flex flex-wrap justify-left gap-x-4'>
       <List title={title} desc={desc} image={imageLink} />
       <List image={imageLink2} title={title1} desc={desc1} />
       
      </div>
      {/* <div className='flex flex-wrap justify-center'>
        <Info image={imageLink5} />
      </div> */}
    </div>
  )
}

export default Movie