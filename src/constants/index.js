import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  java,
  reactjs,
  spring,
  tailwind,
  nodejs,
  mongodb,
  netflix,
  google,
  avito,
  git,
  sql,
  docker,
  aws,
  youcode,
  hbs,
  capgemini,
  evold,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineering",
    icon: web,
  },
  {
    title: "Cyber Security Engineering",
    icon: mobile,
  },
  {
    title: "IT Blogger",
    icon: backend,
  },
  {
    title: "IT Instructor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Full-Stack Java/Angular",
    company_name: "youcode",
    icon: youcode,
    iconBg: "#383E56",
    date: "Nov 2020 - Apr 2022",
    points: [
      "• Design application mockups",
      "Build dynamic user interfaces for desktop",
      "Build data access components",
      "Build the front-end part of a web user interface",
      "Build the back-end part of a web user interface",
      "Design a database",
      "Create and set up a database",
      "Build components in database language",
      "Use collaboration within project management and the organization of the development environment",
      "Design an application",
      "Build business components",
      "Build a multi-tier architecture application",
      " Build a mobile application",
      "Write test cases for an application",
      " Deploy an application",
    ],
  },
  {
    title: "Backend Developer Node.js",
    company_name: "HBS",
    icon: hbs,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Nov 2021",
    points: [
      "The first internship of an engineering student is a stage of change in the latter's life. in this internship, i worked on a business project called H-shop using most used javascript technologies both in backend and frontend, but my tasks were more concentrated in the backend part using node. js based on typescript and connecting to sql database using sequelize technology",
    ],
  },
  {
    title: "Full Stack React/Node",
    company_name: "Evold",
    icon: evold,
    iconBg: "#383E56",
    date: "Oct 2021 - Dec 2021",
    points: [
      "in this opportunity i worked on a platform called schoonect with a team of engineers using latest technologies in javascript such as React and Node.js based on typescript and connecting to no-sql mongodb database",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#E6DEDD",
    date: "April 2022 - Present",
    points: [
      "I've had the opportunity to work on a variety of projects during my time here. I have a strong background in both Java and JavaScript, and I've been fortunate to work alongside senior engineers on some very complex codebases. Additionally, I have experience with DevOps engineering, which has given me a well-rounded perspective on the software development process. I'm constantly looking for ways to improve my skills and stay up-to-date on the latest trends and technologies in the field. I take pride in delivering high-quality work and contributing to the success of any team or project I'm a part of.",
    ],
  },
];

const CloneProjects = [
  {
    name: "Netflix Clone",
    description: "React based Netflix Clone",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "acios",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/",
  },
  {
    name: "Avito Clone",
    description: "React Based Avito Clone",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: avito,
    source_code_link: "https://github.com/",
  },
  {
    name: "Google Clone",
    description: "React Based Google Clone",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: google,
    source_code_link: "https://github.com/",
  },
];
const ReactNextNodeProjects = [
  {
    name: "Ai Image generator",
    description: "React Node Based Ai Image generator",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "openAi",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/",
  },
  {
    name: "Personal Google Maps",
    description: "Next Based Google Maps Clone",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "google maps api",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Social Media App",
    description: "Mern based Social Media application",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];
const ReactJavaProjects = [
  {
    name: "E-commerce platform",
    description: "React / Java based e-com platform",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "spring boot",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/",
  },
  {
    name: "Spring boot Microservice",
    description: "Java Spring boot Microservice Application",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "spring boot",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Banking System",
    description: "React / Sping boot Based Banking System",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "spring boot",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  CloneProjects,
  ReactNextNodeProjects,
  ReactJavaProjects,
};
