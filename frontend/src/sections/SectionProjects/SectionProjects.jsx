import { useState, useEffect } from 'react';
import axios from 'axios';
import CardFormation from '@/components/ui/CardFormation/CardFormation.jsx';
import './section-projects.scss';

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
            {projects
              .filter((project) => project.type === 'perso')
              .map((project) => (
                <CardFormation key={project._id} project={project} />
              ))}
          </div>
          <div className="section-projects__content__text">
            <p>
              My Session est mon premier projet personnel. C'est un site qui permet de créer ses propres séances de
              musculation afin de suivre sa progression. Il est toujours en développement, j'ai encore beaucoup de
              choses à faire, et plein d'idées de futures fonctionnalités.
              <br />
              <br />
              C'est un projet Fullstack, le Front-end est fait avec React, le Back-end est en Node.js avec un serveur
              Express. J'ai créé une API REST et la base de données est en NoSQL avec MongoDB Atlas.
            </p>
          </div>
        </div>
        <div className="section-projects__content__formation">
          <h3 className="section-projects__content__title">Projets de formation :</h3>
          <div className="section-projects__content__cards">
            {projects
              .filter((project) => project.type === 'formation')
              .map((project) => (
                <CardFormation key={project._id} project={project} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionProjects;
