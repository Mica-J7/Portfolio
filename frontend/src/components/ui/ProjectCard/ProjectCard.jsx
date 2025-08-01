import './project-card.scss';

function ProjectCard({ title, img, description, tasks = [], techs = [], variant = '' }) {
  return (
    <article className={`project-card ${variant && `project-card--${variant}`}`}>
      <h3 className="project-card__title">{title}</h3>
      <img className="project-card__img" src={img} alt={title} />
      <p className="project-card__description">{description}</p>
      <ul className="project-card__tasks">
        {tasks.map((task, id) => (
          <li key={id}>{task}</li>
        ))}
      </ul>
      <ul className="project-card__techs">
        {techs.map((tech, id) => (
          <li key={id}>
            <img src={tech} alt={tech.name} />
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ProjectCard;
