import React from 'react';
import {motion} from 'framer-motion';
import {projects} from './data';

const Project =() =>{


    return <motion.div className="project" initial={{y:500}} animate={{y:0}}>
        <h2>my projects</h2>
   <div className="project-center">

        {projects.map((item, index)=>{
            const {image,text,demoLink,srcLink} = item;
           
            return <article key={index}>
                <img src={`${process.env.PUBLIC_URL}${image}`} alt={text} />
               
                <h3 className="project-title">{text}</h3>
                <div className="btn-container">
                    <a href={srcLink}>github</a>
                    <a href={demoLink}>demo</a>
                </div>
            </article>
        })}
   </div>

    </motion.div>

}

export default Project;