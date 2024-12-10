import bubbleGame from "@/public/projects/bubble-game.png";
import owwiMoney from "@/public/projects/owwi-money.png";
import stackOverflow from "@/public/projects/stack-overflow.png";
import swapCoin from "@/public/projects/swap-coin.png";
import travelNest from "@/public/projects/travel-nest.png";

export const LINKS = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "projects", path: "/projects" },
  { name: "contact", path: "/contact" },
];

export const SOCIALS = [
  { link: "https://www.linkedin.com/in/hduytins/", icon: "FaLinkedin" },
  { link: "https://github.com/huynhduytins", icon: "FaGithub" },
  { link: "https://www.facebook.com/dduytin/", icon: "FaFacebook" },
];

export const EXPERIENCES = [
  {
    year: "06/2024 - Present",
    role: "Full-stack Developer",
    company: "bTaskee Co., Ltd",
    description:
      "Developed and maintained web applications using TypeScript, NextJS, ReactJS and NodeJS. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines",
    technologies: [
      "HTML",
      "CSS",
      "TypeScript",
      "ReactJS",
      "Redux",
      "NextJS",
      "NodeJS",
      "MongoDB",
      "Jest",
      "Cypress",
      "Shadcn",
      "Tailwind CSS",
    ],
  },
  {
    year: "12/2022 - 06/2023",
    role: "Frontend Developer",
    company: "Shinhan DS",
    description:
      "Developed and maintained group's internal projects. Worked directly with Korean teams to develop new product's features",
    technologies: [
      "HTML",
      "CSS",
      "Typescript",
      "ReactJS",
      "React Query",
      "Redux",
      "NextJS",
      "Jest",
      "MUI",
      "Tailwind CSS",
      "Proframe",
      "Websquare",
      "Oracle SQL",
    ],
  },
  {
    year: "02/2022 - 08/2022",
    role: "Firmware Engineer Intern",
    company: "Active Link",
    description: "Developed and maintained firmware for IoT devices",
    technologies: ["C", "Python", "Linux"],
  },
];

export const PROJECTS = [
  {
    title: "Bubble Game with small viewport modal",
    image: bubbleGame,
    description:
      "A simple bubble game where players can click on bubbles to hide them. Let play it inside a dialog which can turn into drawer on small viewport.",
    technologies: ["React", "React Aria", "Framer Motion"],
    link: "https://game-with-small-viewport-modal.vercel.app/",
  },
  {
    title: "Owwi Travel",
    image: travelNest,
    description:
      "A travel booking platform where users can search for homestay and holtel. Users can also create accounts, save bookings, and leave reviews.",
    technologies: ["NextJS", "Prisma", "MongoDB", "TailwindCSS", "OpenAI"],
    link: "https://travel.owwi.io.vn/",
  },
  {
    title: "Owwi Money",
    image: owwiMoney,
    description:
      "A personal finance app that helps users track their spending, set budgets, and view reports. Users can also create accounts and save transactions.",
    technologies: ["NextJS", "NodeJS", "MongoDB", "TailwindCSS"],
    link: "https://owwimoney.vercel.app/",
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
    link: "https://fancy-swap-coin-form.vercel.app/",
  },
];

export const ROTATION_RANGE = 32.5;
export const HALF_ROTATION_RANGE = 32.5 / 2;
