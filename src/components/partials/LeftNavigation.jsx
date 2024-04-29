import React from 'react'
import { GrHomeRounded } from 'react-icons/gr'
import { SiYoutubegaming, SiYoutubeshorts } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { MdHelpOutline, MdOutlineFeedback, MdOutlineOutlinedFlag, MdOutlinePlaylistPlay, MdOutlineSubscriptions, MdOutlineWatchLater } from 'react-icons/md'
import { LiaHistorySolid } from 'react-icons/lia'
import { AiOutlineLike } from 'react-icons/ai'
import { PiFilmSlateBold, PiMusicNoteThin } from 'react-icons/pi'
import { LuNewspaper } from 'react-icons/lu'
import { GiHanger } from 'react-icons/gi'
import { IoSettingsOutline } from 'react-icons/io5'
import { FaBurn } from 'react-icons/fa'
import { CiTrophy } from 'react-icons/ci'
import { baseImgUrl } from '../helpers/functions-general'

const LeftNavigation = () => {
  return (
    <div className='mt-14'>
            <aside className='fixed max-h-[95vh] w-[17%] px-2 py-5 overflow-y-scroll'>
                <div className='flex flex-col space-y-5 pb-5 border-b px-4'>
                    <button className='btn-left'><GrHomeRounded className='text-[24px]'/>Home</button>
                    <button className='btn-left'><SiYoutubeshorts className='text-[24px]'/>Shorts</button>
                    <button className='btn-left'><MdOutlineSubscriptions className='text-[24px]'/>Subscriptions</button>
                </div>

                <div className='flex flex-col space-y-5 pb-5 border-b pt-5  px-4'>
                    <h3 className='text-[16px] text-[#0F0F0F] font-semibold'>You</h3>
                    <button className='btn-left'><LiaHistorySolid className='text-[24px]'/>History</button>
                    <button className='btn-left'><MdOutlinePlaylistPlay className='text-[24px]'/>Playlists</button>
                    <button className='btn-left'><MdOutlineWatchLater className='text-[24px]'/>Watch later</button>
                    <button className='btn-left'><AiOutlineLike className='text-[24px]'/>Liked videos</button>
                </div>

                <div className='flex flex-col space-y-5 pb-5 border-b pt-5  px-4'>
                    <h3 className='text-[16px] text-[#0F0F0F] font-semibold'>Subscriptions</h3>
                    <button className='btn-left'><img src="https://via.placeholder.com/30x30" alt="" className='rounded-full'/>Hello</button>
                    <button className='btn-left'><img src="https://via.placeholder.com/30x30" alt="" className='rounded-full'/>Tech Course PH</button>
                </div>

                <div className='flex flex-col space-y-5 pb-5 border-b pt-5 px-4'>
                    <h3 className='text-[16px] text-[#0F0F0F] font-semibold'>Explore</h3>
                    <button className='btn-left'><FaBurn className='text-[24px]'/>Trending</button>
                    <button className='btn-left'><PiMusicNoteThin className='text-[24px]'/>Music</button>
                    <button className='btn-left'><PiFilmSlateBold className='text-[24px]'/>Movies</button>
                    <button className='btn-left'><SiYoutubegaming className='text-[24px]'/>Gaming</button>
                    <button className='btn-left'><LuNewspaper />News</button>
                    <button className='btn-left'><CiTrophy />Sports</button>
                    <button className='btn-left'><GiHanger />Fashion & Beauty</button>
                </div>

                <div className='flex flex-col space-y-5 pb-5 border-b pt-5  px-4'>
                    <h3 className='text-[16px] text-[#0F0F0F] font-semibold'>More from YouTube</h3>
                    <button className='btn-left'><img src={`${baseImgUrl}/premium.svg`} alt="" className='w-[24px]'/>YouTube Premium</button>
                    <button className='btn-left'><img src={`${baseImgUrl}/music.svg`} alt="" className='w-[24px]'/>YouTube Music</button>
                    <button className='btn-left'><img src={`${baseImgUrl}/kids.svg`} alt="" className='w-[24px]'/>YouTube Kids</button>
                </div>

                <div className='flex flex-col space-y-5 pb-5 border-b pt-5  px-4'>
                    <button className='btn-left'><IoSettingsOutline />Settings</button>
                    <button className='btn-left'><MdOutlineOutlinedFlag />Report history</button>
                    <button className='btn-left'><MdHelpOutline />Help</button>
                    <button className='btn-left'><MdOutlineFeedback />Send feedback</button>
                </div>

                <div className='pt-5  px-4'>
                    <ul className='flex flex-wrap gap-2 mb-5 text-stone-700 font-semibold text-[14px]'>
                        <li><Link to="#">About</Link></li>
                        <li><Link to="#">Press</Link></li>
                        <li><Link to="#">Copyright</Link></li>
                        <li><Link to="#">Contact us</Link></li>
                        <li><Link to="#">Creators</Link></li>
                        <li><Link to="#">Advertise</Link></li>
                        <li><Link to="#">Developers</Link></li>
                    </ul>
                </div>

                <div className=' px-4'>
                    <ul className='flex flex-wrap gap-2  mb-5 text-stone-700 font-semibold text-[14px]'>
                        <li><Link to="#">Terms</Link></li>
                        <li><Link to="#">Privacy</Link></li>
                        <li><Link to="#">Policy & Safety</Link></li>
                        <li><Link to="#">How YouTube works</Link></li>
                        <li><Link to="#">Test new features</Link></li>
                    </ul>
                </div>
                <small className='text-stone-500  px-4'>&copy;2024 Google LLC</small>
                   
            </aside>
        </div>
  )
}

export default LeftNavigation
