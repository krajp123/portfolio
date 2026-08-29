import { ArrowUpRight } from 'lucide-react'
import SectionLabel from './SectionLabel'

export default function Footer() {
  return <footer id="footer"><SectionLabel number="07">Contact me</SectionLabel><h2>Have a good<br /><em>feeling about it?</em></h2><a className="contact-link" href="mailto:hello@alexmorgan.dev">hello@alexmorgan.dev <ArrowUpRight size={24} /></a><div className="footer-bottom"><span>© 2024 Alex Morgan</span><div><a href="https://github.com">GH</a><a href="https://linkedin.com">LI</a><a href="https://instagram.com">IG</a></div><span>Designed &amp; developed with intent</span></div></footer>
}
