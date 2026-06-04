import { motion } from 'framer-motion'
import { SectionTitle, FadeIn } from './SectionHelpers'
import { projects } from '../data/portfolioData'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const glowColors = [
  'rgba(99,102,241,0.3)',
  'rgba(6,182,212,0.3)',
  'rgba(139,92,246,0.3)',
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #030712 0%, #0a0a1a 100%)' }}>
      <div className="absolute inset-0 mesh-bg opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle title="Featured Projects" subtitle="A selection of work I'm proud of." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.12} direction="scale">
              <motion.div
                whileHover={{ y: -8, boxShadow: `0 20px 60px ${glowColors[i % 3]}` }}
                className="card-premium flex flex-col h-full overflow-hidden group transition-all duration-500"
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />

                {/* Glow orb on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${glowColors[i % 3]}, transparent 60%)` }} />

                <div className="p-7 flex flex-col flex-1 relative">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-4xl">{project.icon}</span>
                    <div>
                      <h3 className="font-black text-white text-lg leading-tight">{project.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-md font-mono"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-white/5">
                    <a href="https://github.com/nilavan-a" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-indigo-400 transition-colors group/link">
                      <FaGithub className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                      Source Code
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors group/link ml-auto">
                      Live Demo
                      <FaExternalLinkAlt className="w-3 h-3 group-hover/link:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
