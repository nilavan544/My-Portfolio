import { SectionTitle, FadeIn } from './SectionHelpers'
import { personalInfo } from '../data/portfolioData'
import { useTheme } from '../context/ThemeContext'
import { FaGithub, FaStar, FaCodeBranch, FaCode } from 'react-icons/fa'
import { motion } from 'framer-motion'

const u = personalInfo.githubUsername

export default function GitHubStats() {
  const { dark } = useTheme()

  const statCards = [
    { icon: FaGithub,     label: 'GitHub Profile',   value: u,    color: 'rgba(99,102,241,0.3)',  gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)' },
    { icon: FaStar,       label: 'Open Source',       value: 'Active Contributor', color: 'rgba(245,158,11,0.3)', gradient: 'linear-gradient(135deg,#f59e0b,#ef4444)' },
    { icon: FaCodeBranch, label: 'Repositories',      value: 'Public Projects',    color: 'rgba(6,182,212,0.3)',  gradient: 'linear-gradient(135deg,#06b6d4,#3b82f6)' },
    { icon: FaCode,       label: 'Languages',         value: 'Polyglot Dev',       color: 'rgba(16,185,129,0.3)', gradient: 'linear-gradient(135deg,#10b981,#059669)' },
  ]

  return (
    <section id="github" className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #030712 0%, #0a0a1a 100%)' }}>
      <div className="absolute inset-0 mesh-bg opacity-40" />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle title="GitHub Statistics" subtitle="A snapshot of my open source activity and contributions." />

        {/* Stat cards row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {statCards.map(({ icon: Icon, label, value, color, gradient }, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="scale">
              <motion.div
                whileHover={{ y: -6, boxShadow: `0 16px 40px ${color}` }}
                className="card-premium p-5 text-center transition-all duration-400"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: gradient, boxShadow: `0 6px 20px ${color}` }}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-white font-bold text-sm mb-1">{value}</p>
                <p className="text-gray-500 text-xs font-mono">{label}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* GitHub Stats Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <FadeIn delay={0.1} direction="left">
            <motion.div
              whileHover={{ boxShadow: '0 16px 48px rgba(99,102,241,0.25)', borderColor: 'rgba(99,102,241,0.4)' }}
              className="card-premium p-5 transition-all duration-400"
            >
              <p className="text-xs text-gray-500 font-mono mb-4 flex items-center gap-2">
                <FaGithub className="w-3.5 h-3.5 text-indigo-400" /> GitHub Stats
              </p>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${u}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=818cf8&icon_color=8b5cf6&text_color=94a3b8&ring_color=6366f1`}
                alt="GitHub Stats"
                className="w-full rounded-xl"
                loading="lazy"
                onError={e => { e.currentTarget.parentElement.style.display = 'none' }}
              />
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.2} direction="right">
            <motion.div
              whileHover={{ boxShadow: '0 16px 48px rgba(6,182,212,0.25)', borderColor: 'rgba(6,182,212,0.4)' }}
              className="card-premium p-5 transition-all duration-400"
            >
              <p className="text-xs text-gray-500 font-mono mb-4 flex items-center gap-2">
                <FaCode className="w-3.5 h-3.5 text-cyan-400" /> Most Used Languages
              </p>
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${u}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=818cf8&text_color=94a3b8`}
                alt="Top Languages"
                className="w-full rounded-xl"
                loading="lazy"
                onError={e => { e.currentTarget.parentElement.style.display = 'none' }}
              />
            </motion.div>
          </FadeIn>
        </div>

        {/* Streak */}
        <FadeIn delay={0.3}>
          <motion.div
            whileHover={{ boxShadow: '0 16px 48px rgba(139,92,246,0.25)', borderColor: 'rgba(139,92,246,0.4)' }}
            className="card-premium p-5 transition-all duration-400"
          >
            <p className="text-xs text-gray-500 font-mono mb-4 flex items-center gap-2">
              <FaStar className="w-3.5 h-3.5 text-violet-400" /> Contribution Streak
            </p>
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${u}&theme=tokyonight&hide_border=true&background=00000000&ring=6366f1&fire=8b5cf6&currStreakLabel=818cf8&sideLabels=94a3b8&dates=64748b&stroke=ffffff10`}
              alt="GitHub Streak"
              className="w-full rounded-xl max-h-40 object-contain"
              loading="lazy"
              onError={e => { e.currentTarget.parentElement.style.display = 'none' }}
            />
          </motion.div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.4} className="mt-10 text-center">
          <motion.a
            href={`https://github.com/${u}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(99,102,241,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 4px 24px rgba(99,102,241,0.35)' }}
          >
            <FaGithub className="w-5 h-5" />
            View Full GitHub Profile
          </motion.a>
        </FadeIn>
      </div>
    </section>
  )
}
