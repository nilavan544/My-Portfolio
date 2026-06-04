import { motion } from 'framer-motion'
import { SectionTitle, FadeIn } from './SectionHelpers'
import { personalInfo } from '../data/portfolioData'
import { FaCode, FaMobileAlt, FaBrain } from 'react-icons/fa'

const highlights = [
  {
    icon: FaCode, label: 'Full Stack Development',
    desc: 'MERN Stack, Spring Boot, REST APIs',
    gradient: 'from-indigo-500 to-purple-600',
    glow: 'rgba(99,102,241,0.3)',
  },
  {
    icon: FaMobileAlt, label: 'Flutter Development',
    desc: 'Cross-Platform iOS & Android Apps',
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.3)',
  },
  {
    icon: FaBrain, label: 'AI / Machine Learning',
    desc: 'Smart Apps, Recommendation Systems',
    gradient: 'from-violet-500 to-pink-600',
    glow: 'rgba(139,92,246,0.3)',
  },
]

const tags = ['React', 'Node.js', 'Flutter', 'Python', 'AWS', 'MongoDB', 'Spring Boot', 'Firebase']

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #020617 0%, #0a0a1a 100%)' }}>
      <div className="absolute inset-0 mesh-bg opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle title="Who I Am" subtitle="Passionate about building products that make a difference." />
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <FadeIn direction="left">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">{personalInfo.about}</p>
              <div className="flex flex-wrap gap-2.5 mt-6">
                {tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-1.5 rounded-full text-sm font-mono font-medium border transition-all duration-300 cursor-default"
                    style={{ background: 'rgba(99,102,241,0.08)', borderColor: 'rgba(99,102,241,0.25)', color: '#a5b4fc' }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(99,102,241,0.6)', boxShadow: '0 0 12px rgba(99,102,241,0.3)' }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right */}
          <FadeIn direction="right" delay={0.2}>
            <div className="grid gap-5">
              {highlights.map(({ icon: Icon, label, desc, gradient, glow }, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, boxShadow: `0 8px 40px ${glow}` }}
                  className="card-premium p-6 flex items-center gap-5"
                  style={{ transition: 'all 0.4s ease' }}
                >
                  <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${gradient}`}
                    style={{ boxShadow: `0 8px 24px ${glow}` }}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">{label}</h3>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
