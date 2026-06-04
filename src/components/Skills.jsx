import { motion } from 'framer-motion'
import { SectionTitle, FadeIn } from './SectionHelpers'
import { skills } from '../data/portfolioData'

const categoryConfig = {
  'Programming Languages':     { gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)', glow: 'rgba(99,102,241,0.4)',  icon: '⚡' },
  'Frameworks & Technologies': { gradient: 'linear-gradient(135deg,#06b6d4,#3b82f6)', glow: 'rgba(6,182,212,0.4)',   icon: '🚀' },
  'Databases':                 { gradient: 'linear-gradient(135deg,#10b981,#059669)', glow: 'rgba(16,185,129,0.4)',  icon: '🗄️' },
  'Tools':                     { gradient: 'linear-gradient(135deg,#f59e0b,#ef4444)', glow: 'rgba(245,158,11,0.4)',  icon: '🛠️' },
  'Core Concepts':             { gradient: 'linear-gradient(135deg,#ec4899,#8b5cf6)', glow: 'rgba(236,72,153,0.4)',  icon: '🧠' },
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ background: '#030712' }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Tech Stack" subtitle="Technologies and tools I use to build great products." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], ci) => {
            const cfg = categoryConfig[category] || categoryConfig['Tools']
            return (
              <FadeIn key={category} delay={ci * 0.1} direction="scale">
                <motion.div
                  whileHover={{ boxShadow: `0 8px 40px ${cfg.glow}`, borderColor: cfg.glow }}
                  className="card-premium p-6 h-full transition-all duration-400"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: cfg.gradient, boxShadow: `0 4px 16px ${cfg.glow}` }}>
                      {cfg.icon}
                    </div>
                    <h3 className="font-bold text-white text-sm leading-tight">{category}</h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: ci * 0.05 + si * 0.06 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.08, boxShadow: `0 0 14px ${cfg.glow}` }}
                        className="px-3 py-1.5 rounded-lg text-sm font-mono cursor-default transition-all duration-200"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#cbd5e1' }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
