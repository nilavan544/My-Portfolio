import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { HiDownload } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

const DOTS = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  top: Math.random() * 100,
  left: Math.random() * 100,
  duration: Math.random() * 10 + 8,
  delay: Math.random() * 6,
}))

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950">
      {/* Pure CSS particle dots */}
      {DOTS.map(d => (
        <span
          key={d.id}
          className="absolute rounded-full bg-primary/30 dark:bg-primary/20 pointer-events-none"
          style={{
            width: d.size, height: d.size,
            top: `${d.top}%`, left: `${d.left}%`,
            animation: `floatDot ${d.duration}s ${d.delay}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-mono font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
        >
          Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-6 min-h-[2rem]"
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer', 2000,
              'Flutter Developer', 2000,
              'AI Enthusiast', 2000,
              'Problem Solver', 2000,
            ]}
            repeat={Infinity}
            wrapper="span"
            className="gradient-text"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="/resume.png" download="Nilavan_A_Resume.png"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            <HiDownload className="w-5 h-5" /> Download Resume
          </a>
          <Link to="projects" smooth duration={600} offset={-70}>
            <button className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
              View Projects
            </button>
          </Link>
          <Link to="contact" smooth duration={600} offset={-70}>
            <button className="px-6 py-3 bg-gray-100 dark:bg-gray-800 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
              Contact Me
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="flex justify-center gap-5 mt-8"
        >
          {[
            { Icon: FaGithub, href: personalInfo.github },
            { Icon: FaLinkedin, href: personalInfo.linkedin },
          ].map(({ Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:text-primary transition-colors duration-300">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
