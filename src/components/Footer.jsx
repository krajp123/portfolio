import { ArrowUpRight, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

const socials = [
  { label: 'GitHub', icon: FaGithub, href: 'https://github.com/yourhandle' },
  { label: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/in/yourhandle' },
  { label: 'Email', icon: Mail, href: 'mailto:kishan8105@gmail.com' },
  { label: 'Instagram', icon: FaInstagram, href: 'https://instagram.com/yourhandle' },
  { label: 'Facebook', icon: FaFacebook, href: 'https://facebook.com/yourhandle' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer" id="footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__intro">
            <h2>
              Let&apos;s build<br />
              <em>something great.</em>
            </h2>
            <p>
              I&apos;m a student developer always open to internships,
              collaborations, and interesting problems to solve.
            </p>

            <a className="site-footer__email" href="mailto:kishan8105@gmail.com">
              <Mail size={20} />
              kishan8105@gmail.com
              <ArrowUpRight size={18} />
            </a>

            <div className="site-footer__availability">
              <span className="site-footer__dot" />
              Open to internships &amp; freelance work
            </div>
          </div>

          <div className="site-footer__connect">
            <img
              src="/robot.png"
              alt="Friendly robot mascot giving a thumbs up"
              className="site-footer__mascot"
            />
            <span className="site-footer__col-title">Connect</span>
            <div className="site-footer__social-row">
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={label}
                  title={label}
                  className="site-footer__social-icon"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer__divider" />

        <div className="site-footer__bottom">
          <span>&copy; {year} Kishan. All rights reserved.</span>
          <span className="site-footer__credit">Designed &amp; built with React and intent</span>
          <button className="site-footer__back-to-top" onClick={scrollToTop} aria-label="Back to top">
            Back to top
            <ArrowUpRight size={16} style={{ transform: 'rotate(-45deg)' }} />
          </button>
        </div>
      </div>
    </footer>
  )
}