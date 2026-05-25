import React from 'react';
import HeroImage from '../assets/image-portfolio-removebg-preview.png';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaGlobe,
  FaMapMarkerAlt,
  FaCode,
  FaLightbulb,
  FaLanguage,
  FaClock,
} from 'react-icons/fa';
import {
  LuUser,
  LuBriefcase,
  LuGraduationCap,
  LuExternalLink,
  LuBook,
  LuHeart,
  LuCode,
} from 'react-icons/lu';

const Resume = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 p-4 md:p-12 font-sans selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT COLUMN */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="text-center lg:text-left">
            <div className="relative w-40 h-40 mx-auto lg:mx-0 mb-6 p-1 rounded-full bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              <div className="w-full h-full rounded-full bg-[#0f172a] overflow-hidden border-2 border-[#020617]">
                <img
                  src={HeroImage}
                  alt="Rifad"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tight leading-tight">
              RIFAD <br /> HOSSAIN RABBI
            </h1>
            <p className="text-blue-500 font-bold mt-2 tracking-[0.2em] text-xs uppercase">
              Frontend Developer
            </p>
            <p className="text-slate-500 text-xs mt-1 font-semibold tracking-wider">
              | REACT.JS | NEXT.JS
            </p>
          </div>

          <section className="bg-slate-900/20 p-5 rounded-2xl border border-slate-800">
            <h3 className="text-blue-500 flex items-center gap-2 font-bold mb-4 uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
              <LuUser className="text-lg" /> Contact
            </h3>
            <ul className="space-y-4 text-[13px]">
              <li className="flex items-center gap-3 hover:text-white transition-all cursor-pointer">
                <FaEnvelope className="text-blue-500" /> hossainmrifad@gmail.com
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-all cursor-pointer">
                <FaGithub className="text-blue-500" />{' '}
                github.com/rifadhossainrabbi
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-all cursor-pointer">
                <FaGlobe className="text-blue-500" />{' '}
                my-portfolio-react.vercel.app
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-all cursor-pointer">
                <FaLinkedinIn className="text-blue-500" />{' '}
                linkedin.com/in/rifad-hossain-rabbi
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-500" /> Bangladesh
              </li>
            </ul>
          </section>

          <section className="bg-slate-900/20 p-5 rounded-2xl border border-slate-800">
            <h3 className="text-blue-500 flex items-center gap-2 font-bold mb-5 uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
              <FaCode className="text-lg" /> Technical Skills
            </h3>
            <div className="space-y-5">
              {[
                {
                  title: 'Frontend',
                  skills:
                    'HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, DaisyUI, shadcn/ui',
                },
                {
                  title: 'Backend & Auth',
                  skills:
                    'Node.js, Express.js, MongoDB, Better Auth, Firebase, REST API',
                },
                {
                  title: 'Tools',
                  skills: 'Git, GitHub, VS Code, Vercel, Netlify, Postman',
                },
                {
                  title: 'Core Concepts',
                  skills:
                    'Responsive UI, Dynamic Routing, Authentication, API Integration, Clean UI/UX',
                },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-blue-400 text-[11px] font-bold mb-1 uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>{' '}
                    {item.title}
                  </p>
                  <p className="text-[12px] text-slate-400 leading-relaxed">
                    {item.skills}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </aside>

        {/* RIGHT COLUMN */}
        <main className="lg:col-span-8 space-y-10">
          <motion.section initial="hidden" animate="visible" variants={fadeIn}>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-600 p-2 rounded-lg text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                <LuUser size={20} />
              </span>
              <h3 className="text-white font-bold uppercase tracking-widest text-sm">
                Professional Summary
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-blue-600/30 pl-4 py-1">
              Motivated Frontend Developer with growing full-stack skills,
              specializing in React, Next.js, Tailwind CSS, and MongoDB.
              Passionate about building clean, responsive, and user-focused
              applications. Experienced in delivering real-world projects such
              as book borrowing systems, pet adoption platforms, and modern
              portfolios.
            </p>
          </motion.section>

          {/* Projects with Live Links */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-blue-600 p-2 rounded-lg text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                <LuBriefcase size={20} />
              </span>
              <h3 className="text-white font-bold uppercase tracking-widest text-sm">
                Selected Projects
              </h3>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Book Borrowing Platform',
                  icon: <LuBook size={24} />,
                  color: 'bg-blue-600',
                  link: 'https://book-borrowing-platform-next-js-por.vercel.app/',
                  stack: 'React.js, Node.js, Express.js, MongoDB, Tailwind CSS',
                  points: [
                    'Developed a full-stack system for browsing, borrowing, and managing books.',
                    'Added borrowing limit feature for fair usage and availability.',
                    'Created a user dashboard to track borrowed items and return dates.',
                  ],
                },
                {
                  title: 'Pet Adoption Platform',
                  icon: <LuHeart size={24} />,
                  color: 'bg-purple-600',
                  link: 'https://pet-adoption-next-project.vercel.app/',
                  stack:
                    'React.js, Tailwind CSS, MongoDB, Firebase Authentication',
                  points: [
                    'Built a responsive and user-friendly platform for pet adoption and donations.',
                    'Implemented category-based filtering and detailed pet profile pages.',
                    'Integrated Firebase for secure authentication and request tracking.',
                  ],
                },
                {
                  title: 'Personal Portfolio Website',
                  icon: <LuCode size={24} />,
                  color: 'bg-indigo-600',
                  link: 'https://my-portfolio-website-react-beryl.vercel.app/',
                  stack: 'React.js, Tailwind CSS, Framer Motion, shadcn/ui',
                  points: [
                    'Designed and developed a modern portfolio showcasing skills and projects.',
                    'Added smooth animations and transitions using Framer Motion.',
                    'Fully responsive across mobile, tablet, and desktop.',
                  ],
                },
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="bg-[#0f172a]/50 border border-slate-800 p-5 rounded-2xl flex gap-5 hover:border-blue-500/30 transition-all group"
                >
                  <div
                    className={`${project.color} p-3 rounded-xl h-fit text-white shadow-lg`}
                  >
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-white font-bold text-base">
                        {project.title}
                      </h4>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 flex items-center gap-1 text-[10px] font-bold hover:underline"
                      >
                        Live Link <LuExternalLink />
                      </a>
                    </div>
                    <p className="text-blue-400 text-[11px] mb-3 font-medium">
                      Stack: {project.stack}
                    </p>
                    <ul className="text-xs space-y-2 text-slate-400">
                      {project.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>{' '}
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience & Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-blue-600 p-2 rounded-lg text-white">
                  <LuBriefcase size={20} />
                </span>
                <h3 className="text-white font-bold uppercase tracking-widest text-sm">
                  Experience
                </h3>
              </div>
              <div className="border-l border-slate-800 ml-4 pl-6 space-y-8">
                <div className="relative">
                  <span className="absolute -left-[30px] top-1 w-3 h-3 bg-blue-600 rounded-full shadow-[0_0_10px_#2563eb]"></span>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-white font-bold text-sm">
                      Frontend Developer
                    </h4>
                    <span className="text-[9px] bg-blue-900/30 text-blue-400 font-bold px-2 py-0.5 rounded">
                      2025 - Present
                    </span>
                  </div>
                  <p className="text-[11px] text-blue-500/80 mb-2 font-semibold">
                    Personal & Academic Projects
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-blue-600 p-2 rounded-lg text-white">
                  <LuGraduationCap size={20} />
                </span>
                <h3 className="text-white font-bold uppercase tracking-widest text-sm">
                  Education
                </h3>
              </div>
              <div className="border-l border-slate-800 ml-4 pl-6 space-y-8">
                <div className="relative">
                  <span className="absolute -left-[30px] top-1 w-3 h-3 bg-blue-600 rounded-full shadow-[0_0_10px_#2563eb]"></span>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-white font-bold text-sm leading-tight">
                      B.Sc. in Mathematics
                    </h4>
                    <span className="text-[9px] bg-blue-900/30 text-blue-400 font-bold px-2 py-0.5 rounded">
                      2024 - Present
                    </span>
                  </div>
                  <p className="text-[11px] text-blue-500/80 mb-1 font-semibold">
                    National University, Bangladesh
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Resume;
