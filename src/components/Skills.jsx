import React from 'react'
import '../styles/skills.css'
import img from '../assets/images/skillsimage.png'
import html from '../assets/images/skills/html.png'
import css from '../assets/images/skills/css.png'
import javascript from '../assets/images/skills/js.webp'
import react from '../assets/images/skills/react.png'
import node from '../assets/images/skills/nodejs.png'
import mongo from '../assets/images/skills/mongodb.png'
import express from '../assets/images/skills/express-js.png'
import bootstrap from '../assets/images/skills/bootstrap.png'
import figma from '../assets/images/skills/figma.png'
import iis from '../assets/images/skills/iis.png'
import github from '../assets/images/skills/github.png'
import redux from '../assets/images/skills/redux.png'




function Skills({SkillsRef}) {
  return (
    <div className='skills-main' ref={SkillsRef}>
             <h3 className="skills text-center">Skills</h3>
             <div className="skillsec">
                 < img className='centerimg' src={img} alt="skills-image" />
             </div>
             <div className="skills-icons">
                <img src={html} alt="" className="skill-html" />
                <img src={css} alt="" className="skill-css" />
                <img src={javascript} alt="" className="skill-js" />
                <img src={react} alt="" className="skill-react" />
                <img src={node} alt="" className="skill-node" />
                <img src={mongo} alt="" className="skill-mongo" />
                <img src={express} alt="" className="skill-express" />
                <img src={iis} alt="" className="skill-bootstrap" />
                <img src={figma} alt="" className="skill-figma" />
                <img src={bootstrap} alt="" className="skill-iis" />
                <img src={github} alt="" className="skill-github" />
                <img src={redux} alt="" className="skill-redux" />
                </div>
    </div>
  )
}

export default Skills