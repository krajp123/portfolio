import { MoveRight } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data'
import SectionLabel from '../components/SectionLabel'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((item) => item.number === id) || projects[0]
  return <><section className={`project-detail ${project.className}`}><SectionLabel number={project.number}>Case study</SectionLabel><h1>{project.title}<br /><em>{project.year}</em></h1><p>{project.description}</p><img src={project.image} alt={`${project.title} project preview`} /></section><section className="detail-copy"><SectionLabel number="The idea">A considered approach</SectionLabel><h2>Making room for<br /><em>the memorable.</em></h2><Link className="text-link" to="/projects">Back to work <MoveRight size={18} /></Link></section></>
}
