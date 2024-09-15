import React,{useRef} from 'react'
import '../styles/workexperience.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong,faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

function WorkExperience() {
  const cardContainerRef = useRef(null);
       const data = [ 
        {
         title: "Junior MERN Stack Developer",
         duration: "Dec 2024 - Present",
         company: "Skylark Digi-solutions",
         description :[
          "Designing and building RESTful APIs using Node.js and Express.",
          "Developing and maintaining web applications using MongoDB, Express.js, React.js, and Node.js." ,
          "Integrating MongoDB for efficient data storage and retrieval.",
          "Deploying applications on IIS (Internet Information Services) for hosting and managing the backend services.",
          "Implementing authentication and authorization using token-based systems (e.g., JWT).",
          "Debugging, testing, and optimizing the application for performance, security, and smooth deployment."
          
         ]
        },
        {
          title : "Automation Engineer",
          duration : "Mar 2023 - Aug 2024",
          company : "Salcomp Manufacturing Pvt. Ltd.",
          description : [
            "Troubleshooting and optimizing automated machinery to ensure efficiency and minimize downtime.",
            "Integrating robotics, sensors, and other technologies to enhance production lines.",
            "Conducting system testing, calibration, and validation to meet industry standards.",
            "Collaborating with cross-functional teams to improve process control and automation.",
            "Ensuring safety compliance and maintaining documentation for automated systems."
          ]
        },
        {
          title : "Project Engineer",
          duration : "Nov 2022 - Mar 2023",
          company : "Tespa Robotics India Pvt. Ltd.",
          description : [
            "Programming and debugging industrial robots for automated tasks in SPM applications.",
            "Conducting onsite installation, calibration, and troubleshooting of robotic systems.",
            "Collaborating with design teams to integrate robotics into special purpose machines.",
            "Providing onsite technical support and training to operators and maintenance staff.",
            "Ensuring compliance with safety regulations and maintaining accurate documentation for robotic systems.",
            "Overseeing the manufacturing and assembly of special purpose machines with robotic integration."

        ]
      },
      {
        title : "Site-Incharge",
        duration : "June 2021 - Nov 2022",
        company : "merit Technologies India Pvt. Ltd.",
        description : [
          "Supervising the operation and maintenance of the automated wagon loading system to ensure efficient performance.",
          "Coordinating with control room operators and maintenance teams to address technical issues and minimize downtime.",
          "Ensuring compliance with safety and environmental regulations during loading operations.",
          "Monitoring system performance and implementing process improvements for optimized loading efficiency.",
          "Training and guiding the onsite staff to operate and troubleshoot the automated system.",
          "Maintaining documentation and reports for system operations, safety checks, and maintenance activities."
        ]
      },
      {
        title: "Mechanical Supervisor",
        duration: "Mar 2020 - July 2020",
        company : "ISCCO LLP- UAE",
        description : [
          "Supervising the dismantling, inspection, repair, and reassembly of mechanical equipment such as pumps, compressors, and Heat Exchangers.",
          "Ensuring that all maintenance activities are performed safely and in compliance with industry standards and regulations.",
          "Coordinating with cross-functional teams to prioritize tasks and ensure timely completion of shutdown activities.",
          "Inspecting equipment to identify potential issues and recommending corrective actions.",
          "Providing guidance and support to the maintenance crew to ensure work quality and safety.",
          "Maintaining detailed records of maintenance activities, equipment condition, and any repairs conducted during the shutdown."
        ]
      },
      {
        title : "Shift Supervisor",
        duration : "Nov 2015 - Oct 2019",
        company : "URS Eng. Pvt. Ltd.",
        description:[
          "Supervising the operation and maintenance of coke handling equipment, including conveyors, crushers, and storage systems.",
          "Ensuring compliance with safety regulations and protocols to prevent accidents and maintain a safe working environment.",
          "Coordinating with other shift supervisors and refinery personnel to manage workflow and address any operational issues.",
          "Monitoring equipment performance and conducting inspections to identify and resolve potential problems.",
          "Managing shift schedules, allocating tasks to team members, and providing on-the-job training as needed.",
          "Maintaining detailed shift reports and documentation of operational activities, incidents, and equipment status."
        ]
      }

    ];

    const scrollLeft = () => {
      const scrollAmount = cardContainerRef.current.offsetWidth;
      cardContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    };
  
    const scrollRight = () => {
      const scrollAmount = cardContainerRef.current.offsetWidth;
      cardContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };
  return (
    <div className='workexperience container'>
                <h3 className="projects-title text-center mt-5">Work Experiences</h3>

                <div className="workexperience-main gap-2" ref={cardContainerRef}>
                {data.map((item, index) => (<div className="workexperience-cover col-4 " key={index}>
                                <h4 className="workexperience-title">{item.title.replace(/\b\w\b/g, c => c.toUpperCase())}</h4>
                                <h6 className="workexperience-duration">{item.duration}</h6>
                                <h5 className="workexperience-company">{item.company}</h5>
                                 <hr className='workexperience-line' />
                                {item.description.map((desc, index) => (
                                  <ul key={index} >
                                    <li className='workexperience-descriptions'>{desc}</li>
                                  </ul>
                                ))}
                </div>)
                )}
                </div>
                <div className="scrollbtnsec">
        <a className="prevsec" onClick={scrollLeft}><FontAwesomeIcon icon={faArrowLeftLong} /> Prev </a>
        <a className="nextsec" onClick={scrollRight}>Next <FontAwesomeIcon icon={faArrowRightLong} /></a>
      </div>
    </div>


  )
}

export default WorkExperience