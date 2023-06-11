import React from 'react'
import { MdDesignServices } from 'react-icons/md'
import SubtitleComponent from '../components/subtitle/SubtitleComponent'
import {FaFigma, FaVuejs, FaLaravel, FaNodeJs} from 'react-icons/fa'
import {DiReact, DiAngularSimple, DiPhp} from 'react-icons/di'
// import {SiExpress}  from 'react-icons/si'


function Skills() {

  const front = [
    {icon: <FaFigma />, name: 'FaFigma', persentage: '85%' },
    {icon: <DiReact />, name: 'React', persentage: '75%' },
    {icon: <DiAngularSimple />, name: 'Angular', persentage: '70%' },
    {icon: <FaVuejs />, name: 'Vuejs', persentage: '80%' },
  ];
  
  const back = [
    {icon: <DiPhp />, name: 'PHP', persentage: '70%' },
    {icon: <FaLaravel />, name: 'Lravel', persentage: '65%' },
    // {icon: <FaFigma />, name: 'Express?js', persentage: '85%' },
    {icon: <FaNodeJs />, name: 'NodeJs', persentage: '85%' },
  ]
  
  return (
    <div>
      <SubtitleComponent text='My skills'  icon={MdDesignServices}/>
      <div className='  tracking-wide my-[6vh]'>
        <h2 className='font-light'>
          My<span className='font-semibold text-rose-500'> Advantages</span>
        </h2>
      </div>
      
      <section className='space-y-5'>

      <div className='grid grid-cols-4 gap-4'>
      {front.map((item) => (
      <section className='flex flex-col items-center'>
        <div className='flex flex-col items-center hover:border-green-400 border-gray-600  border-[2px] px-[2rem]  w-[10rem] h-[14rem] justify-evenly rounded-full'>
          <div className='text-[4rem]'>{item.icon}</div>
          <p className='text-3xl text-emerald-500'>{item.persentage}</p>
          </div>
          <p>{item.name}</p>
      </section>
      ))}
      </div>

      <div className='grid grid-cols-4 gap-4'>
      {back.map((item) => (
      <section className='flex flex-col items-center'>
        <div className='flex flex-col items-center hover:border-green-400 border-gray-600  border-[2px] px-[2rem]  w-[10rem] h-[14rem] justify-evenly rounded-full'>
          <div className='text-[4rem]'>{item.icon}</div>
          <p className='text-3xl text-emerald-500'>{item.persentage}</p>
          </div>
          <p>{item.name}</p>
      </section>
      ))}
      </div>

      </section>

    </div>
  )
}

export default Skills
