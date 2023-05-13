import React from 'react'
import NavBarComponent from './navbar/NavBarComponent'
import SideBarComponent from './sidebar/SideBarComponent'
import BackgroundComponent from '../components/backgroundComponent'

function Layout({ children}) {
  return (
    <div className='lg:flex md:flex sm:flex sm:flex-col lg:flex-row md:flex-col justify-between bg-gray-900 text-white relative py-[5vh] lg:px-[3vw] md:px-[5vw] sm:px-[5vw] items-center h-[100vh]'>
    <div className=" mx-[40%] mt-[10%] fixed opacity-10">
      <BackgroundComponent />
      </div>
    <SideBarComponent />
    <main className='z-10'>
        {children}
    </main>
        <NavBarComponent />
    </div>
  )
}

export default Layout
