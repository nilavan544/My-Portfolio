import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle, FadeIn } from './SectionHelpers'
import { personalInfo } from '../data/portfolioData'
import { HiMail, HiPhone } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const contactItems = [
  { Icon: HiMail,    label: 'Email',    value: personalInfo.email,   href: `mailto:${personalInfo.email}`,  color: 'rgba(99,102,241,0.3)' },
  { Icon: HiPhone,   label: 'Phone',    value: personalInfo.phone,   href: `tel:${personalInfo.phone}`,     color: 'rgba(6,182,212,0.3)'  },
  { Icon: FaLinkedin,label: 'LinkedIn', value: 'linkedin.com/in/nilavan-a', href: personalInfo.linkedin,   color: 'rgba(59,130,246,0.3)'  },
  { Icon: FaGithub,  label: 'GitHub',   value: `github.com/${personalInfo.githubUsername}`, href: personalInfo.github, color: 'rgba(139,92,246,0.3)' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  const inputClass = "w-full px-5 py-3.5 rounded-xl text-white placeholder-gray-600 outline-none transition-all duration-300 focus:ring-2 font-medium"
  const inputStyle = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', '--tw-ring-color': 'rgba(99,102,241,0.5)' }

  return (
    <section id="contact" className="section-padding" style={{ background: '#030712' }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Get In Touch" subtitle="Have a project or opportunity? Let's connect!" />
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left */}
          <FadeIn direction="left">
            <h3 className="text-2xl font-black text-white mb-3">Let's build something great</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm always open to new opportunities, interesting projects, and collaborations. Feel free to reach out!
            </p>
            <div className="space-y-4">
              {contactItems.map(({ Icon, label, value, href, color }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ x: 6, boxShadow: `0 4px 24px ${color}`, borderColor: color.replace('0.3', '0.6') }}
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="p-3 rounded-xl transition-all duration-300"
                    style={{ background: color.replace('0.3', '0.15'), border: `1px solid ${color}` }}>
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-mono mb-0.5">{label}</p>
                    <p className="text-gray-200 font-medium text-sm">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </FadeIn>

          {/* Right — Form */}
          <FadeIn direction="right" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: 'name',  label: 'Your Name',     type: 'text',  placeholder: 'Nilavan A' },
                { id: 'email', label: 'Email Address',  type: 'email', placeholder: 'hello@example.com' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-semibold text-gray-300 mb-2">{label}</label>
                  <input id={id} type={type} placeholder={placeholder}
                    value={form[id]}
                    onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                    required
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                <textarea id="message" rows={5} placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  required
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full justify-center text-white text-base py-4"
              >
                {sent ? '✅ Message Sent!' : 'Send Message →'}
              </motion.button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
