import React from 'react'
import Information from './Information'


function Info() {
  const imageLink3= 'https://palpalnewshub.com/wp-content/uploads/2022/10/Drishyam-2-trailer.jpg'
  const title = 'Drishyam2'
  const year = 'Realeasing on 18th Nov,2022'
  const filter= '2D'
  const language= 'Hindi'
  const castimg1= 'https://i2.cinestaan.com/image-bank/1500-1500/202001-203000/202165.jpg'
  const castimg2= 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/05/30/830347-tabu-053119.jpg'
  const crewimage= 'https://www.filmibeat.com/img/popcorn/profile_photos/abhishek-pathak-20191025124012-26051.jpg'
  const name= 'Ajay Devgan'
  const imageLink4='https://www.delhi-magazine.com/wp-content/uploads/2022/01/Ram-Setu-Akshay-kumar-Movie-poster.png'
  const title2= 'Ram Setu'
  const year2= 'Released on 25th Oct,2022'
  const language2= 'Hindi,Telgu,Tamil'
  const castimage3='https://superstarsbio.com/wp-content/uploads/2018/07/Akshay-Kumar.png'
  const castimage4='https://cdn.siasat.com/wp-content/uploads/2021/12/jacqueline.jpg'
  const crewimage1='https://www.filmiforest.com/img/profile_image/abhishek-sharma.jpg' 
  const name1= 'Akshay kumar'
  
  return (
    <div className='w-full md:px-10 py-10'>
      {/* <Information image={imageLink3} title={title} year={year} filter={filter} language={language} castimage={castimg1}  name={name} crewimage={crewimage}/> */}
      <Information image={imageLink4} title={title2} year={year2} filter={filter} language={language2} castimage={castimage3} name={name1} crewimage={crewimage1}  />
    </div>
  )
}

export default Info