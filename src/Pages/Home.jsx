import React from 'react'
import MainBanner from '../Components/MainBanner'
import Categroues from '../Components/Categroues'
import BestSeller from '../Components/BestSeller'
import BottomBanner from '../Components/BottomBanner'
import NewsLetter from '../Components/NewsLetter'




const Home = () => {
  return (
   <>
   <div className='mt-10 '>
    <MainBanner/>
    <Categroues/>
    <BestSeller/>
    <BottomBanner/>
    <NewsLetter/>
   
   
    
   </div>
   
   </>
  )
}

export default Home