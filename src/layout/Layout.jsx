import React, { useState, useRef, useEffect } from 'react';
import NavBarComponent from './navbar/NavBarComponent';
import SideBarComponent from './sidebar/SideBarComponent';
import BackgroundComponent from '../components/backgroundComponent';
import ResponsivBarComponent from './responsiveBar/ResponsivBarComponent';

function Layout({ children }) {
  const [isResponsiveMode, setResponsiveMode] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setResponsiveMode(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className='lg:flex md:flex sm:flex sm:flex-col lg:flex-row md:flex-col justify-between bg-gray-900 text-white relative py-[5vh] lg:px-[3vw] md:px-[5vw] sm:px-[5vw] items-center h-[100vh]'>
      <div className='mx-[40%] mt-[10%] fixed opacity-10'>
        <BackgroundComponent />
      </div>
      <SideBarComponent />
      <main className='z-10'>
        {children}
      </main>
      {isResponsiveMode ? <ResponsivBarComponent /> : null}
      {isResponsiveMode ? null : <NavBarComponent />}
      <div ref={toggleRef}>
        <button
          className='absolute px-4 py-2 text-white bg-gray-800 rounded-md top-4 right-4'
          onClick={() => setResponsiveMode(!isResponsiveMode)}
        >
          Toggle Responsive Mode
        </button>
      </div>
    </div>
  );
}

export default Layout;
