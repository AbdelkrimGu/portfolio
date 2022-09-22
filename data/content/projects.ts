import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Finding Lost People and Pets",
    desc: "A platform to help find lost people or pets , based on AI models.",
    img: "/static/projects/findit.jpg",
    github: "https://github.com/AbdelkrimGu/Finding-Lost-People-and-Pets",
    tags: ["Angular", "SpringBoot", "Nodejs", "Django", "SocketIO" , "Mysql" , "MicroServices"],
  },
  {
    id: 1,
    title: "Stella Tech Ecommerce WebStore",
    desc: "An Ecommerce website for Laptops, Phones, Tablets , etc...",
    img: "/static/projects/stella.jpg",
    github: "https://github.com/AbdelkrimGu/Stella-Tech-Ecommerce-WebStore",
    tags: ["HTML", "CSS", "Javascript", "Django", "SqlLite"],
  },
  {
    id: 2,
    title: "Hotel Website Reservation",
    desc: "Beautiful Hotel Presentation Website enhanced with a reservation system.",
    img: "/static/projects/hotel.png",
    github: "https://github.com/AbdelkrimGu/Hotel-Website-Reservation",
    tags: ["HTML", "CSS", "Javascript" , "Nodejs"],
  },
  {
    id: 3,
    title: "BitcoinTemp",
    desc: "A fun way to check the price of bitcoin! Cloudy days, sunny days, and Bitcoin Storms!",
    img: "/static/projects/bitcointemp.png",
    link: "https://bitcointemp.com",
    tags: ["React", "NextJS", "SCSS", "API"],
  },
  {
    id: 4,
    title: "Create HTML Boilerplate",
    desc: "Generate a vanilla HTML boilerplate in a flash!",
    img: "/static/projects/create-html-boilerplate.png",
    github: "https://github.com/BraydenTW/create-html-boilerplate",
    tags: ["Node", "Javascript", "NPM", "HTML"],
  },
  {
    id: 5,
    title: "8 Ball in your CLI",
    desc: "An 8 ball simulation in your CLI built with Rust!",
    img: "/static/projects/8ball-rust.png",
    github: "https://github.com/BraydenTW/8ball-rust",
    tags: ["Rust", "CLI", "Game"],
  },
  {
    id: 6,
    title: "DontLeaveMe 😭",
    desc: "Beg for users to stay on your website.",
    img: "/static/projects/dontleaveme.png",
    link: "https://github.com/BraydenTW/dontleaveme/",
    tags: ["Javascript", "NPM"],
  },
  {
    id: 7,
    title: "Madlibs",
    desc: "A simple version of Madlibs built for the web!",
    img: "/static/projects/madlibs.png",
    link: "https://fillemin.netlify.app/",
    github: "https://github.com/braydentw/madlibs",
    tags: ["HTML", "CSS", "Javascript"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects