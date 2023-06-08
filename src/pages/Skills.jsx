import React from 'react'
import { MdDesignServices } from 'react-icons/md'
import SubtitleComponent from '../components/subtitle/SubtitleComponent'
import {FaFigma} from 'react-icons/fa'

function Skills() {
  return (
    <div>
      <SubtitleComponent text='My skills'  icon={MdDesignServices}/>
      <div className='  tracking-wide my-[6vh]'>
        <h2 className='font-light'>
          My<span className='font-semibold text-rose-500'> Advantages</span>
        </h2>
      </div>
      <div>
      <FaFigma></FaFigma>
      </div>
    </div>
  )
}

export default Skills
