import React from 'react';
import {motion} from 'framer-motion';

const Home =() =>{

    return <div className="home" >
        <motion.div className="text" initial={{y:500}} animate={{y:0}}>

        <div className="greet">Hello I'm</div>
        <motion.div className="name" 
        animate={{scale: 1}}
        initial={{scale: 0}}
        transition={{delay:0}}
        whileTap={{scale:0.3}}

        >Gopiga</motion.div>
        <div className="title" >frontend web developer</div>
        <div className="level" >
            &lt; entry level /&gt;</div>
        <a href={process.env.PUBLIC_URL + '/GOPIGA-RANGANATHAN.pdf'} className="resume"
         target="_blank" 
         rel="noreferrer" download >resume</a>
        </motion.div>
        <motion.div className="particles" initial={{y:500}} animate={{y:0}}>
            <motion.div className="box" intial={{scaleY:1}} animate={{scaleY:[7,1,7]}} transition={{delay:0, repeat:Infinity, duration:1}}></motion.div>
            <motion.div className="box" intial={{scaleY:1}} animate={{scaleY:[1,7,1]}} transition={{delay:0, repeat:Infinity, duration:1}}></motion.div>
            <motion.div className="box" intial={{scaleY:1}} animate={{scaleY:[7,1,7]}} transition={{delay:0, repeat:Infinity, duration:1}}></motion.div>
            <motion.div className="box" intial={{scaleY:1}} animate={{scaleY:[1,7,1]}} transition={{delay:0, repeat:Infinity, duration:1}}></motion.div>
            <motion.div className="box" intial={{scaleY:1}} animate={{scaleY:[7,1,7]}} transition={{delay:0, repeat:Infinity, duration:1}}></motion.div>
           
        </motion.div>

    
    </div>
}

export default Home;