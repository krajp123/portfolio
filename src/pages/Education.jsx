import { ArrowUpRight, BookOpen, GraduationCap, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const education = [
	{ number: '01', period: '2023 — 2025', level: 'Master’s Degree', title: 'Masters Of Computer Application', institution: 'Kalinga Institute of Industrial Technology (KIIT), Bhubneswar, Odisha', description: 'Graduated with distinction. Specialized in Software Development and Data Science. Engaged in academic and industry projects involving Full-Stack Web Development and Database Management.', focus: 'Computer Science · Software Development', tone: 'gold', status: 'Completed' },
	{ number: '02', period: '2019 — 2022', level: 'Bachelor’s Degree', title: 'Bachelor of Computer Application', institution: 'Martin Luther Christian University, Shillong, Meghalaya', description: 'Developed a strong foundation in Programming and Data analytical thinking, with coursework that emphasized problem-solving and critical reasoning skills.', focus: 'Information Technology · Programming', tone: 'lime', status: 'Completed' },
	{ number: '03', period: '2017 — 2019', level: 'Higher Secondary', title: 'Higher Secondary Education', institution: 'B.N Uch Vidyalaya, Patna, Bihar', description: 'Completed studies under the Council of Higher Secondary Education, Bihar with focus on core academic subjects that built a strong foundation for further education.', focus: 'Science · Academic foundation', tone: 'blue', status: 'Completed' },
	{ number: '04', period: '2015 — 2017', level: 'Secondary education', title: 'Secondary Education', institution: 'Surajdeo Memorial School, Hajipur, Bihar', description: 'Completed studies under the Council of Higher Secondary Education, Bihar with focus on core academic subjects that built a strong foundation for further education.', focus: 'Core academic subjects · Foundational learning', tone: 'coral', status: 'Completed' },
]

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 34 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }

export default function Education() {
	return <section className="info-section education-section" id="education">
		<div className="education-heading">
			<div>
				<h1>Always <em>learning.</em></h1>
			</div>
			<div className="education-intro">
				<GraduationCap size={42} strokeWidth={1} />
				<p>Every chapter adds a new way to see, question, and make. Here is the path so far.</p>
			</div>
		</div>
		<div className="education-summary" aria-label="Education summary">
			<div><strong>04</strong><span>milestones</span></div><div><strong>11+</strong><span>years of study</span></div><div><strong>∞</strong><span>questions ahead</span></div>
		</div>
		<motion.div className="education-timeline" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}>
			<motion.div className="education-progress" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: 'easeInOut' }} />
			{education.map((entry, index) => <motion.article className={`education-entry education-entry-${entry.tone}`} variants={item} key={entry.number}>
				<div className="education-marker"><span>{entry.number}</span></div>
				<div className="education-card"><div className="education-card-top"><span>{entry.level}</span></div><div className="education-date"><small>Academic year</small><span>{entry.period}</span></div><h2>{entry.title}</h2><p>{entry.institution}</p><p className="education-description">{entry.description}</p><div className="education-focus"><BookOpen size={15} /><span>{entry.focus}</span></div><div className="education-card-foot"><small>{entry.status}</small><ArrowUpRight size={17} /></div></div>
				{index === education.length - 1 && <Sparkles className="education-spark" size={17} />}
			</motion.article>)}
		</motion.div>
	</section>
}
