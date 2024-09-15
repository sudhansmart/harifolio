import React, { useEffect, useState } from 'react'
import '../styles/navbar.css'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode,faAsterisk } from '@fortawesome/free-solid-svg-icons'
function NavBar({scrollToSection,HomeRef,AboutRef,SkillsRef,ProjectsRef,ContactRef}) {
      const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const handleNavClick = (ref) => {
    scrollToSection(ref);
   
  };

  useEffect(() => {
    const handleScroll = () => {
      if ( window.scrollY > 30) {
        // User is scrolling down, hide the navbar
        setIsSticky(true);
      } else {
        // User is scrolling up, show the navbar
        setIsSticky(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`navmain ${isSticky ? 'sticky' : ''}`}>
        <div className="leftnav">
        <FontAwesomeIcon className='codeicon' icon={faCode} />
        <FontAwesomeIcon className='asteriskicon' icon={faAsterisk} />
        </div>
        <div className="rightnav">
            <Nav.Link onClick={() => handleNavClick(HomeRef)} >Home</Nav.Link>
            <Nav.Link onClick={() => handleNavClick(AboutRef)}>About</Nav.Link>
            <Nav.Link onClick={() => handleNavClick(SkillsRef)}>Skills</Nav.Link>
            <Nav.Link onClick={() => handleNavClick(ProjectsRef)}>Projects</Nav.Link>
            <Nav.Link onClick={() => handleNavClick(ContactRef)}>Contact</Nav.Link>
        </div>
       
    </div>
  )
}

export default NavBar