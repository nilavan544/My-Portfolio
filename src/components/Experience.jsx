import { motion } from 'framer-motion'
import { SectionTitle, FadeIn } from './SectionHelpers'
import { experience } from '../data/portfolioData'
import { FaBriefcase } from 'react-icons/fa'
import { HiCheckCircle } from 'react-icons/hi'

const expTags = ['React', 'Node.js', 'MongoDB', 'Express', 'AWS', 'SDLC', 'REST API', 'Git']

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #030712 0%, #0a0a1a 100%)' }}>
      <div className="absolute inset-0 mesh-bg opacity-40" />
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionTitle title="Work Experience" subtitle="Professional internship and industry exposure." />
        {experience.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.15} direction="scale">
            <motion.div
              whileHover={{ boxShadow: '0 16px 60px rgba(99,102,241,0.25)' }}
              className="card-premium p-8 transition-all duration-500"
              style={{ borderColor: 'rgba(99,102,241,0.2)' }}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 8px 24px rgba(99,102,241,0.4)' }}>
                    <FaBriefcase className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-3 justify-between items-start mb-2">
                    <h3 className="text-2xl font-black text-white">{exp.role}</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-mono"
                      style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', color: '#34d399' }}>
                      ● Internship
                    </span>
                  </div>
                  <p className="text-lg font-semibold mb-4" style={{ color: '#818cf8' }}>{exp.company}</p>

                  <div className="flex items-start gap-3 mb-6 p-4 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <HiCheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {expTags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-lg text-xs font-mono font-medium"
                        style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', color: '#a5b4fc' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
