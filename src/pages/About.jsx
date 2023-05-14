import React from 'react'
import { RxPerson } from 'react-icons/rx'
import SubtitleComponent from '../components/subtitle/SubtitleComponent'

function About() {
  return (
    <div>
      <div className='w-[20%]'>        
        <SubtitleComponent text='About' icon={RxPerson} />
      </div>
      <div className='  tracking-wide my-[6vh]'>
        <h2 className='font-normal'>
        Bridging Creativity and Functionality
        <br />
        Meet<span className='text-rose-500'> Dounya</span>
        </h2>
      </div>
    </div>
  )
}

export default About
