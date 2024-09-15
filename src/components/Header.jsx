import React, { useEffect } from 'react'
import '../styles/header.css'



function Header({HomeRef}) {
  useEffect(() => {
    // Trigger the animation when the component mounts
    const nameElement = document.querySelector('.name');
    const roleElement = document.querySelector('.role');
    nameElement.classList.add('animate-name');
    roleElement.classList.add('animate-role');
   
  }, []);

  return (
    <div className='headermain' ref={HomeRef}>
      <div className="overlay">
       
        <div className="headercontent">
          <div className="leftheader">
                   <h1 className='name'>Hi, I'm <span className='highlight-name'>Hariharasudhan</span></h1>
                    <h2 className='role'>FullStack Web <span className='highlight-role '>Developer</span></h2>
          </div>
            <div className="rightheader">
                  
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header
