// import { useRef } from "react"
// import "./services.scss"
// import {motion, useInView} from "framer-motion"

// const variants = {
//     initial:{
//         x: -500,
//         y: 100,
//         opacity: 0
//     },
//     animate:{
//         x: 0,
//         y: 0,
//         opacity: 1,
//         transition: {
//             duration: 1,
//             staggerChildren: 0.1,
//         },
//     }
// }

// const Services = () => {

//     const ref = useRef()

//     const isInView = useInView(ref, {margin: "-100px"})

//   return (
//     <motion.div className="services" variants={variants} 
//     initial = "initial" 
//     // animate = "animate"
//     // whileInView="animate"
//     ref = {ref}
//     // animate={isInView && "animate"}
//     animate={"animate"} // For Mobile View
//     >
//         <motion.div className="textContainer" variants={variants}>
//             <p>
//                 I focus on helping your brand grow
//                 <br />and move forward 
//             </p>
            
//             <hr />
//         </motion.div>
        

//         <motion.div className="titleContainer" variants={variants}>
//             <div className="title">
//                 <img src="people.webp" alt=""/>
//                 <h1><motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas</h1>
//             </div>
//             <div className="title">
//                 <h1><motion.b whileHover={{color: "orange"}}>For your</motion.b> Business.</h1>
//                 <button>What We Do?</button>
//             </div>
//         </motion.div>

//         <motion.div className="listContainer" variants={variants}>
//             <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
//                 <h2>Branding</h2>
//                 <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
//                 nisi ut aliquip ex ea commodo consequat.
//                 </p>
//                 <button>Go</button>
//             </motion.div>
//             <motion.div className="box" whileHover={{background: "lightgray", color: "black" }}>
//                 <h2>Branding</h2>
//                 <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
//                 nisi ut aliquip ex ea commodo consequat.
//                 </p>
//                 <button>Go</button>
//             </motion.div>
//             <motion.div className="box" whileHover={{background: "lightgray", color: "black" }}>
//                 <h2>Branding</h2>
//                 <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
//                 nisi ut aliquip ex ea commodo consequat.
//                 </p>
//                 <button>Go</button>
//             </motion.div>
//             <motion.div className="box" whileHover={{background: "lightgray", color: "black" }}>
//                 <h2>Branding</h2>
//                 <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
//                 nisi ut aliquip ex ea commodo consequat.
//                 </p>
//                 <button>Go</button>
//             </motion.div>
//         </motion.div>

//     </motion.div>
//   )
// }

// export default Services


// ****************************** EXPERIENCE AND EDUCATION ADDED ****************************

// import { useRef } from "react"
// import "./services.scss"
// import {motion, useInView} from "framer-motion"

// const variants = {
//     initial:{
//         x: -500,
//         y: 100,
//         opacity: 0
//     },
//     animate:{
//         x: 0,
//         y: 0,
//         opacity: 1,
//         transition: {
//             duration: 1,
//             staggerChildren: 0.1,
//         },
//     }
// }

// const Services = () => {

//     const ref = useRef()

//     const isInView = useInView(ref, {margin: "-100px"})

//   return (
//     <motion.div className="services" variants={variants} 
//     initial = "initial" 
//     // animate = "animate"
//     // whileInView="animate"
//     ref = {ref}
//     animate={isInView && "animate"}
//     // animate={"animate"} // For Mobile View
//     >
//         <motion.div className="textContainer" variants={variants}>
//             <p>
//                 I focus on helping your brand grow
//                 <br />and move forward 
//             </p>
            
//             <hr />
//         </motion.div>
        

//         <motion.div className="titleContainer" variants={variants}>
//             <div className="title">
//                 <img src="people.webp" alt=""/>
//                 <h1><motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas</h1>
//             </div>
//             <div className="title">
//                 <h1><motion.b whileHover={{color: "orange"}}>For your</motion.b> Business.</h1>
//                 <button>What We Do?</button>
//             </div>
//         </motion.div>

        
//         <motion.div className="contentContainer" variants={variants}>
//             <motion.div className="column" variants={variants}>
//                 <div className="box">
//                     <h2>Software Engineer</h2>
//                     <p>Company A - 2020 to Present</p>
//                     <p>• Developed an AngularJS inventory tracking system.</p>
//                     <p>• Enhanced a web application with Angular, increasing page load speeds.</p>
//                 </div>
//                 <div className="box">
//                     <h2>Junior Developer</h2>
//                     <p>Company B - 2018 to 2020</p>
//                     <p>• Formulated reusable Angular Material components.</p>
//                     <p>• Engineered a responsive ASP.NET MVC 5 application.</p>
//                 </div>
//             </motion.div>
            
