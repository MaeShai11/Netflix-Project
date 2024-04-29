import React from 'react'
import Header from '../../partials/Header'
import LeftNavigation from '../../partials/LeftNavigation'
import Main from '../../pages/home/Main'
import SliderBasic from './SliderBasic'


const Home = () => {
  
  return (
   <div>
        <Header/>

        <div className='flex gap-5 justify-between'>
        <LeftNavigation/>
        <Main/>
        </div>
        
   </div>
   
  )
}

export default Home
