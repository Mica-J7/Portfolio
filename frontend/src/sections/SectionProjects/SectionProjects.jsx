import projects from '@/data/projects.json';
import ProjectCard from '@/components/ui/ProjectCard/ProjectCard.jsx';
import './section-projects.scss';

const persoProjects = projects.filter((p) => p.type === 'perso');
const formationProjects = projects.filter((p) => p.type === 'formation');

function SectionProjects() {
  return (
    <section className="section__projects" id="projects">
      <h2>Mes projets</h2>
      <h3>Personnel :</h3>
      <div className="section__projects__cards">
        {persoProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <h3>Formation :</h3>
      <div className="section__projects__cards">
        {formationProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default SectionProjects;
