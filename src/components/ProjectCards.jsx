import { ArrowUpRight, Code2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { projects } from '../data'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function ProjectCards() {
  return (
    <motion.div className="career-ledger project-ledger" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      {projects.map((project) => (
        <motion.article className="project-card career-row" variants={item} key={project.number}>
          <div className="career-year">
            <strong>{project.year}</strong>
          </div>

          <div className="project-card-content-block">
            <span className="career-level">{project.type}</span>
            <h2>{project.title}</h2>
            <h3 className="project-card-audience">For {project.audience}</h3>
            <p>{project.description}</p>
          </div>

          <div className="project-card-focus">
            <div className="project-card-stack">
              {project.skills.slice(0, 3).map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <div className="project-card-action-row">
              <Code2 size={14} />
              <ArrowUpRight size={18} />
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  )
}
