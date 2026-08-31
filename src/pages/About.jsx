import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 88 },
  { name: 'Node.js', level: 75 },
  { name: 'Express', level: 72 },
  { name: 'MongoDB', level: 70 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Framer Motion', level: 65 },
  { name: 'Git', level: 80 },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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
  const [showSkills, setShowSkills] = useState(false)

  return (
    <>
      <section className="about-compact" id="about">
        
        <h1>
          <span>About <em>Me</em></span>
        </h1>

        <div className="about-compact__inner about-compact__inner--split">
          <div className="about-compact__photo">
            <img src="/about.jpg" alt="Portrait" />
          </div>

          <div className="about-compact__main">
            <div className="about-compact__intro">
              <p className="about-compact__kicker">Full-stack developer</p>
              <h1>Building clean products with thoughtful design.</h1>
            </div>

            <div className="about-compact__content">
              <p>
                I design and build digital experiences that balance performance,
                usability, and visual clarity. My work focuses on React, Node.js,
                and modern interfaces that feel polished without being overdone.
              </p>
              <p>
                I enjoy turning complex ideas into simple, reliable product
                experiences—whether it&apos;s a complete web app or a refined UI.
              </p>

              <div className="about-compact__meta">
                <div>
                  <span>Focus</span>
                  <strong>Product + UX</strong>
                </div>
                <div>
                  <span>Stack</span>
                  <strong>React, Node, MongoDB</strong>
                </div>
              </div>

              <button
                className="about-compact__skills-toggle"
                onClick={() => setShowSkills((prev) => !prev)}
              >
                <span className="about-compact__blink-dot" />
                {showSkills ? 'Hide Skills' : 'View Skills'}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showSkills && (
            <motion.div
              className="about-compact__skills-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {skills.map((skill, idx) => (
                <motion.div key={idx} className="about-compact__skill-card" variants={itemVariants}>
                  <div className="about-compact__skill-card-head">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="about-compact__skill-bar">
                    <motion.div
                      className="about-compact__skill-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}