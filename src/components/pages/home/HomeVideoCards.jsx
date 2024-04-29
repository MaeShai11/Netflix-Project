import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { baseImgUrl } from '../../helpers/functions-general'
import { data } from 'autoprefixer'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { videos } from './data'

const HomeVideoCards = ({videoData, setVideoData}) => {
    setVideoData(videos)

  return (
    <>
        {videoData.map((video,key)=>(
               <div className='py-5' key={key}>
               <img src={`${baseImgUrl}/${video.image}`} alt="" className='rounded-md w-[360px] h-[220px]'/>
         
               <div className='flex gap-2 mt-3 w-[360px]'>
                 <div>
                     <img src="https://via.placeholder.com/50x50" alt="" className='rounded-full'/>
                 </div>
                 <div>
                      <div className='flex justify-between items-center'>
                          <h3 className='font-semibold text-[16px]'>{video.title}</h3>
                          <button><BsThreeDotsVertical /></button>
                      </div>
                     <p className='text-gray-500 text-[15px]'><span>{video.owner}</span><br /><span className='flex items-center'>{video.viewer} <GoDotFill className='text-[5px] text-gray-600 mx-1'/> {video.when}</span></p>
                 </div>
               </div>
             </div>
        ))}
      
   
    </>
  )
}

export default HomeVideoCards
