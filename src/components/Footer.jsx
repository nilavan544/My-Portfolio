import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { personalInfo } from '../data/portfolioData'
import { Link } from 'react-scroll'
import { navLinks } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="text-sm leading-relaxed">
              Full Stack Developer · Flutter Developer · AI Enthusiast
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} smooth duration={600} offset={-70}
                    className="text-sm hover:text-primary cursor-pointer transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { Icon: FaGithub, href: personalInfo.github },
                { Icon: FaLinkedin, href: personalInfo.linkedin },
                { Icon: HiMail, href: `mailto:${personalInfo.email}` },
              ].map(({ Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-800 hover:bg-primary hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm">{personalInfo.email}</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <p>Copyright © 2026 {personalInfo.name}. All rights reserved.</p>
          <p>Made with ❤️ using React and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
