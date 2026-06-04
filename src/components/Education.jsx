import { motion } from 'framer-motion'
import { SectionTitle, FadeIn } from './SectionHelpers'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="section-padding" style={{ background: '#030712' }}>
      <div className="max-w-3xl mx-auto">
        <SectionTitle title="Academic Background" subtitle="My educational journey and qualifications." />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-4 bottom-4 w-px hidden sm:block"
            style={{ background: 'linear-gradient(180deg, #6366f1, #8b5cf6, #06b6d4)' }} />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="sm:pl-20 relative">
                  {/* Timeline dot */}
                  <motion.div
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                    className="hidden sm:flex absolute left-0 top-6 w-16 h-16 rounded-2xl items-center justify-center text-2xl"
                    style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 8px 24px rgba(99,102,241,0.4)' }}
                  >
                    {edu.icon}
                  </motion.div>

                  <motion.div
                    whileHover={{ borderColor: 'rgba(99,102,241,0.5)', boxShadow: '0 8px 40px rgba(99,102,241,0.15)' }}
                    className="card-premium p-6 transition-all duration-300"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                      <h3 className="font-bold text-white text-lg">{edu.institution}</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-mono"
                        style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)', color: '#818cf8' }}>
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-3">{edu.degree}</p>
                    <span className="inline-block px-4 py-1 rounded-lg text-sm font-bold"
                      style={{ background: 'rgba(6,182,212,0.1)', color: '#22d3ee', border: '1px solid rgba(6,182,212,0.2)' }}>
                      {edu.score}
                    </span>
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
