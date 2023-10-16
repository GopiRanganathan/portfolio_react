import React from 'react';
import {pages, social} from './data';
import {motion} from 'framer-motion';


const Navbar = ({setPage, page, isActive, setIsActive}) => {

  

    const list = {
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
        hidden: {
          opacity: 0,
          transition: {
            when: "afterChildren",
          },
        },
      }

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}

    return <nav className="navbar"> 
            <div className="nav-center">  
              <motion.div className="logo"
              initial="hidden"
              animate="visible"
                variants={item}
              >
                <h3>gopi</h3>
              </motion.div>
             <motion.ul className="links" 
              initial="hidden"
              animate="visible"
              variants={list}
              >
                {pages.map((link, index)=>{
                    const {text} = link;

                    return <motion.li key={index}  variants={item} onClick={()=> {setPage({text}); 
                    setIsActive({index});
                  
                      }}>
                        <a href="#" className={`${isActive.index === index ? 'active' : ''}`}>{text} </a>
                    </motion.li>
                })}
             </motion.ul>

                <motion.ul className="social"  
                initial="hidden"
              animate="visible"
              variants={list}>
                    {
                        social.map((link, index)=>{
                            const {icon, url} = link;

                            return <motion.li key={index} variants={item}>
                                <a href={url} target="_blank" 
         rel="noreferrer">
                                    {icon}
                                </a>
                            </motion.li>
                        })
                    }
                </motion.ul>
            </div>

    </nav>


}

export default Navbar;