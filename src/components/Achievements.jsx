import { motion } from 'framer-motion'
import { SectionTitle, FadeIn } from './SectionHelpers'
import { achievements } from '../data/portfolioData'

const colors = [
  { border: 'rgba(99,102,241,0.4)', glow: 'rgba(99,102,241,0.2)', bg: 'rgba(99,102,241,0.06)' },
  { border: 'rgba(6,182,212,0.4)',  glow: 'rgba(6,182,212,0.2)',  bg: 'rgba(6,182,212,0.06)'  },
  { border: 'rgba(139,92,246,0.4)', glow: 'rgba(139,92,246,0.2)', bg: 'rgba(139,92,246,0.06)' },
  { border: 'rgba(16,185,129,0.4)', glow: 'rgba(16,185,129,0.2)', bg: 'rgba(16,185,129,0.06)' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #030712 0%, #0a0a1a 100%)' }}>
      <div className="absolute inset-0 mesh-bg opacity-40" />
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle title="Achievements" subtitle="Milestones and highlights from my journey." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => {
            const c = colors[i % colors.length]
            return (
              <FadeIn key={i} delay={i * 0.1} direction="scale">
                <motion.div
                  whileHover={{ y: -8, boxShadow: `0 16px 48px ${c.glow}`, borderColor: c.border }}
                  className="card-premium p-7 text-center transition-all duration-400 cursor-default"
                  style={{ background: c.bg }}
                >
                  <motion.span
                    className="text-5xl block mb-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {item.icon}
                  </motion.span>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