//             <div className="divider"></div> {/* Vertical Divider */}

//             <motion.div className="column" variants={variants}>
//                 <div className="box">
//                     <h2>Bachelor of Computer Science</h2>
//                     <p>University X - 2014 to 2018</p>
//                 </div>
//                 <div className="box">
//                     <h2>High School Diploma</h2>
//                     <p>School Y - 2010 to 2014</p>
//                 </div>
//             </motion.div>
//         </motion.div>
        


//     </motion.div>
//   )
// }

// export default Services


// Perfect Card Implementation

// import { useRef, useState } from "react"
// import "./services.scss"
// import {motion, useInView} from "framer-motion"

// const variants = {
//     initial:{
//         x: -500,
//         y: 100,
//         opacity: 0
//     },
//     animate:{
//         x: 0,
//         y: 0,
//         opacity: 1,
//         transition: {
//             duration: 1,
//             staggerChildren: 0.1,
//         },
//     }
// }

// const cardVariants = {
//     flipped: {
//         rotateY: 180,
//         transition: {
//             duration: 0.6,
//         }
//     },
//     unflipped: {
//         rotateY: 0,
//         transition: {
//             duration: 0.6,
//         }
//     }
// }

// const Services = () => {

//     const ref = useRef()

//     const isInView = useInView(ref, {margin: "-100px"})

//     const [isFlippedExperience, setIsFlippedExperience] = useState(false)
//     const [isFlippedEducation, setIsFlippedEducation] = useState(false)

//   return (
//     <motion.div className="services" variants={variants} 
//     initial = "initial" 
//     // animate = "animate"
//     // whileInView="animate"
//     ref = {ref}
//     animate={isInView && "animate"}
//     // animate={"animate"} // For Mobile View
//     >
//         <motion.div className="textContainer" variants={variants}>
//             <p>
//                 I focus on helping your brand grow
//                 <br />and move forward 
//             </p>
            
//             <hr />
//         </motion.div>
        

//         <motion.div className="titleContainer" variants={variants}>
//             <div className="title">
//                 <img src="people.webp" alt=""/>
//                 <h1><motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas</h1>
//             </div>
//             <div className="title">
//                 <h1><motion.b whileHover={{color: "orange"}}>For your</motion.b> Business.</h1>
//                 <button>What We Do?</button>
//             </div>
//         </motion.div>

        
//         <div className="contentContainer">
//                 <div className="column">
//                     <div 
//                         className={`card ${isFlippedExperience ? 'flipped' : ''}`} 
//                         onClick={() => setIsFlippedExperience(!isFlippedExperience)}
//                     >
//                         <div className="cardInner">
//                             <div className="cardFront">
//                                 <h2>Software Engineer</h2>
//                                 <p>Company A - 2020 to Present</p>
//                                 <p>• Developed an AngularJS inventory tracking system.</p>
//                                 <p>• Enhanced a web application with Angular, increasing page load speeds.</p>
//                             </div>
//                             <div className="cardBack">
//                                 <h2>Junior Developer</h2>
//                                 <p>Company B - 2018 to 2020</p>
//                                 <p>• Formulated reusable Angular Material components.</p>
//                                 <p>• Engineered a responsive ASP.NET MVC 5 application.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
                
//                 <div className="divider"></div>

//                 <div className="column">
//                     <div 
//                         className={`card ${isFlippedEducation ? 'flipped' : ''}`} 
//                         onClick={() => setIsFlippedEducation(!isFlippedEducation)}
//                     >
//                         <div className="cardInner">
//                             <div className="cardFront">
//                                 <h2>Bachelor of Computer Science</h2>
//                                 <p>University X - 2014 to 2018</p>
//                             </div>
//                             <div className="cardBack">
//                                 <h2>High School Diploma</h2>
//                                 <p>School Y - 2010 to 2014</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
        


//     </motion.div>
//   )
// }

// export default Services



// **************************************************************************** PERFECT **************

// import { useRef, useState } from "react"
// import "./services.scss"
// import {motion, useInView} from "framer-motion"

// const variants = {
//     initial:{
//         x: -500,
//         y: 100,
//         opacity: 0
//     },
//     animate:{
//         x: 0,
//         y: 0,
//         opacity: 1,
//         transition: {
//             duration: 1,
//             staggerChildren: 0.1,
//         },
//     }
// }

