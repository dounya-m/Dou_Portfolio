import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import SubtitleComponent from '../components/subtitle/SubtitleComponent'

function Home() {
  

  
  return (
    <div className='h-full '>
      <div className=''>
      <SubtitleComponent text='Home' icon={AiOutlineHome} />
      </div>
    <div>
      <h1 className='text-6xl font-light tracking-wide my-[6vh]'>
        Hey, I'm <span className='name'>Dounya</span>
        <br /> I'm a fullstack developer
        <br /> and a UI/UX designer
      </h1>
      <p className='text-gray-400 w-[60%] '>
        I design and code beautifully simple things and i love what i do. Just simple like that!
      </p>
    </div>
    <button className='ml-[100%]'>hello</button>
    </div>
  )
}

export default Home
