import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Codivio: A Video Interview Platform',
    description: 'a full-stack video interview platform with live coding IDE, enabling real-time collaboration, problem-solving, and evaluation between interviewers and candidates.',
    image: 'public/Codivio.png',
    techStack: ['Next.js', 'React.js' , 'Typescript', 'Stream', 'Convex', 'Tailwind'],
    demoLink: 'https://codivio.vercel.app',
    githubLink: 'https://github.com/chiraagsharma24/Codivio'
  },
  {
    id: 2,
    title: 'NeuroWealth: AI Powered Finance Platform',
    description: 'AI-powered finance platform that lets you manage money, track budgets, analyze spending, AI receipt scanning and get smart insights with all from one sleek, intelligent dashboard.',
    image: 'public/NeuroWealth.png',
    techStack: ['Next.js', 'React.js', 'Javascript', 'Prisma', 'Inngest','Arcjet','Gemini-API'],
    demoLink: 'https://neurowealth-green.vercel.app',
    githubLink: 'https://github.com/chiraagsharma24/NeuroWealth'
  },
  {
    id: 3,
    title: 'Sprintly: Full Stack Project Management Platform',
    description: 'Helps startups, freelancers, and teams break down complex projects into sprints. Manage tasks and track progress easily with a clean, visual Kanban interface built for clarity and speed.',
    image: 'public/Sprintly.png',
    techStack: ['Next.js', 'React.js', 'Javascript', 'Prisma','Tailwind'],
    demoLink: 'https://sprintly-opal.vercel.app',
    githubLink: 'https://github.com/chiraagsharma24/Sprintly'
  },
  {
    id: 4,
    title: 'UpNext: AI-powered Career Coach',
    description: 'A platform which provides everything you need to build a great tech career from expert guidance to job tracking and resume optimization.',
    image: 'public/UpNext.png',
    techStack: ['Next.js', 'React.js', 'Inngest','Gemini-API'],
    demoLink: 'https://up-next-vert.vercel.app',
    githubLink: 'https://github.com/chiraagsharma24/Up-Next'
  },
  {
    id: 5,
    title: 'Stormie: Smart Weather Forecast App',
    description: 'A platform that shows real-time temperature, humidity, pressure, and 5-day forecasts from anywhere in the world, right on your screen.',
    image: 'public/Stormie.png',
    techStack: ['React', 'OpenWeather API', 'Recharts'],
    demoLink: 'https://stormie.vercel.app',
    githubLink: 'https://github.com/chiraagsharma24/Stormie'
  },
  {
    id: 6,
    title: 'ReadYourWay: Article Summarizer',
    description: 'Chrome extension that summarizes any article in your preferred style: brief, detailed, or bullet points, making reading faster and smarter.',
    image: 'ReadYourWay.png',
    techStack: ['Javascript', 'CSS', 'Html'],
    demoLink: './#projects',
    githubLink: 'https://github.com/chiraagsharma24/ReadYourWay'
  }
];