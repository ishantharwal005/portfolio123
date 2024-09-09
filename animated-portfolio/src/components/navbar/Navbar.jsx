import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity: 0, scale: 0.5}}
                animate={{opacity:1, scale: 1}}
                transition={{duration: 0.5}}
            ><img src="/bitlogo.png"/></motion.span>
            <div className="social">
              <a href="https://www.linkedin.com/in/ishan-tharwal-190617225/" target="_blank" rel="noopener noreferrer"><img src="/linkedin.png" alt="" /></a>
              <a href="https://github.com/ishantharwal005" target="_blank" rel="noopener noreferrer"><img src="/github.png" alt="" /></a>
              <a href="https://www.instagram.com/ishan_tharwal/" target="_blank" rel="noopener noreferrer"><img src="/instagram.png" alt="" /></a>
              
            </div>
        </div>
    </div>
  )
}

export default Navbar