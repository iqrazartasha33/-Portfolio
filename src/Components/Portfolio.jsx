import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, MapPin, Star } from "lucide-react";
import React from "react";
const accent = "from-emerald-500 via-emerald-400 to-emerald-500"; // neon emerald accents
const glass = "backdrop-blur-md bg-white/5 border border-white/10";

const Section = ({ id, title, children }) => (
  <section id={id} className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 py-20">
    <motion.h2
      className="mb-8 text-3xl sm:text-4xl font-bold tracking-tight text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
    >
      <span className={`inline-block bg-clip-text text-transparent bg-gradient-to-r ${accent}`}>{title}</span>
    </motion.h2>
    {children}
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-200 text-xs">
    <Star className="size-3" /> {children}
  </span>
);
const ProjectCard = ({ title, desc, tags = [], live, code, img }) => (
  <motion.div
    className={`group ${glass} rounded-2xl p-4 hover:border-emerald-400/40 transition-colors w-full h-full`}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {img && (
      <div className="mb-3 flex justify-center">
        <img
          src={img}
          alt={title}
          className="w-75 h-38 object-cover rounded-lg shadow-md"
        />
      </div>
    )}

    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-white/70 text-sm leading-relaxed">{desc}</p>

    <div className="mt-3 flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className="text-xs rounded-full bg-white/5 border border-white/10 px-2 py-1 text-white/70"
        >
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#0B0B0E] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className={`absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-20 bg-gradient-to-tr ${accent}`} />
        <div className={`absolute top-1/3 -right-24 h-96 w-96 rounded-full blur-3xl opacity-10 bg-gradient-to-tr ${accent}`} />
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full blur-3xl opacity-10 bg-gradient-to-tr ${accent}`} />
      </div>

      <header className="sticky top-0 z-40">
        <div className={`mx-auto max-w-6xl px-5 sm:px-8 py-4 ${glass} rounded-b-2xl`}> 
          <div className="flex items-center justify-between">
            <button onClick={() => scrollTo("home")} className="group">
              <div className="text-lg font-bold tracking-tight">
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${accent}`}>Iqra</span>
                <span className="text-white/60"> · Portfolio</span>
              </div>
              <div className="h-0.5 w-0 group-hover:w-full transition-all bg-emerald-400/60" />
            </button>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-white/70 hover:text-white transition">
                  {n.label}
                </button>
              ))}
       <a href="mailto:iqrazartasha33@gmail.com" 
 className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-100 hover:bg-emerald-400/20 transition inline-flex items-center gap-2">
                <Mail className="size-4" /> Hire Me
              </a>
            </nav>

            <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
              <div className="grid gap-1.5">
                <span className="h-0.5 w-6 bg-white/80" />
                <span className="h-0.5 w-6 bg-white/80" />
                <span className="h-0.5 w-6 bg-white/80" />
              </div>
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-2">
              {navItems.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="rounded-lg px-3 py-2 text-left hover:bg-white/5">
                  {n.label}
                </button>
              ))}
              <a href="mailto:iqra@example.com" className="rounded-lg px-3 py-2 hover:bg-white/5 inline-flex items-center gap-2">
                <Mail className="size-4" /> Hire Me
              </a>
            </div>
          )}
        </div>
      </header>

      <section id="home" className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-20 pb-24">
        <div className={`mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 ${glass} rounded-3xl p-8 sm:p-12`}> 
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">MERN Stack Web Developer</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Hi, I’m <span className={`bg-clip-text text-transparent bg-gradient-to-r ${accent}`}>Iqra</span>
            </h1>
            <p className="mt-5 text-white/70 text-lg leading-relaxed">
              I build modern, responsive and animated web experiences. Graduate of Karachi University (BSc), and MERN Stack course alum from Saylani.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge>Karachi University · BSc</Badge>
              <Badge>Saylani · MERN Stack</Badge>
              <Badge>Freelance · $20/hr</Badge>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo("projects"); }} className="rounded-2xl px-5 py-3 font-medium border border-emerald-400/40 bg-emerald-400/10 text-emerald-100 hover:bg-emerald-400/20 transition">
                View Projects
              </a>
              <a href="iqrazartasha33@gmail.com" className="rounded-2xl px-5 py-3 font-medium border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition inline-flex items-center gap-2">
                <Mail className="size-4" /> Contact Me
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/70">
              <a href="https://github.com/iqrazartasha33" target="_blank" rel="noreferrer" className="hover:text-white"><Github /></a>
              <a href="https://www.linkedin.com/in/iqra-zartasha-138935244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin /></a>
              <span className="inline-flex items-center gap-2"><MapPin className="size-4"/> Karachi, PK</span>
            </div>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="relative h-80 sm:h-96">
              <div className={`absolute inset-0 rounded-3xl ${glass} overflow-hidden`}> 
                <div className={`absolute -inset-24 opacity-30 blur-2xl bg-gradient-to-tr ${accent} animate-pulse`} />
                <div className="relative h-full w-full grid place-items-center">
                  <div className="text-center">
                    <p className="text-sm text-white/60">Specialized In</p>
                    <h3 className="mt-2 text-3xl font-bold">React · Node.js · Firebase</h3>
                    <p className="mt-2 text-white/70">Animations with GSAP & Framer Motion</p>
                    <div className="mt-5 flex justify-center gap-3">
                      <span className="rounded-lg border border-white/10 px-3 py-1 text-xs text-white/70">Tailwind CSS</span>
                      <span className="rounded-lg border border-white/10 px-3 py-1 text-xs text-white/70">MongoDB</span>
                      <span className="rounded-lg border border-white/10 px-3 py-1 text-xs text-white/70">Express</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-tr from-emerald-400/40 via-transparent to-transparent -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      <Section id="about" title="About Iqra">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${glass} rounded-2xl p-6 md:p-8`}>
          <div className="md:col-span-2">
            <p className="text-white/80 leading-relaxed">
              I’m Iqra — a passionate MERN Stack Web Developer focused on crafting delightful, fast, and accessible web apps. I completed my <span className="text-white">BSc (Bachelor of Science)</span> from <span className="text-white">Karachi University</span> and earned a professional MERN certification from <span className="text-white">Saylani</span>.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              I love building animated UIs, dashboards, and full‑stack apps with clean architecture. I follow camelCase naming and modern best practices.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Badge>Available for freelance</Badge>
            <Badge>Responsive design</Badge>
            <Badge>Dark / Light themes</Badge>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {["HTML5","CSS3","JavaScript","React","Vite","Tailwind","Node.js","Express","MongoDB","Firebase","GSAP","Framer Motion"].map((s) => (
            <motion.div key={s} className={`${glass} rounded-xl p-3 text-center text-white/80`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              {s}
            </motion.div>
          ))}
        </div>
      </Section>

<Section id="projects" title="Featured Projects">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <ProjectCard
      title="Super Grocer"
      desc="An advanced Next.js & Tailwind CSS project with GSAP animations. Includes smooth product interactions, modern UI, and a fully responsive design."
      tags={["Next.JS","Tailwind CSS", "GSAP"]}
      live="https://next-js-website-v1fr.vercel.app/"
      img="/Super.png"
    />
    
    <ProjectCard
      title="Portfolio Builder"
      desc="A full-stack web app with signup/login authentication and a dynamic portfolio builder. Users can create and customize their portfolio using Node.js, Express, React, MongoDB, and Tailwind CSS."
      tags={["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"]}
      live="https://final-hackathon-smit-in-frontend.vercel.app/"
      img="/Builder.png"
    />

    <ProjectCard
      title="Calculator"
      desc="A responsive calculator built with React and Tailwind CSS. Supports basic arithmetic operations with a clean and modern UI."
      tags={["React", "Tailwind CSS"]}
      live="https://calculator-built-with-react-js.vercel.app/"
  img="/Calculator.png" 
    />

    <ProjectCard
      title="Crispy Craze!"
      desc="A React-based food menu app with card layouts and smooth navigation using React Router. Fully responsive with a modern UI."
      tags={["React", "Tailwind CSS", "Routing"]}
      live="https://react-hackathon-b25924.netlify.app/"
      img="/Crispy.png"
    />
  </div>
</Section>


      <Section id="contact" title="Contact">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${glass} rounded-2xl p-6 md:p-8`}>
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold">Let’s build something cool</h3>
            <p className="mt-2 text-white/70">I’m available for freelance and internships. Email me and I’ll get back to you.</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
   <a href="mailto:iqrazartasha33@gmail.com" className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 text-emerald-100 hover:bg-emerald-400/20 transition">
                <Mail className="size-4"/> iqrazartasha33@gmail.com
              </a>
                  <a href="https://github.com/iqrazartasha33" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 text-white/80 hover:text-white hover:border-white/30 transition">
                <Github className="size-4"/> GitHub
              </a>
              <a href="https://www.linkedin.com/in/iqra-zartasha-138935244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 text-white/80 hover:text-white hover:border-white/30 transition">
                <Linkedin className="size-4"/> LinkedIn
              </a>
            </div>
          </div>
          <div className="space-y-2 text-white/70">
            <p>
              <span className="block text-white/90">Location</span>
              Karachi, Pakistan
            </p>
            <p>
              <span className="block text-white/90">Freelance</span>
              Open to projects ($20/hr)
            </p>
          </div>
        </div>
      </Section>

<footer className="py-12">
  <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center text-white/50">
    © {new Date().getFullYear()} Iqra — Designed & Developed with passion using React, Vite & Tailwind CSS.
  </div>
</footer>

    </div>
  );
}
