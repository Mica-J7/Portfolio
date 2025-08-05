import { useState, useEffect } from 'react';
import axios from 'axios';
import CardPerso from '@/components/ui/CardPerso/CardPerso.jsx';
import CardFormation from '@/components/ui/CardFormation/CardFormation.jsx';
import './section-projects.scss';

import projects from '@/data/projects.json';
const persoProjects = projects.filter((p) => p.type === 'perso');

function SectionProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/projects')
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="section-projects" id="projects">
      <h2>Mes projets :</h2>
      <div className="section-projects__content">
        <div className="section-projects__content__perso">
          <h3 className="section-projects__content__title">Projet personnel :</h3>
          <div className="section-projects__content__cards">
            {persoProjects.map((project) => (
              <CardPerso key={project.id} {...project} />
            ))}
          </div>
        </div>
        <div className="section-projects__content__formation">
          <h3 className="section-projects__content__title">Projets de formation :</h3>
          <div className="section-projects__content__cards">
            {projects.map((project) => (
              <CardFormation key={project._id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionProjects;
