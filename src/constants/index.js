import { parsianFarhang, myadegaran, yorkbuilding, matintaherzadeh } from "../assets/images";

import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    mongodb,
    mui,
    nodejs,
    react,
    redux,
    tailwindcss,
    csharp,
    bootstrap,
    dotnetcore,
    instagram,
    guessTheNumber,
    qrcode,
    telenote,
    MatinShop,
    Figma,
    snake,
    pigDiceGame,
    banklistWebApp,
    banklistWebsite
} from "../assets/icons";

import { sqlserver } from '../assets/icons';

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: sqlserver,
        name: "SQL Server",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: csharp,
        name: "CSharp",
        type: "Backend",
    },
    {
        imageUrl: dotnetcore,
        name: "ASP.NET Core",
        type: "Backend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "English Teacher",
        company_name: "Parsian Farhang",
        icon: parsianFarhang,
        iconBg: '#d3dbe8',
        date: "September 2018 - September 2019",
        points: [
            "Teaching English to beginner and intermediate learners with dedication and expertise at Parsian Farhang Language Institution for about a year.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "myadegaran",
        icon: myadegaran,
        iconBg: '#78eb9a',
        date: "November 2022 - April 2024",
        points: [
            "Throughout my tenure in a specialized environment, I held the sole responsibility as the primary WordPress developer for nearly one and a half years. This role demanded adept management and optimization of WordPress platforms to meet organizational objectives. My experience as the main developer honed not only my technical skills but also my ability to adapt and excel in diverse settings.",
        ],
    },
    // {
    //     title: "Full-Stack Developer & SQL Server DBA",
    //     company_name: "myadegaran",
    //     icon: myadegaran,
    //     iconBg: '#78eb9a',
    //     date: "November 2023 - March 2024",
    //     points: [
    //         "Managed SQL Server database infrastructure to uphold data confidentiality and integrity. Developed a feature-rich web application with ASP.NET Core, JavaScript, and Bootstrap 5, enabling efficient CRUD operations and Excel data export via DataTables.net. Integrated secure user registration and login functionalities, limiting access to authorized personnel within the organization's internal network. Implemented an intuitive search and filtering feature, allowing users to quickly locate and analyze desired information within the available data tables.",
    //     ],
    // },
    {
        title: "Content Writer",
        company_name: "yorkbuilding",
        icon: yorkbuilding,
        iconBg: '#e3e6e4',
        date: "January 2023 - February 2023",
        points: [
            "During my brief experience, spanning nearly one month, as a freelance Content Writer for Canadian plumbing and house furniture companies, I tailored compelling content to meet industry standards. This involved creating SEO-friendly copy to enhance brand awareness and foster customer engagement.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "-",
        icon: matintaherzadeh,
        iconBg: '#9e8895',
        date: "October 2017 - until now",
        points: [
            "Continuing my journey as a freelance Web Developer, I specialize in crafting dynamic websites using a diverse range of technologies such as ASP.NET MVC and Core, ReactJS, MERN Stack, JavaScript, C#, Bootstrap, jQuery, ThreeJS, and more. With a passion for innovative design and seamless functionality, I continue to deliver top-notch solutions tailored to clients' needs while maintaining an active presence in the freelance community.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/MatinT-SA',
    },
    {
        name: 'Instagram',
        iconUrl: instagram,
        link: 'https://www.instagram.com/matin_taherzadeh_sa/',
    }
];

export const projects = [
    {
        iconUrl: banklistWebsite,
        theme: 'btn-back-magenta',
        name: 'Banklist Website',
        description: 'This is the website for my Banklist web application. A fully responsive cool UI with phenominal features and animations.',
        link: 'https://github.com/MatinT-SA/banklist-website',
    },
    {
        iconUrl: banklistWebApp,
        theme: 'btn-back-cyan',
        name: 'Banklist Web App',
        description: 'BankList is a fully responsive web app optimized for seamless user experience on all devices and built with JavaScript (more focused on Front-End) for managing and viewing bank transactions with mock data. It features a user-friendly interface with dynamic data handling, and filtering capabilities to showcase almost all the array methods use cases.',
        link: 'https://github.com/MatinT-SA/Banklist',
    },
    {
        iconUrl: pigDiceGame,
        theme: 'btn-back-coral',
        name: 'Pig Dice Game',
        description: 'A fully-responsive famous Pig Game coded in Vanilla besides HTML & CSS which you can play with your friends online.',
        link: 'https://github.com/MatinT-SA/pig-dice-game',
    },
    {
        iconUrl: guessTheNumber,
        theme: 'btn-back-red',
        name: 'Guess The Number',
        description: 'This is a JavaScript project where the user should guess our random number with a cool design, having difficulty to select by the user out of "hard, normal, easy" and also completely responsivess with CSS Media Queries.',
        link: 'https://github.com/MatinT-SA/Guess_The_Number',
    },
    {
        iconUrl: qrcode,
        theme: 'btn-back-green',
        name: 'QRCode Generator',
        description: 'This is a input field which is going to produce you random QR Codes whenever the user click on the "Generate QR Code" button.',
        link: 'https://github.com/MatinT-SA/QRCode-Generator',
    },
    {
        iconUrl: telenote,
        theme: 'btn-back-blue',
        name: 'TeleNote',
        description: "This is a social media app called 'TeleNote' powered by MERN (MongoDB, Express.js, React.js Node.js) which allows users to sign up and create their own account and then do CRUD operations (Create, Read, Update, Delete) on this web application and share their life activities and cool moments with people all around the world. They can also like other people's posts, comment below them in each post's individual page. Also the Search and Pagination features have been implemented in it.",
        link: 'https://github.com/MatinT-SA/TeleNote_MERN_React_APP',
    },
    {
        iconUrl: MatinShop,
        theme: 'btn-back-pink',
        name: 'Matin Online Shopping',
        description: 'An Online Shopping coded in CSharp and ASP.NET MVC and also JS and have used with technologies or frameworks such as Bootstrap, jQuery, JSON, AJAX and also SQL-Server database. A complete CRUD Web Application having admin and user dashboard with multiple capabilities such as sending messages to other users having their username. You can buy or sell your own product here and also we have separate section for auction products',
        link: 'https://github.com/MatinT-SA/Matin-Online_Shopping-MVC',
    },
    {
        iconUrl: Figma,
        theme: 'btn-back-black',
        name: 'Figma Design',
        description: "A cool design with ReactJS for our UI. In this project, I've focused only on the Front-End part.",
        link: 'https://github.com/MatinT-SA/React-Responsive-UI-UX-Figma-Design',
    },
    {
        iconUrl: snake,
        theme: 'btn-back-yellow',
        name: 'Snake Game',
        description: 'This is a simple Snake Game developed with pure JS that the player can eat the food by moving to any of the directions it wants and increase its snake size by one but it still needs to get customized more over time.',
        link: 'https://github.com/MatinT-SA/Snake-Game-Pure-JS',
    }
];