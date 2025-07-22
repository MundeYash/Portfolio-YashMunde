import {
  mobile,
  backend,
  cbse,
  creator,
  dtu,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  amantya,
  nielit,
  codingblocks,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React-Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer – Frontend",
    company_name: "Amantya Technologies Pvt. Ltd.",
    icon: amantya,
    iconBg: "#E0E7FF",
    date: "Nov 2024 – Present",
    points: [
      "Developed and deployed a real-time DXF Export Module using React.js, TypeScript, and VertiGIS SDK, improving data export efficiency by 30%.",
      "Built dynamic panels for export configuration and log tracking with filters, pagination, and real-time API integration.",
      "Implemented multilingual support and optimized frontend performance, reducing load time by 35%.",
      "Worked in Agile teams using GitHub and Azure Boards for version control and task management.",
    ],
  },

  {
    title: "Web Developer Intern",
    company_name: "NIELIT (Govt. of India)",
    icon: nielit,
    iconBg: "#FEF9C3",
    date: "Mar 2024 – Aug 2024",
    points: [
      "Built a full-stack Corporate Learning Portal using the MERN stack, enabling access to training materials for 5000+ users.",
      "Automated certificate generation and performance analytics using Chart.js.",
      "Focused on clean, reusable components and REST API design for long-term scalability.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Coding Blocks Pvt. Ltd.",
    icon: codingblocks,
    iconBg: "#FFE4E6",
    date: "Jun 2023 – Jul 2023",
    points: [
      "Enhanced the HackerBlocks platform dashboard using React.js and Shadcn/UI to improve UX and responsiveness.",
      "Implemented DSA questions with backend evaluation logic using Node.js and managed leaderboard with MongoDB.",
      "Collaborated with mentors in a sprint-based dev workflow to ship features for live users.",
    ],
  },
];
const education = [
  {
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "Delhi Technological University (DTU)",
    icon: dtu,
    iconBg: "#D1FAE5",
    date: "August 2020 – July 2024",
    percentage: "84.60%",
    points: [
      "Maintained a strong GPA of 8.46/10.",
      "Completed final year project on Hate Speech Detection using deep learning models like BERT, RoBERTa, BiLSTM.",
      "Ranked in top 1% in JEE Advanced 2020.",
    ],
  },
  {
    degree: "Class XII – Senior Secondary Education (CBSE)",
    institution: "Geeta Bal Bharti Sr. Sec. School, Delhi",
    icon: cbse,
    iconBg: "#E0F2FE",
    date: "April 2019 – March 2020",
    percentage: "92%",
    points: [
      "Focused on Physics, Chemistry, and Mathematics (PCM).",
      "Consistently performed in the top percentile of the class.",
      "Highest score in Mathematics with 96%.",
      "Above 95% each in Physics , Chemistry & Mathematics",
    ],
  },
  {
    degree: "Class X – Secondary Education (CBSE)",
    institution: "Geeta Bal Bharti Sr. Sec. School, Delhi",
    icon: cbse,
    iconBg: "#F0F9FF",
    date: "April 2017 – March 2018",
    percentage: "91.4%",
    points: [
      "Secured 91.4% overall in Class X Board Examinations.",
      "Achieved 95% in Mathematics and Science.",
      "Actively participated in extracurricular sports and competitions.",
    ],
  },
];

const projects = [
  {
    name: "Job Board Portal",
    description:
      "A job search web application inspired by LinkedIn Jobs, allowing users to browse job listings, view roles based on skillset and location, and filter by company or job type. Features responsive UI and REST API integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit, // Replace this with your actual image import or path
    source_code_link: "https://github.com/MundeYash",
  },
  {
    name: "Employee Resource Portal",
    description:
      "A MERN stack-based internal portal to manage employee data, assign certificate numbers, and organize batch training details with secure JWT-based authentication for admins and operators.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "jwt",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent, // Replace this with your actual image import or path
    source_code_link: "https://github.com/MundeYash",
  },
  {
    name: "Fitness Web Application",
    description:
      "A full-stack fitness platform that allows users to search and explore exercises using RapidAPI, track workout routines, and watch YouTube demo videos. Built with React.js and integrated with Google APIs for video content.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "googleapi",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/MundeYash",
  },
];

export { services, technologies, education, experiences, projects };
