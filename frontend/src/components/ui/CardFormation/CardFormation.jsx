import './card-formation.scss';

function CardFormation({ img, title, description, tasks = [], techs = [] }) {
  return (
    <article className="card-formation">
      <img className="card-formation__img" src={img} alt={title} />
      <div className="card-formation__content">
        <h3 className="card-formation__title">{title}</h3>
        <p className="card-formation__description">{description}</p>
        <ul className="card-formation__tasks">
          {tasks.map((task, id) => (
            <li key={id}>{task}</li>
          ))}
        </ul>
        <ul className="card-formation__techs">
          {techs.map((tech, id) => (
            <li key={id}>
              <img src={tech} alt={tech.name} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default CardFormation;
