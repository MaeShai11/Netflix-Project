import React from 'react'
import { baseImgUrl } from '../helpers/functions-general'
import { CiSearch } from 'react-icons/ci'
import { AiFillAudio } from 'react-icons/ai'
import { RiVideoAddLine } from 'react-icons/ri'
import { FaRegBell } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='px-10 fixed w-[100%] bg-white z-[1000] p-[10px]'>
    <div className='flex justify-between items-center'>
        <img src={`${baseImgUrl}/logo.png`} alt="" className='w-[120px]'/>
      <div>
        <form action="" className='flex items-center'>
            <input type="text" placeholder='Search' className='rounded-tl-full rounded-bl-full py-2 px-4 text-white font-medium w-[600px] bg-transparent border border-gray-300 placeholder:text-stone-500 text-m'/>
            <button className='border border-l-0 border-gray-300 bg-gray-100 py-2 px-5 rounded-tr-full rounded-br-full'><CiSearch className='text-black text-[24px]'/></button>
            <button className='bg-gray-200 ml-5 rounded-full p-2'><AiFillAudio className='text-black text-[24px] rounded-full'/></button>
        </form>
      </div>

      <div className='flex items-center gap-7'>
            <button><RiVideoAddLine className='text-black text-[24px]'/></button>
            <button><FaRegBell className='text-black text-[24px]'/></button>
            <button><img src="https://via.placeholder.com/30x30" alt=""  className='rounded-full'/></button>
      </div>
    </div>
    </div>
  )
}

export default Header
