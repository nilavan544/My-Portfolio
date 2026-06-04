import { motion } from 'framer-motion'
import { SectionTitle, FadeIn } from './SectionHelpers'
import { certifications } from '../data/portfolioData'
import { HiBadgeCheck } from 'react-icons/hi'

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding" style={{ background: '#030712' }}>
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Certifications" subtitle="Verified credentials and professional achievements." />
        <div className="grid sm:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <FadeIn key={i} delay={i * 0.12} direction="scale">
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(99,102,241,0.3)', borderColor: 'rgba(99,102,241,0.5)' }}
                className="card-premium p-7 text-center transition-all duration-400"
              >
                <div className="text-5xl mb-4">{cert.icon}</div>
                <div className="flex justify-center mb-3">
                  <HiBadgeCheck className="w-7 h-7" style={{ color: '#818cf8' }} />
                </div>
                <h3 className="font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>
                <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold"
                  style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)', color: '#818cf8' }}>
                  {cert.year}
                </span>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
