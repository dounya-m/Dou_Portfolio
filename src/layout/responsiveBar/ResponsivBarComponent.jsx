import React from 'react';
import {  Link, NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { RxPerson } from 'react-icons/rx';
import { MdDesignServices } from 'react-icons/md';
import { AiOutlineQrcode } from 'react-icons/ai';
import { TbAlignBoxLeftTop } from 'react-icons/tb';
import { AiOutlineMessage } from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai'
import {TiSocialTwitter} from 'react-icons/ti'
import {AiFillGithub} from 'react-icons/ai'
import {BsDribbble} from 'react-icons/bs'

function ResponsivBarComponent() {
  return (
    <div className='absolute right-0 h-[100vh] bg-slate-950 w-[30%] px-[5vw] py-[5vh] z-10 '>
      <div className="flex flex-col gap-4 text-xl mt-[10vh]">
      <h3 className='text-base font-normal text-gray-400 mb-[4vh]'>Menu</h3>
      {[
        { to: '/', label: 'Home', icon: <AiOutlineHome /> },
        { to: 'about', label: 'About', icon: <RxPerson /> },
        { to: 'skills', label: 'Skills', icon: <MdDesignServices /> },
        { to: 'services', label: 'Services', icon: <AiOutlineQrcode /> },
        { to: 'portfolio', label: 'Portfolio', icon: <TbAlignBoxLeftTop /> },
        { to: 'contact', label: 'Contact', icon: <AiOutlineMessage /> },
      ].map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className="relative flex items-center gap-2 no-underline text-slate-300 hover:text-emerald-500 icone_home"
          style={({ isActive }) => ({ color: isActive ? '#10b981' : '' })}
        >
          {icon}
          <span className="text-xs"
        //   style={({ isActive }) => ({ color: isActive ? '#10b981' : '' })}
          >
            {label}</span>
        </NavLink>
      ))}
    </div>
    <div className='mt-[5vh]'>
        <h3 className='text-base font-normal text-gray-400 mb-[3vh]'>Social</h3>
        <section className='flex gap-4 mb-4 text-xl sidebar_icones'>
          <Link to='/'>
              <AiOutlineInstagram className='  text-gray-400  hover:text-emerald-400  hover:border-emerald-400 transition-all duration-[200ms] ease-linear cursor-pointer'  />          
          </Link>
          <Link to='/'>
            <TiSocialTwitter className='  text-gray-400  hover:text-emerald-400  hover:border-emerald-400 transition-all duration-[200ms] ease-linear cursor-pointer' />
          </Link>
          <Link to='/'>
            <AiFillGithub className='  text-gray-400  hover:text-emerald-400  hover:border-emerald-400 transition-all duration-[200ms] ease-linear cursor-pointer' />
          </Link>
          <Link to='/'>
            <BsDribbble className='  text-gray-400  hover:text-emerald-400  hover:border-emerald-400 transition-all duration-[200ms] ease-linear cursor-pointer' />
          </Link>
        </section>
    </div>
    
    </div>
  )
}

export default ResponsivBarComponent
