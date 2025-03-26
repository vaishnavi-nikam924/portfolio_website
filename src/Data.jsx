import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';
import skillsImg1 from './assets/html.png';
import skillsImg2 from './assets/css.png';
import skillsImg3 from './assets/js.png';
import skillsImg4 from './assets/react-logo.svg';
import skillsImg5 from './assets/tailwind.svg';
import skillsImg6 from './assets/c-.png';
import skillsImg7 from './assets/python.png';
import skillsImg8 from './assets/java.png';
import skillsImg9 from './assets/swift.png';
import skillsImg10 from './assets/nodejs.png';
import skillsImg11 from './assets/mysql.png';
import skillsImg12 from './assets/git.png';
import skillsImg13 from './assets/github.png';
import skillsImg14 from './assets/vslogo.png';
import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';
import projectImg1 from './assets/ios-project.avif';
import projectImg2 from './assets/machine-learning-project.jpg';
export const links = [
    {
        name: 'Home',
        icon: <FaHome classname='nav-icons' />,
        path: './',
    },
    {
        name: 'About',
        icon: <FaUser className='nav-icon' />,
        path: './about',
    },
    {
        name: 'Portfolio',
        icon: <FaFolderOpen className='nav-icon' />,
        path: './portfolio',
    },
    {
        name: 'Contact',
        icon: <FaEnvelopeOpen className='nav-icon' />,
        path: './contact',
    },
];

export const skill = [
    {
        id: 1,
        img: skillsImg6,
        title: 'C++',
        category: 'developer',
    },
    {
        id: 2,
        img: skillsImg7,
        title: 'Python',
        category: 'developer',
    },
    {
        id: 3,
        img: skillsImg8,
        title: 'Java',
        category: 'developer',
    },
    {
        id: 4,
        img: skillsImg9,
        title: 'Swift',
        category: 'developer',
    },
    {
        id: 5,
        img: skillsImg1,
        title: 'HTML',
        category: 'developer',
    },
    {
        id: 6,
        img: skillsImg2,
        title: 'CSS',
        category: 'developer',
    },
    {
        id: 7,
        img: skillsImg3,
        title: 'JavaScript',
        category: 'developer',
    },
    {
        id: 8,
        img: skillsImg4,
        title: 'ReactJS',
        category: 'developer',
    },
    {
        id: 9,
        img: skillsImg5,
        title: 'TailwindCSS',
        category: 'developer',
    },
    {
        id: 10,
        img: skillsImg10,
        title: 'NodeJS',
        category: 'developer',
    },
    {
        id: 11,
        img: skillsImg11,
        title: 'MySQL',
        category: 'developer',
    },
    {
        id: 12,
        img: skillsImg12,
        title: 'Git',
        category: 'developer',
    },
    {
        id: 13,
        img: skillsImg13,
        title: 'Github',
        category: 'developer',
    },
    {
        id: 14,
        img: skillsImg14,
        title: 'VSCode',
        category: 'developer',
    },

]

export const resume = [
    {
        id: 1,
        category: 'experience',
        icon: <RiBriefcase4Fill />,
        year: 'January 2024 - June 2024',
        title: 'Software Engineer Intern <span>Fusion Jewelry</span>',
    },
    {
        id: 2,
        category: 'education',
        icon: <RiGraduationCapFill />,
        year: 'August 2024 - Present',
        title: "Master's in Computer Science <span>Syracuse University</span>",

    },
    {
        id: 3,
        category: 'education',
        icon: <RiGraduationCapFill />,
        year: 'August 2020 - May 2024',
        title: "Bachelor's in Computer Engineering <span>Mumbai University</span>",
    },

]


export const portfolio = [
    {
        id: 1,
        img: projectImg1,
        title: 'Sight - iOS App for Visual Impairment Assistance ',
        description: 'Developed a predictive model for assessing groundwater quality using machine learning.',
        skills: [skillsImg9],
        link: '',
    },
    {
        id: 2,
        img: projectImg2,
        title: 'Framework for Groundwater Quality Prediction',
        description: 'Built a native iOS app in Swift to assist visually impaired users in recognizing faces, identifying objects, and reading text aloud.',
        skills: [skillsImg7],
        link: '',
    },
]
