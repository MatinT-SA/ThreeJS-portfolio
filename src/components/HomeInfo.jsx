import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)


const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue
        py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Matin</span>
            <br />
            A Web Developer from Iran
        </h1>
    ),
    2: (
        <InfoBox
            text="5 years of experience in programming and doing freelance projects with C#, JS"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="So many spectacular projects have been done throughout all these amazing years. Wanna check them out?"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Don't hesitate to get in touch with me if you're looking for the right person for your projects"
            link="/contact"
            btnText="Send me a message"
        />
    ),
}


const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null
}

export default HomeInfo