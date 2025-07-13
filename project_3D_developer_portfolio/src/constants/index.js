import {
  mobile,
  backend,
  creator,
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
    date: "Nov 2023 – Present",
    points: [
      "Developed and deployed a real-time DXF Export Module using React.js, TypeScript, and VertiGIS SDK, improving data export efficiency by 30%.",
      "Built dynamic panels for export configuration and log tracking with filters, pagination, and real-time API integration.",
      "Implemented multilingual support and optimized frontend performance, reducing load time by 35%.",
      "Worked in Agile teams using GitHub and Azure Boards for version control and task management.",
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
  {
    title: "Web Developer Intern",
    company_name: "NIELIT (Govt. of India)",
    icon: nielit,
    iconBg: "#FEF9C3",
    date: "Mar 2023 – Aug 2023",
    points: [
      "Built a full-stack Corporate Learning Portal using the MERN stack, enabling access to training materials for 5000+ users.",
      "Automated certificate generation and performance analytics using Chart.js.",
      "Focused on clean, reusable components and REST API design for long-term scalability.",
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
