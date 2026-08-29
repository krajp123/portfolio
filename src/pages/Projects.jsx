import { BriefcaseBusiness } from 'lucide-react'
import ProjectCards from '../components/ProjectCards'

export default function Projects() {
  return (
    <section className="work-section projects-section" id="projects" aria-label="All projects">
      <div className="projects-heading">
        <div><h1>Selected <em>work.</em></h1></div>
        <div className="projects-intro-copy">
          <div className="projects-intro-icon-wrap">
            <BriefcaseBusiness size={18} className="projects-intro-icon" />
          </div>
          <p>Roles shaped by curiosity, ownership, and a habit of making complex things feel simpler.</p>
        </div>
      </div>
      <ProjectCards />
    </section>
  )
}
