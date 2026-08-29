import { ArrowUpRight, BriefcaseBusiness, Code2 } from 'lucide-react'
import { motion } from 'framer-motion'

const experience = [
	{ number: '01', period: 'July 2026 — now', level: 'Current role', title: 'System Engineer', institution: 'JKR Consulting & Services', description: 'Designing, maintaining, and improving reliable systems while supporting technical delivery and operational excellence.', focus: 'Systems · Infrastructure · Problem-solving', tone: 'blue', status: 'Present' },
	{ number: '02', period: 'July 2025 — July 2026', level: 'Freelancing', title: 'Freelance Developer', institution: 'Independent practice', description: 'Delivered focused digital solutions for clients, turning ideas into dependable, user-friendly web experiences.', focus: 'Web development · Client delivery · Collaboration', tone: 'gold', status: 'Completed' },
]

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.16 } } }
const item = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }

export default function Experience() {
	return <section className="info-section experience-section" id="experience">
		<div className="career-header"><div><h1>Work, in <em>motion.</em></h1></div><div className="career-intro"><BriefcaseBusiness size={38} strokeWidth={1} /><p>Roles shaped by curiosity, ownership, and a habit of making complex things feel simpler.</p></div></div>
		<div className="career-ledger-head"><span>Timeline</span><span>Role &amp; organisation</span><span>Focus</span></div>
		<motion.div className="career-ledger" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
			{experience.map((entry, index) => <motion.article className={`career-row career-row-${entry.tone}`} variants={item} key={entry.number}>
				<div className="career-year"><strong>{entry.period.split(' — ')[0]}</strong><span>{entry.period.split(' — ')[1]}</span></div>
				<div className="career-role"><span className="career-level">{entry.level}</span><h2>{entry.title}</h2><h3>{entry.institution}</h3><p>{entry.description}</p></div>
				<div className="career-focus"><span><Code2 size={14} />{entry.focus}</span><ArrowUpRight size={20} /><small>{index === 0 ? 'Current' : 'Previous'}</small></div>
			</motion.article>)}
		</motion.div>
	</section>
}
