import React from 'react'
import SubtitleComponent from '../components/subtitle/SubtitleComponent'
import {AiOutlineQrcode} from 'react-icons/ai'
import {MdOutlineDesignServices} from 'react-icons/md'
import {BiVector} from 'react-icons/bi'
import {BsCodeSlash} from 'react-icons/bs'



function Services() {

  const specializ = [
    {
      title: "Website Design",
      content: "creating visually appealing and intuitive layouts, selecting color schemes, typography, and graphics to ensure an aesthetically pleasing and engaging website design. use Figma & Adobe XD",
      project: "10",
      icon: <MdOutlineDesignServices />,
    },
    {
      title: "Front-end Development",
      content: " creates the user interface and interactive elements of a website or application to enhance user experience.",
      project: "10",
      icon: <BiVector />,
    },
    {
      title: "Back-end Development",
      content: "using Node.js and PHP handle server-side operations, execute dynamic logic, interact with databases, and process data effectively for web applications",
      project: "10",
      icon: <BsCodeSlash />,
    },
  ]

  return (
    <>
      <SubtitleComponent text='Services' icon={AiOutlineQrcode} />
      <div className='  tracking-wide my-[6vh]'>
        <h2 className='font-light'>
          My<span className='font-semibold text-rose-500'> Specializations</span>
        </h2>
      </div>

      <div className='flex flex-col gap-4 h-[50vh]' >

      {specializ.map((item, index)=>(
          <div className='flex flex-col border-[1px] px-4 py-5 gap-2 hover:border-emerald-500 border-gray-600 rounded-xl' key={index}>
            <div className='flex justify-between items-center gap-2'>
            <section>
            <h3>{item.title}</h3>
            <p className='font-light text-lg'>{item.content}</p>
            </section>
            <section className='text-emerald-500 font-light text-[32px]'>
              {item.icon}
            </section>
            </div>
            <p className='text-slate-200 hover:underline'>{item.project} Projects</p>
          </div>

      ))

      }

      </div>
    </>
  )
}

export default Services
