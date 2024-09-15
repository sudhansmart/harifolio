import React from 'react'
import '../styles/about.css'
import image from '../assets/images/aboutimg.png'
function About({AboutRef}) {
  return (
    <div className='aboutmain' ref={AboutRef}>
              <h3 className='about text-center'>About</h3>
              <div className='about-content'>
              <div className="imgsec">
                  <img src={image} alt="about-image" className="aboutimage" />
              </div>

              <p className='about-text'>
              I am a MERN stack developer specializing in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I handle both front-end and back-end development, ensuring seamless integration between client-side and server-side components. Proficient in JavaScript, I design dynamic, responsive user interfaces and manage databases effectively. I am skilled in RESTful API development for efficient data communication and have experience deploying and managing applications on Internet Information Services (IIS), configuring and maintaining robust, scalable web services on Windows servers.
                 </p>
              </div>
              
    </div>
  )
}

export default About