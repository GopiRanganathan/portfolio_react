import React from 'react';
import {motion} from 'framer-motion';



const Contact = () =>{

    return <motion.div className="contact" initial={{y:500}} animate={{y:0}}>
        <h2>contact me</h2>
        <div className="contact-center">
            <div className="mail">
                <p><span>&#9993;</span>Gopiranga9@gmail.com</p>
                <p> <span>&#9993;</span>
                <a href="https://www.linkedin.com/in/gopiga-ranganathan/">LinkedIn</a></p>
            </div>
        </div>
    </motion.div>
}

export default Contact;