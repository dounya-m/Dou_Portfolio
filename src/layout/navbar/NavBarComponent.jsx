import React from 'react';
import {  NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { RxPerson } from 'react-icons/rx';
import { MdDesignServices } from 'react-icons/md';
import { AiOutlineQrcode } from 'react-icons/ai';
import { TbAlignBoxLeftTop } from 'react-icons/tb';
import { AiOutlineMessage } from 'react-icons/ai';

function NavBarComponent() {
  return (
    <div className="text-xl flex flex-col gap-4 border-[1px] border-slate-600 px-2 py-4 rounded-full">
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
          className="relative flex items-center no-underline text-slate-600 hover:text-emerald-500 icone_home"
          style={({ isActive }) => ({ color: isActive ? '#10b981' : '' })}
        >
          <span className="absolute py-[0.20rem] text-sm font-semibold text-white rounded-md bg-gray-800 w-[5rem] text-center right-10 title_home">
            {label}
            <span className="absolute w-2 h-4 mt-1 ml-[0.5rem] rotate-45 bg-gray-800 "></span>
          </span>
          {icon}
        </NavLink>
      ))}
    </div>
  );
}

export default NavBarComponent;