// const cardVariants = {
//     flipped: {
//         rotateY: 180,
//         transition: {
//             duration: 0.6,
//         }
//     },
//     unflipped: {
//         rotateY: 0,
//         transition: {
//             duration: 0.6,
//         }
//     }
// }

// const Services = () => {

//     const ref = useRef()

//     const isInView = useInView(ref, {margin: "-100px"})

//     const [isFlippedExperience, setIsFlippedExperience] = useState(false)
//     const [isFlippedEducation, setIsFlippedEducation] = useState(false)

//   return (
//     <motion.div className="services" variants={variants} 
//     initial = "initial" 
//     // animate = "animate"
//     // whileInView="animate"
//     ref = {ref}
//     animate={isInView && "animate"}
//     // animate={"animate"} // For Mobile View
//     >
//         <motion.div className="textContainer" variants={variants}>
//             <p>
//                 I focus on helping your brand grow
//                 <br />and move forward 
//             </p>
            
//             <hr />
//         </motion.div>
        

//         <motion.div className="titleContainer" variants={variants}>
//             <div className="title">
//                 <img src="people.webp" alt=""/>
//                 <h1><motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas</h1>
//             </div>
//             <div className="title">
//                 <h1><motion.b whileHover={{color: "orange"}}>For your</motion.b> Business.</h1>
//                 <button>What I did?</button>
//             </div>
//         </motion.div>

        
//         <div className="contentContainer">
//                 <div className="column">
//                     <div 
//                         className={`card ${isFlippedExperience ? 'flipped' : ''}`} 
//                         onClick={() => setIsFlippedExperience(!isFlippedExperience)}
//                     >
//                         <div className="cardInner">
//                             <div className="cardFront">
//                                 <h2>Software Engineer</h2>
//                                 <p>Company A - 2020 to Present</p>
//                                 <p>• Developed an AngularJS inventory tracking system.</p>
//                                 <p>• Enhanced a web application with Angular, increasing page load speeds.</p>
//                             </div>
//                             <div className="cardBack">
//                                 <h2>Junior Developer</h2>
//                                 <p>Company B - 2018 to 2020</p>
//                                 <p>• Formulated reusable Angular Material components.</p>
//                                 <p>• Engineered a responsive ASP.NET MVC 5 application.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
                
//                 <div className="divider">
//                     <div className="flipText">Flip It !!!</div>
//                 </div>

//                 <div className="column">
//                     <div 
//                         className={`card ${isFlippedEducation ? 'flipped' : ''}`} 
//                         onClick={() => setIsFlippedEducation(!isFlippedEducation)}
//                     >
//                         <div className="cardInner">
//                             <div className="cardFront">
//                                 <h2>Bachelor of Computer Science</h2>
//                                 <p>University X - 2014 to 2018</p>
//                             </div>
//                             <div className="cardBack">
//                                 <h2>High School Diploma</h2>
//                                 <p>School Y - 2010 to 2014</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
        


//     </motion.div>
//   )
// }

// export default Services
















// import { useRef, useState } from "react"
// import "./services.scss"
// import {motion, useInView} from "framer-motion"
// import Technologies from "../Technologies/Technologies"

// const variants = {
//     initial:{
//         x: -500,
//         y: 100,
//         opacity: 0
//     },
//     animate:{
//         x: 0,
//         y: 0,
//         opacity: 1,
//         transition: {
//             duration: 1,
//             staggerChildren: 0.1,
//         },
//     }
// }

// const cardVariants = {
//     flipped: {
//         rotateY: 180,
//         transition: {
//             duration: 0.6,
//         }
//     },
//     unflipped: {
//         rotateY: 0,
//         transition: {
//             duration: 0.6,
//         }
//     }
// }

// const Services = () => {

//     const ref = useRef()

//     const isInView = useInView(ref, {margin: "-100px"})

//     const [isFlippedExperience, setIsFlippedExperience] = useState(false)
//     const [isFlippedEducation, setIsFlippedEducation] = useState(false)

//   return (
//     <motion.div className="services" variants={variants} 
//     initial = "initial" 
//     // animate = "animate"
//     // whileInView="animate"
//     ref = {ref}
//     animate={isInView && "animate"}
//     // animate={"animate"} // For Mobile View
//     >
//         <motion.div className="textContainer" variants={variants}>
//             <p>
//                 I focus on helping your brand grow
//                 <br />and move forward 
//             </p>
            
