import React from 'react';
import {motion} from 'framer-motion';


const About =() =>{
    return <div className="about">
      <h2>about me</h2>
      <div className="about-center">

          <motion.div className="details" initial={{y:500}} animate={{y:0}}>
            <div className="education">
              <h3 className='heading'>education</h3>
              <p className='degree'>Bachelor of Science</p>
              <p className='subject'>( Computer Science )</p>
            </div>
            <div className="skills">
              <h3 className="heading">technical skills</h3>
              <ul>
              <li >&#9679; HTML </li>
              <li>&#9679; CSS</li>
              <li>&#9679; Javascript</li>
              <li>&#9679; React JS</li>
              </ul>
              
            </div>
        </motion.div>
        <motion.div className="text" initial={{y:500}} animate={{y:0}}>

        <p>
        Hey there, I'm a passionate newcomer to the world of web development.
         I'm on the lookout for chances to dive into the real deal of creating web applications. 
         Becoming a full-stack developer is my ultimate goal. </p><p>
         While I'm on the hunt for opportunities, I spend my time learning new technologies. 
         You'll often find me exploring resources on FreeCodeCamp, Udemy, and good ol' YouTube.
          Let's connect and chat about web wonders!
        </p>
        </motion.div>
    </div>
    </div>

}
export default About