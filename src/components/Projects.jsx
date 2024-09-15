import React from 'react'
import '../styles/projects.css'
import madras from '../assets/images/projects/adventuresite.jpg'
import skylark from '../assets/images/projects/jobportal.jpg'
import gilde from '../assets/images/projects/glidego.jpg'

function Projects({ProjectsRef}) {
     
    const data = [ 
               {
                title: "Madras Campers-Adventure Booking App", 
                image: madras,
                content : "Madras Campers is an adventure booking platform designed to offer seamless navigation and booking of various outdoor activities. The site will feature an intuitive user interface, secure payment processing, and real-time availability tracking for experiences like wilderness camping and team retreats.",
                 url : "https://madrascampers.com/",
                 spec : ["User Authentication", "Admin Dashboard", "User Dashboard", "Payment Integration","Email Notifications","Secure Data Handling"],
                 tech : ["ReactJS", "MongoDB", "ExpressJS", "NodeJS", "CSS", "Bootstrap","IIS", "GitHub"]
               },
               {
                title: "Skylark-Job portal",
                image: skylark,
                content : "The Skylark Jobs Portal is a dynamic platform connecting job seekers with employers across various industries. It offers advanced search filters, resume uploads, and real-time job matching to streamline the application process. Employers can efficiently manage applications through intuitive dashboards, ensuring a smooth hiring experience.",
                 url : "https://skylarkjobs.com/",
                 spec : ["User Authentication", "Employer Dashboard", "User Dashboard", "Advanced Job Search","Resume Upload","Candidate Profile Management","Email Notifications","Secure Data Handling"],
                 tech : ["ReactJS", "MongoDB", "ExpressJS", "NodeJS", "CSS", "Bootstrap","IIS", "GitHub"]
               },
               {
                title: "GlideGo - The Bike Rental App",
                image: gilde,
                content : "The bike rental app offers a convenient way to rent bikes on-demand, providing users with easy access to a wide range of bikes for short-term use. With GPS tracking, secure payments, and seamless booking, the app ensures a hassle-free experience for both casual riders and commuters. The user-friendly interface makes finding and renting a bike quick and straightforward, whether you're exploring the city or just getting around.",
                url :"https://glidego.netlify.app/",
                spec : ["User Authentication", "User Dashboard", "Admin Dashboard","Secure Data Handling"],
                tech : ["ReactJS", "MongoDB", "ExpressJS", "NodeJS", "CSS", "Bootstrap","IIS", "GitHub"]
              }
               
               
    ]
     
  return (
    <div className='projects container' ref={ProjectsRef}>
            <h3 className="projects-title text-center mt-5">Projects</h3>

            {data.map((item, index) => (
                        <div className="project" key={index}>
                           
                            <div className={`textrow ${index % 2 === 1 ? 'reverse' : ''}`}>
                                <img src={item.image} alt={`Image ${item.id}`} />
                                 <div className="project-content">
                                 <h3 className='mt-3'>{item.title}</h3>
                                 <a   href={item.url} target="_blank" className='project-link'>Click here to view project</a>
                                  <p className='project-content-text'>{item.content}</p>
                                 <div className='d-flex justify-content-around'>
                                     <div className='specs'>
                                        <h5>Features :</h5>
                                        {item.spec.map((spec, index) => (
                                            <ul key={index}>
                                                <li >{spec}</li>
                                            </ul>
                                        ))
                                          }
                                     </div>
                                     <div className="tech">
                                      <h5>Tech Stack :</h5>
                                      {item.tech.map((tech, index) => (
                                        <ul  key={index}>
                                            <li >{tech}</li>
                                        </ul>
                                          ))
                                        }
                                     </div>
                                 </div>
                                 </div>
                            </div>
                            <hr  className='project-line'/>
                        </div>
                    ))}
    </div>
  )
}

export default Projects