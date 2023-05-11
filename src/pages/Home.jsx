import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'

function Home() {
  return (
    <>
    <div className='flex items-center gap-2 text-xs uppercase border-[1px] py-1 px-2 rounded-full text-gray-200 border-gray-400 '>
      <AiOutlineHome />
      introduce
    </div>
    <div>
      <h1>
        Hey, I'm <span className='text-blue-500'>Dounya</span>
        
      </h1>
    </div>
    </>
  )
}

export default Home
