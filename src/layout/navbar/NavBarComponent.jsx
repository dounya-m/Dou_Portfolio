import React from 'react'
import { NavLink } from 'react-router-dom'

import {AiOutlineHome} from 'react-icons/ai'
import {RxPerson} from 'react-icons/rx'
import {MdDesignServices} from 'react-icons/md'
import {AiOutlineQrcode} from 'react-icons/ai'
import {TbAlignBoxLeftTop} from 'react-icons/tb'
import {AiOutlineMessage} from 'react-icons/ai'



function NavBarComponent() {
  return (
    <div className=' text-xl flex flex-col gap-4 border-[1px] border-slate-600 px-2 py-4 rounded-full '>
        <NavLink className='relative flex items-center no-underline text-slate-600 hover:text-emerald-500 icone_home' data-hover='hello' to="home">
          <span className='absolute py-[0.20rem] text-sm font-semibold text-white rounded-md bg-gray-800 w-[5rem] text-center  right-10  title_home'>Home
          <span className='absolute w-2 h-4 mt-1 ml-[0.9rem] rotate-45 bg-gray-800 '></span>
          </span>
          <AiOutlineHome />
        </NavLink>
        
        <NavLink className='relative flex items-center no-underline text-slate-600 hover:text-emerald-500 icone_home' data-hover='hello' to="about">
          <span className='absolute py-[0.20rem] text-sm font-semibold text-white rounded-md bg-gray-800 w-[5rem] text-center  right-10  title_home'>About
          <span className='absolute w-2 h-4 mt-1 ml-[0.8rem] rotate-45 bg-gray-800 '></span>
          </span>
          <RxPerson />
        </NavLink>
        
        <NavLink className='relative flex items-center no-underline text-slate-600 hover:text-emerald-500 icone_home' data-hover='hello' to="skill">
        <span className='absolute py-[0.20rem] text-sm font-semibold text-white rounded-md bg-gray-800 w-[5rem] text-center  right-10  title_home'>Skills
          <span className='absolute w-2 h-4 mt-1 ml-[1.10rem] rotate-45 bg-gray-800 '></span>
          </span>
          <MdDesignServices />
        </NavLink>
        
        <NavLink className='relative flex items-center no-underline text-slate-600 hover:text-emerald-500 icone_home' data-hover='hello' to="services">
        <span className='absolute py-[0.20rem] text-sm font-semibold text-white rounded-md bg-gray-800 w-[5rem] text-center  right-10  title_home'>Services
          <span className='absolute w-2 h-4 mt-1 ml-[0.4rem] rotate-45 bg-gray-800 '></span>
          </span>
          <AiOutlineQrcode/>
        </NavLink>
        
        <NavLink className='relative flex items-center no-underline text-slate-600 hover:text-emerald-500 icone_home' data-hover='hello' to="portfolio">
        <span className='absolute py-[0.20rem] text-sm font-semibold text-white rounded-md bg-gray-800 w-[5rem] text-center  right-10  title_home'>Portfolio
          <span className='absolute w-2 h-4 mt-1 ml-[0.3rem] rotate-45 bg-gray-800 '></span>
          </span>
          <TbAlignBoxLeftTop />
        </NavLink>
        
        <NavLink className='relative flex items-center no-underline text-slate-600 hover:text-emerald-500 icone_home' data-hover='hello' to="contact">
        <span className='absolute py-[0.20rem] text-sm font-semibold text-white rounded-md bg-gray-800 w-[5rem] text-center  right-10  title_home'>Contact
          <span className='absolute w-2 h-4 mt-1 ml-[0.5rem] rotate-45 bg-gray-800 '></span>
          </span>
          <AiOutlineMessage />
        </NavLink>

    </div>
  )
}

export default NavBarComponent
