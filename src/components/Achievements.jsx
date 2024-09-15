import React from 'react'
import '../styles/achievements.css'
import zen from '../assets/images/certificates/zen.png'
import bootstrap from '../assets/images/certificates/bootstrap.png'
import css from '../assets/images/certificates/css3.png'
import html from '../assets/images/certificates/html5.png'
import javascript from '../assets/images/certificates/js.png'
import mongodb from '../assets/images/certificates/mongodb.png'
import node from '../assets/images/certificates/nodejs.png'
import react from '../assets/images/certificates/react.png'
import mysql from '../assets/images/certificates/mysql.png'


function Achievements() {
      const data = [
          {
              image : zen,
              title : 'Full Stack Web Development',
          },
          {
              image : css,
              title : 'CSS3',
          },
          { 
              image : html,
              title : 'HTML5',
          },
          {
              image : javascript,
              title : 'Javascript', 
          },
          {
              image : mongodb,
              title : 'MongoDB',
          },
          {
              image : node,
              title : 'NodeJS',
          },
          {
              image : react,
              title : 'ReactJS',
          },
          {
              image : mysql,
              title : 'MySQL',
          },
          {
            image : bootstrap,
            title : 'Bootstrap 5',
        }

      ]

  return (
    <div className='achievements'>
            <h3 className="projects-title text-center mt-5">Achievements & Certifications</h3>

            <div className="achievement-main">
               {
                   data.map((item, index) => (
                       <div className="achievement  gap-5" key={index}>
                           <img src={item.image} alt="certificates" className="certificates" />
                           <h5 className="achievement-title text-light text-center mt-4">{item.title}</h5>
                       </div>
                   ))
               } 
           </div>
    </div>
  )
}

export default Achievements