import React from 'react'
import SubtitleComponent from '../components/subtitle/SubtitleComponent'
import {AiOutlineQrcode} from 'react-icons/ai'


function Services() {
  return (
    <>
      <SubtitleComponent text='Services' icon={AiOutlineQrcode} />
      <div className='  tracking-wide my-[6vh]'>
        <h2 className='font-light'>
          My<span className='font-semibold text-rose-500'> Specializations</span>
        </h2>
      </div>
    </>
  )
}

export default Services
