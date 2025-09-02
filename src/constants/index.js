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
  git,
  AITglobe,
  pw,
  chat,
  gssoc,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  blog,
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
    title: "MERN Stack Developer",
    icon: web,
   
  },
  {
    title: "Java & DSA Specialist",
    icon: backend,
   
  },
  {
    title: "Full-Stack Project Creator",
    icon: mobile,
  },
  {
    title: "Open Source Contributor",
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
    title: "Summer Intern - AI & Innovation",
    company_name: "Asian Institute of Technology, Bangkok",
    icon: AITglobe,
    iconBg: "#383E56",
    date: "June 2024 - July 2024",
    points: [
      "Worked on a mini innovation project integrating AI technologies with real-world applications.",
      "Explored remote sensing, generative AI, and ChatGPT-based solutions for business use cases.",
      "Collaborated with international peers to design prototypes and present results.",
      "Won 1st rank for project presentation at Bangkok campus showcase.",
    ],
  },
  {
  title: "PW Ambassador",
  company_name: "Physics Wallah",
  icon: pw,
  iconBg: "#383E56",
  date: "2024 - Present",
  points: [
    "Selected as part of the PW Top 1000 Coders Club for consistent coding excellence.",
    "Represented the PW community and engaged in peer-to-peer technical learning.",
    "Promoted collaborative coding culture and inspired peers to improve problem-solving skills.",
    "Enhanced leadership and communication by actively participating in community-driven activities.",
  ],
},
  {
  title: "Open Source Contributor (Attempt)",
  company_name: "GirlScript Summer of Code (GSSoC) 2024",
  icon: gssoc,
  iconBg: "#E6DEDD",
  date: "May 2024 - August 2024",
  points: [
    "Explored open-source contribution workflows including forking, branching, and pull requests.",
    "Attempted multiple contributions, learning from rejected PRs and understanding project guidelines.",
    "Gained practical experience in Git, version control, and collaborative coding practices.",
    "Developed resilience and improved problem-solving by learning through setbacks and failures.",
  ],
},

 
];

const testimonials = [
  {
    testimonial:
      "Secured 1st position at AIT Bangkok for a mini innovation project on AI & Remote Sensing.",
  
  },
  {
    testimonial:
      "Ranked 4th in GeeksforGeeks Institute Leaderboard and solved 250+ problems on LeetCode.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Selected as a member of Physics Wallah's exclusive Top 1000 Coders Club.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
{
  name: "BlogSphere 🌐",
  description:
    "A full-stack blogging platform where users can create, edit, and share blogs with authentication and a clean, responsive UI. Built to provide a smooth writing and reading experience.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "mongodb",
      color: "pink-text-gradient",
    },
    {
      name: "tailwind",
      color: "orange-text-gradient",
    },
  ],
  image: blog, // replace with actual imported blog app image
  source_code_link: "https://github.com/Ashish12-tripathi/Blog-App", // update with your repo link
  
},

{
  name: "ChatSphere",
  description:
    "A real-time chat application built with the MERN stack, featuring secure authentication, online/offline indicators, media/file sharing, and smooth auto-scrolling for seamless communication.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "mongodb",
      color: "pink-text-gradient",
    },
    {
      name: "express",
      color: "yellow-text-gradient",
    },
  ],
  image: chat,
  source_code_link: "https://github.com/Ashish12-tripathi/CHATSPHERE", // you can replace with your repo link
   
},


];

export { services, technologies, experiences, testimonials, projects };