import React from 'react';
import {motion} from 'framer-motion';
import {pages} from './data';

const BottomIcon=({setPage, isActive, setIsActive})=>{
    const variants = {
        hidden: { scale: 1 }, // Default scale
        visible: { scale: 2 }, // Scale when active
      };
      
 
      
    return <div className="bottom-icon">
  <ul className="icons" 
              
              >
                {pages.map((link, index)=>{
                    const {icon, text, url} = link;

                    return <motion.li key={index} animate={isActive === index ? 'visible' : 'hidden'} variants={variants}  onClick={()=> {setPage({text}); setIsActive(index); console.log(isActive ) }} whileHover={{scale:2}}>
                        <a href="#" className={`${isActive === index ? 'active' : ''}`}>{icon} </a>
                    </motion.li>
                })}
             </ul>
    </div>
}

export default BottomIcon;