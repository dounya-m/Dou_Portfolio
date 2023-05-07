import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineInstagram} from 'react-icons/ai'
import {TiSocialTwitter} from 'react-icons/ti'
import {AiFillGithub} from 'react-icons/ai'
import {BsDribbble} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

function SideBarComponent() {
  return (
    <div className='flex flex-col  border-[0.5px] border-gray-700 px-4 py-4 rounded-xl mx-2 my-2 justify-center'>
        <section className='seidebar_title flex  justify-between gap-4'>
          <Link className='text-2xl font-bold text-white no-underline' to='/'>
            Dounya 
            <span className='text-emerald-400 absolute ml-[0.15rem]'>.M</span>
            <span className='text-rose-500 relative'>.M</span>
          </Link>
          <p className='capitalize text-[0.8rem] text-end'>
          full stack developer <br/>
          & web designer
          </p>
        </section>

        <section className='sidebar_img w-[220px] rounded-md mx-auto my-4'>
          <img className='rounded-xl'  src={require('../../assets/images/portfolioProfile.jpeg')} alt="" />
        </section>

        <section className='flex flex-col gap-2 sidebar_text text-center '>
          <p div className='text-sm text-center'>mellouki.dounya@gmail.com <br/>
            <span>Turning your ideas into digital reality</span>
          </p>
            <p className='text-xs text-gray-400 capitalize'>© dounya 2023. All rights reserved.</p>
        </section>
        <section className='sidebar_icones  flex justify-center text-3xl gap-4 mt-2 mb-4'>
          <AiOutlineInstagram className=' p-[0.30rem] rounded-full text-gray-400 border-gray-400 border-[1px] hover:text-emerald-400  hover:border-emerald-400 transition-all duration-[200ms] ease-linear'  />
          <TiSocialTwitter className=' p-[0.30rem] rounded-full text-gray-400 border-gray-400 border-[1px] hover:text-emerald-400  hover:border-emerald-400 transition-all duration-[200ms] ease-linear' />
          <AiFillGithub className=' p-[0.30rem] rounded-full text-gray-400 border-gray-400 border-[1px] hover:text-emerald-400  hover:border-emerald-400 transition-all duration-[200ms] ease-linear' />
          <BsDribbble className=' p-[0.30rem] rounded-full text-gray-400 border-gray-400 border-[1px] hover:text-emerald-400  hover:border-emerald-400 transition-all duration-[200ms] ease-linear' />
        </section>
        <section className='sidebar_contact '>
          <button className='uppercase font-light flex justify-center items-center mx-auto gap-1 bg-rose-500 rounded-lg text-center border-2  text-sm hover:font-normal hover:bg-transparent hover:border-2 hover:border-emerald-500 hover:text-emerald-500 w-full h-[4.5vh] transition-all duration-[200ms] ease-linear border-rose-500'>
             <AiOutlineMail /> hire me !
          </button>
        </section>
    </div>
  )
}

export default SideBarComponent
