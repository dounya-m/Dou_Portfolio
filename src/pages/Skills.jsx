import React, {useEffect} from 'react'
import { MdDesignServices } from 'react-icons/md'
import SubtitleComponent from '../components/subtitle/SubtitleComponent'
import {FaFigma, FaVuejs, FaLaravel, FaNodeJs} from 'react-icons/fa'
import {DiReact, DiAngularSimple, DiPhp, DiWordpress} from 'react-icons/di'
// import {SiExpress}  from 'react-icons/si'


function Skills() {


  function YourComponent() {
    useEffect(() => {
      const animateItems = document.querySelectorAll('.animate-item');
  
      animateItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.3}s`;
      });
    }, []);}

  const front = [
    {icon: <FaFigma />, name: 'FaFigma', percentage: '85%' },
    {icon: <DiReact />, name: 'React', percentage: '75%' },
    {icon: <DiAngularSimple />, name: 'Angular', percentage: '70%' },
    {icon: <FaVuejs />, name: 'Vuejs', percentage: '80%' },
  ];
  
  const back = [
    {icon: <DiPhp />, name: 'PHP', percentage: '70%' },
    {icon: <FaLaravel />, name: 'Lravel', percentage: '65%' },
    // {icon: <FaFigma />, name: 'Express?js', percentage: '85%' },
    {icon: <FaNodeJs />, name: 'NodeJs', percentage: '85%' },
    {icon: <DiWordpress />, name: 'Wordpress', percentage: '85%' },
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
        {front.map((item, index) => (
          <section className='flex flex-col items-center animate-item' key={index}>
            <div className='flex flex-col items-center hover:border-green-400 border-gray-600 border-[2px] px-[2rem] w-[10rem] h-[14rem] justify-evenly rounded-full'>
              <div className='text-[4rem]'>{item.icon}</div>
              <p className='text-3xl font-normal text-emerald-500'>{item.percentage}</p>
            </div>
            <p>{item.name}</p>
          </section>
        ))}
      </div>

      <div className='grid grid-cols-4 gap-4'>
        {back.map((item, index) => (
          <section className='flex flex-col items-center animate-item' key={index}>
            <div className='flex flex-col items-center hover:border-green-400 border-gray-600 border-[2px] px-[2rem] w-[10rem] h-[14rem] justify-evenly rounded-full'>
              <div className='text-[4rem]'>{item.icon}</div>
              <p className='text-3xl font-normal text-emerald-500'>{item.percentage}</p>
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
