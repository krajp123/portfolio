import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Award } from 'lucide-react'
import SectionLabel from '../components/SectionLabel'

const certificates = [
  {
    id: 'robotics',
    title: 'Advanced Robotics with IoT',
    institute: 'Tech Booster',
    date: 'June 2021',
    skills: ['Arduino', 'Raspberry Pi', 'C++', 'Sensors', 'IoT Protocols', 'Circuit Design'],
  },
  {
    id: 'webdev',
    title: 'Full-Stack Web Development App',
    institute: 'CodeAcademy',
    date: 'January 2023',
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express', 'REST API'],
  },
  {
    id: 'python',
    title: 'Applied Python-II',
    institute: 'KIIT University',
    date: 'December 2023',
    skills: ['Python', 'Pandas', 'NumPy', 'Jupyter', 'Machine Learning Basics'],
  },
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function CertificateCard({ cert }) {
  const [rotation, setRotation] = useState(0)

  const handleCardClick = () => {
    setRotation(rotation + 360)
  }

  return (
    <motion.article 
      className="certificate-card" 
      variants={item} 
      onClick={handleCardClick}
      animate={{ rotateY: rotation }}
      transition={{ duration: 1.2, ease: 'easeInOut', type: 'spring', stiffness: 50, damping: 20 }}
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      <div className="cert-date">{cert.date}</div>

      <div className="cert-content">
        <h3>{cert.title}</h3>
        <p className="cert-institute">{cert.institute}</p>
      </div>

      <div className="cert-skills">
        {cert.skills.slice(0, 4).map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <div className="cert-action">
        <ArrowUpRight size={16} />
      </div>
    </motion.article>
  )
}

export default function Certificates() {
  return (
    <section className="cert-section" id="certificates">
      <div className="cert-section-heading">
        <div>
          <h1>Skills <em>certified.</em></h1>
        </div>
        <div className="cert-section-intro">
          <Award size={38} strokeWidth={1} />
          <p>Industry-recognized certifications demonstrating expertise and commitment to continuous learning.</p>
        </div>
      </div>

      <motion.div className="certificate-ledger" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} />
        ))}
      </motion.div>
    </section>
  )
}


