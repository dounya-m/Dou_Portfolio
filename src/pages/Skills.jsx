import React from 'react'
import { MdDesignServices } from 'react-icons/md'
import SubtitleComponent from '../components/subtitle/SubtitleComponent'
import {FaFigma} from 'react-icons/fa'

function Skills() {

  const itemes = [
    {icon: <FaFigma />, name: 'FaFigma', persentage: '85%' }
  ]
  
  return (
    <div>
      <SubtitleComponent text='My skills'  icon={MdDesignServices}/>
      <div className='  tracking-wide my-[6vh]'>
        <h2 className='font-light'>
          My<span className='font-semibold text-rose-500'> Advantages</span>
        </h2>
      </div>
      {itemes.map((item) => (
        <section>
        <div className='flex flex-col justify-center border-[2px] px-[2rem] py-6 rounded-full'>
          <div className='text-[4rem]'>{item.icon}</div>
          <p>{item.name}</p>
          </div>
          <p>Figma</p>
        </section>
      ))}
    </div>
  )
}

export default Skills
