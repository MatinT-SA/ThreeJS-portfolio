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
    snake
} from "../assets/icons";

import {sqlserver} from '../assets/icons';

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
        title: "Freelance Web Developer",
        date: "October 2017 - until now",
        points: [
            "Developing cool websites using different technologies such as ASP.NET MVC and Core, ReactJS, MERN Stack, JavaScript and so on...",
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