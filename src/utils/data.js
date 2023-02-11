import { MdComputer } from "react-icons/md";
import { SiUdemy } from "react-icons/si";
import { GiGraduateCap } from "react-icons/gi";

export const projectExperience = [
  {
    name: "Full Stack Development with MERN",
    completed: "Professional Certificate in coding",
    icon: MdComputer,
    bg: "#286F6C",
  },
  {
    name: "Web Developer Bootcamp 2022",
    completed: " Web Development Certificate",
    icon: SiUdemy,
    bg: "#EEC048",
  },
  {
    name: "Renmin University",
    completed: "Bachelor of Economics and Management",
    icon: GiGraduateCap,
    bg: "#F26440",
  },
];

export const AboutMe = [
  " I am a Software Developer in Chicago and specializing in Full-Stack Development, Web Development, and Front-end Development with JavaScript, CSS, HTML, NodeJS, ReactJS, Express, and MongoDB.",
  "As an enthusiast for progress my goal is to create innovative applications that could make a positive impact in society and solve real world problems.",
];

export const workExp = [
  {
    stack: "Front-end",
    tools:
      "ReactJS, JavaScript, Next.js, TypeScript,HTML, Bootstrap, CSS, SASS, DOM Manipulation,Version Control/Git, GraphQL, JSON",
    skill: "Problem Solving",
    detail:
      "I like a friend who has shared a word Calculate Risk with me, I think proactively understanding the root of a problem and working with others to consider a wide range of solutions before deciding how to move forward is very important.",
  },
  {
    stack: "Back-end",
    tools:
      "Express, NodeJS, MongoDB, AWS, Firebase, Docker, Postman, GitHub, CI/CD, RESTful APIs,Heroku,  ",
    skill: "Team Work & Responsible",
    detail:
      "Working as part of a team,  I believe the better work with others, the more successful the team will be in achieving its goals. Teamwork makes Dream work.",
  },
  {
    skill: "Communication & Collaboration",
    detail:
      "Good communication is the window to building connections with people and working collaboratively to give others better solutions and support.",
  },
];

/*export const comments = [
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
];*/

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
