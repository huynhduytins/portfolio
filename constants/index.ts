import bubbleGame from "@/public/projects/bubble-game.png";
import owwiMoney from "@/public/projects/owwi-money.png";
import stackOverflow from "@/public/projects/stack-overflow.png";
import swapCoin from "@/public/projects/swap-coin.png";
import travelNest from "@/public/projects/travel-nest.png";

export const LINKS = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "projects", path: "/projects" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

export const SOCIALS = [
  { link: "https://www.linkedin.com/in/hduytins/", icon: "FaLinkedin" },
  { link: "https://github.com/huynhduytins", icon: "FaGithub" },
  { link: "https://www.facebook.com/dduytin/", icon: "FaFacebook" },
];

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Bubble Game with small viewport modal",
    image: bubbleGame,
    description:
      "A simple bubble game where players can click on bubbles to hide them. Let play it inside a dialog which can turn into drawer on small viewport.",
    technologies: ["React", "React Aria", "Framer Motion"],
  },
  {
    title: "Owwi Travel",
    image: travelNest,
    description:
      "A travel booking platform where users can search for homestay and holtel. Users can also create accounts, save bookings, and leave reviews.",
    technologies: ["NextJS", "Prisma", "MongoDB", "TailwindCSS", "OpenAI"],
  },
  {
    title: "Owwi Money",
    image: owwiMoney,
    description:
      "A personal finance app that helps users track their spending, set budgets, and view reports. Users can also create accounts and save transactions.",
    technologies: ["NextJS", "NodeJS", "MongoDB", "TailwindCSS"],
  },
  {
    title: "Dev Overflow",
    image: stackOverflow,
    description:
      "A question and answer platform for developers. Users can ask questions, provide answers, and upvote helpful responses.",
    technologies: ["NextJS", "MongoDB", "TailwindCSS"],
  },
  {
    title: "Swap Coin",
    image: swapCoin,
    description: "A basic coin swap form.",
    technologies: ["React", "TailwindCSS"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

export const ROTATION_RANGE = 32.5;
export const HALF_ROTATION_RANGE = 32.5 / 2;
