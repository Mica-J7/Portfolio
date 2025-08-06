import GitHub from '@/assets/logo/black-github.png';
import './card-formation.scss';

function CardFormation({ project }) {
  return (
    <article>
      <div className="card-formation">
        <div className="card-formation__img-container">
          <img
            src={`http://localhost:3000${project.image.url}`}
            alt={project.image.alt}
            className="card-formation__img-container__img-project"
          />
          <h3 className="card-formation__img-container__title">{project.title}</h3>
        </div>
      </div>
      <div className="card-formation__content">
        {project.github.url && (
          <a href={project.github.url} target="_blank" rel="noopener noreferrer" className="btn">
            <img src={GitHub} />
            GitHub
          </a>
        )}
        <p className="card-formation__content__description">{project.description}</p>
        <ul className="card-formation__content__techs">
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
