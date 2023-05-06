import React from 'react'
import NavBarComponent from './navbar/NavBarComponent'
import SideBarComponent from './sidebar/SideBarComponent'

function Layout({ children}) {
  return (
    <>
    <SideBarComponent />

    <main>
        {children}
    </main>
    
        <NavBarComponent />
    </>
  )
}

export default Layout
