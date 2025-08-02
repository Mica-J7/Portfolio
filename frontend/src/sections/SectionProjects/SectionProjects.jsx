import projects from '@/data/projects.json';
import CardPerso from '@/components/ui/CardPerso/CardPerso.jsx';
import CardFormation from '@/components/ui/CardFormation/CardFormation.jsx';
import './section-projects.scss';

const persoProjects = projects.filter((p) => p.type === 'perso');
const formationProjects = projects.filter((p) => p.type === 'formation');

function SectionProjects() {
  return (
    <section className="section-projects" id="projects">
      <h2>Mes projets :</h2>
      <div className="section-projects__content">
        <div className="section-projects__content__perso">
          <h3>Projet personnel :</h3>
          <div className="section-projects__content__cards">
            {persoProjects.map((project) => (
              <CardPerso key={project.id} {...project} />
            ))}
          </div>
        </div>
        <div className="section-projects__content__formation">
          <h3>Projets de formation :</h3>
          <div className="section-projects__content__cards">
            {formationProjects.map((project) => (
              <CardFormation key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionProjects;
