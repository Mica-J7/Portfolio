import GitHub from '@/assets/logo/black-github.png';
import './project-card.scss';

function CardFormation({ project }) {
  return (
    <article>
      <div className="project-card">
        <div className="project-card__img-container">
          <img
            src={`http://localhost:3000${project.image.url}`}
            alt={project.image.alt}
            className="project-card__img-container__img-project"
          />
          <h3 className="project-card__img-container__title">{project.title}</h3>
        </div>
      </div>
      <div className="project-card__content">
        {project.github.url && (
          <a href={project.github.url} target="_blank" rel="noopener noreferrer" className="btn">
            <img src={GitHub} />
            GitHub
          </a>
        )}
        <p className="project-card__content__description">{project.description}</p>
        <ul className="project-card__content__techs">
          {project.techIcons.map((icon, index) => (
            <li key={index}>
              <img src={`http://localhost:3000${icon.url}`} alt={icon.alt} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default CardFormation;
