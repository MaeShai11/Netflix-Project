import React from 'react'
import { Link } from 'react-router-dom'
import HomeVideoCards from './HomeVideoCards'
import SliderBasic from './SliderBasic'

const Main = () => {
  const [videoData, setVideoData] = React.useState([])
  return (
    <div className='w-[1520px]'>

<div className='w-[1520px]'>
        <div className='fixed bg-white mt-[3.9rem] flex-row'>
        {/* <SliderBasic/> */}
        <ul className='w-[1550px] flex items-center gap-2 py-5'>
            <li ><Link to="#" className='border-black rounded-md py-1 px-2 bg-black text-white font-semibold'>All</Link></li>
            <li ><Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Music</Link></li>
            <li ><Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Playlists</Link></li>
            <li ><Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Korean dramas</Link></li>
            <li ><Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Jennie Kim</Link></li>
            <li ><Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>J-Pop</Link></li>
            <li ><Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Gaming</Link></li>
            <li ><Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Live</Link></li>
            <li ><Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Variety shows</Link></li>
            <li ><Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Web pages</Link></li>
            <li ><Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Raspberry Pi</Link></li>
            <li ><Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Concert dances</Link></li>
            <li ><Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Melodramas</Link></li>
            <li ><Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Ambient Music</Link></li>
            <li ><Link to="#" className='border-gray-100 rounded-md py-1 px-2 font-semibold bg-gray-100'>Basketball</Link></li>
        </ul>
      </div>
        </div>
        
      <div className='grid grid-cols-4 gap-1 pr-4 mt-[8rem]'>
        <HomeVideoCards setVideoData={setVideoData} videoData={videoData}/>
      </div>

    </div>
  )
}

export default Main
