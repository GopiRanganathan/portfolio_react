import React from 'react';
import {AiFillHome, AiFillProject, AiFillMail, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {FaFreeCodeCamp} from 'react-icons/fa';
import {BsFillPersonFill} from 'react-icons/bs';


export const pages = [
    {
        text: 'home',
        icon: <AiFillHome />,
        url: '/home'
    },
    {
        text: 'about',
        icon: <BsFillPersonFill />,
        url: '/about'
    },
    {
        text: 'project',
        icon: <AiFillProject />,
        url: '/project'
    },
    {
        text: 'contact',
        icon: <AiFillMail />,
        url: '/contact'
    },
]

export const social = [
    {
        icon: <AiFillLinkedin />,
        url: 'https://www.linkedin.com/in/gopiga-ranganathan/'
    },

    {
        icon:<AiFillGithub />,
        url: 'https://github.com/'
    },

    {
        icon: <FaFreeCodeCamp />,
        url: 'https://www.freecodecamp.org/fccade9fdd3-09ee-4ddb-bdcc-b26b72a955b8'
    }
]

export const projects =[
    {
        text:'simple calculator',
        image:'/images/calculator.jpg',
        demoLink:'https://gopiranganathan.github.io/Calculator/',
        srcLink:'https://github.com/GopiRanganathan/Calculator'
    },
    
    {
        text:'weather app',
        image:'/images/weatherapp.png',
        demoLink:'https://gopiranganathan.github.io/Weather-App/',
        srcLink:'https://github.com/GopiRanganathan/Weather-App'
    }
]

