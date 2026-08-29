import { ArrowUpRight, Mail } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'

export default function Contact() { return <section className="contact-page" id="contact"><SectionLabel number="07">Contact me</SectionLabel><h1>Let's make<br /><em>something felt.</em></h1><p>Have a project, a strange idea, or just a good question? My inbox is open.</p><a className="contact-link" href="mailto:hello@alexmorgan.dev"><Mail size={24} /> hello@alexmorgan.dev <ArrowUpRight size={24} /></a><div className="contact-details"><span>Based in New York<br />Working everywhere</span><span>Usually replies<br />within 48 hours</span></div></section> }