//             <hr />
//         </motion.div>
        

//         <motion.div className="titleContainer" variants={variants}>
//             <div className="title">
//                 <img src="people.webp" alt=""/>
//                 <h1><motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas</h1>
//             </div>
//             <div className="title">
//                 <h1><motion.b whileHover={{color: "orange"}}>For your</motion.b> Business.</h1>
//                 <button>What I did?</button>
//             </div>
//         </motion.div>

        
//         <div className="contentContainer">
//                 <div className="column">
//                     <div 
//                         className={`card ${isFlippedExperience ? 'flipped' : ''}`} 
//                         onClick={() => setIsFlippedExperience(!isFlippedExperience)}
//                     >
//                         <div className="cardInner">
//                             <div className="cardFront">
//                                 <h2>Software Engineer</h2>
//                                 <p>Company A - 2020 to Present</p>
//                                 <p>• Developed an AngularJS inventory tracking system.</p>
//                                 <p>• Enhanced a web application with Angular, increasing page load speeds.</p>
//                             </div>
//                             <div className="cardBack">
//                                 <h2>Junior Developer</h2>
//                                 <p>Company B - 2018 to 2020</p>
//                                 <p>• Formulated reusable Angular Material components.</p>
//                                 <p>• Engineered a responsive ASP.NET MVC 5 application.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
                
//                 <div className="divider">
//                     <div className="flipText">Flip It !!!</div>
//                 </div>

//                 <div className="column">
//                     <div 
//                         className={`card ${isFlippedEducation ? 'flipped' : ''}`} 
//                         onClick={() => setIsFlippedEducation(!isFlippedEducation)}
//                     >
//                         <div className="cardInner">
//                             <div className="cardFront">
//                                 <h2>Bachelor of Computer Science</h2>
//                                 <p>University X - 2014 to 2018</p>
//                             </div>
//                             <div className="cardBack">
//                                 <h2>High School Diploma</h2>
//                                 <p>School Y - 2010 to 2014</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
            
//             <div className="techstack">
//                 <h2>Tech Stack</h2>
//                 <Technologies/>
//             </div>
        


//     </motion.div>
//   )
// }

// export default Services





















import { useRef, useState } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import Technologies from "../Technologies/Technologies";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const delayedCard = document.querySelector('.cardInner.is-delayed');


  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        I'm passionate about driving digital growth
          <br />
          and delivering innovative solutions
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }} whileTap={{ color: "orange" }} >My expertise</motion.b> is at your service
          </h1>
        </div>
        <div className="title">
          <h1>
          to achieve your <motion.b whileHover={{ color: "orange" }} whileTap={{ color: "orange" }}>business objectives</motion.b>{" "}
            
          </h1>
          
        </div>
      </motion.div>

      <div className="contentContainer">
        <div className="column">
          <div className="card">
            <div className="cardInner">
              <div className="cardFront">
                <h2>Software Engineer</h2>
                <p>Kulsoft Technologies - 2020 to 2022</p>
                <p>• Increased operational efficiency by 10% with inventory tracking system (AngularJS & Node.js)</p>
                <p>• Improved web app performance: 30% faster load times, 20% lower bounce rate (Angular)</p>
                <p>• Reduced project development time by 15% with reusable Angular Material components</p>
                <p>• Boosted client engagement by 10% on responsive ASP.NET MVC 5 app (C#)</p>
              </div>
              <div className="cardBack">
                <h2>Software Engineer Intern</h2>
                <p>Sutradhar Project Consultancy Services - 3 months</p>
                <p>• React JS & Django: Developed interactive web app with advanced forms</p>
                <p>• Django APIs: Structured CRUD & filter APIs for efficient data management</p>
                <p>• Postman Validation: Achieved 80% success rate in bug-free deployment</p>
                <p>• MySQL Administration: Managed 1,000+ daily records with 90% uptime</p>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="column">
          <div className="card">
            <div className="cardInner">
              <div className="cardFront">
                <h2>Master of Computer Science</h2>
                <p>California State University Fullerton - 2022 to 2024</p>
                <p>GPA: 3.77 / 4.0</p>
              </div>
              
              <div className="cardBack">
                <h2>Bachelor of Computer Science</h2>
                <p>University of Pune - 2018 to 2022</p>
                <p>GPA: 3.9 / 4.0</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="techstack">
        <h2>Tech Stack</h2>
        <Technologies />
      </div>
    </motion.div>
  );
};

export default Services;
