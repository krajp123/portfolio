import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'

const skills = [
  'React',
  'JavaScript',
  'Node.js',
  'Express',
  'MongoDB',
  'Tailwind CSS',
  'Framer Motion',
  'Git',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function About() {
  return (
    <>
      <section className="page-intro about-intro" id="about">
        <SectionLabel number="06">About</SectionLabel>
        <h1>Full-Stack Developer<br /><em>& Designer.</em></h1>
        <p>Passionate about building beautiful, functional web experiences with clean code and modern design principles.</p>
      </section>

      <section className="about-main">
        <div className="about-wrapper">
          {/* Core Details */}
          <div className="about-details">
            <h2>Who I Am</h2>
            <div className="details-content">
              <p>I'm a full-stack developer specializing in React and Node.js. I create seamless digital experiences by combining clean code with thoughtful design. My focus is on building performant, scalable applications that users love.</p>
              <p>When I'm not coding, I explore new technologies and contribute to open-source projects. I'm always eager to learn and collaborate with creative teams.</p>
            </div>
          </div>

          {/* Tech Skills */}
          <div className="about-skills">
            <h2>Tech Stack</h2>
            <motion.div 
              className="skills-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {skills.map((skill, idx) => (
                <motion.div key={idx} className="skill-tag" variants={itemVariants}>
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
