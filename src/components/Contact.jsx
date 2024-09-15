import React from 'react'
import '../styles/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileLines, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import image from '../assets/images/contact.png'

function Contact({ContactRef}) {
  return (
    <div className='contact-main' ref={ContactRef}>
          <h3 className="projects-title text-center">Contact</h3>
          <div className="contact-content"> 
        <div className="contact-leftsec">
          <div className="contactlinks">
                       <div className="contact-details">
                           <div className="contact-icon">
                               <FontAwesomeIcon icon={faEnvelope} />
                           </div> 
                                <a href="mailto: hariharasudhan15@gmail.com" className="mail-link">hariharasudhan15@gmail.com</a> 
                       </div>
                       <div className="contact-details">
                           <div className="contact-phoneicon">
                               <FontAwesomeIcon icon={faPhone} />
                           </div> 
                                <a href="tel: +91 9597278968" className="mail-link">+91 9597278968</a> 
                       </div>
                       <div className="contact-details">
                           <div className="contact-linkedinicon">
                               <FontAwesomeIcon icon={faLinkedin} />
                           </div> 
                                <a href="https://www.linkedin.com/in/hariharasudhan-s-333712186" target="_blank" className="mail-link">Linked Profile</a> 
                       </div>
                       <div className="contact-details">
                           <div className="contact-githubicon">
                               <FontAwesomeIcon icon={faGithub} />
                           </div> 
                                <a href="https://github.com/sudhansmart" target="_blank" className="mail-link">Git -Profile</a> 
                       </div>
                       <div className="contact-details">
                           <div className="contact-pdficon">
                               <FontAwesomeIcon icon={faFileLines} />
                           </div> 
                                <a href="https://drive.google.com/file/d/1-XU42t4D2vkUQzy9lE6VAk5wE5CfS50T/view?usp=sharing" target="_blank" className="mail-link">View - Curriculam Vitae</a> 
                       </div>
                   </div>
        </div>

        <div className="contact-rightsec">
               <img src={image} alt="Developer-image" className="contactimg" />
        </div>
        </div>
    </div>
  )
}

export default Contact