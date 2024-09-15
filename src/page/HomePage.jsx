import React, { useRef } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import NavBar from '../components/NavBar'
import SkillBase from '../components/SkillBase'
import Projects from '../components/Projects'
import WorkExperience from '../components/WorkExperience'
import Achievements from '../components/Achievements'
import Contact from '../components/Contact'
import Footer from '../components/Footer'



function Homepage() {
  const AboutRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ContactRef = useRef(null);
  const HomeRef = useRef(null);
   
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.scrollBy(0, -45); // Move 35px upwards
      }, 700);
    }
  };
  
  return (
    <div>
        <NavBar  scrollToSection={scrollToSection} HomeRef={HomeRef} AboutRef={AboutRef} SkillsRef={SkillsRef} ProjectsRef={ProjectsRef} ContactRef={ContactRef}/>
        <Header HomeRef={HomeRef}/>
        <About AboutRef={AboutRef}/>
        <Skills SkillsRef={SkillsRef}/>
        <SkillBase/>
        <Projects ProjectsRef={ProjectsRef}/>
        <WorkExperience/>
        <Achievements  HomeRef={HomeRef} />
        <Contact ContactRef={ContactRef}/>
        <Footer/>
    </div>
  )
}

export default Homepage