import './card-perso.scss';

function CardPerso({ img, title, description, tasks = [], techs = [] }) {
  return (
    <article className="card-perso">
      <div className="card-perso__wrapper">
        <div className="card-perso__img-wrapper">
          <img className="card-perso__img" src={img} alt={title} />
        </div>
        <div className="card-perso__content">
          <h3 className="card-perso__title">{title}</h3>
          <p className="card-perso__description">
            {description}
            <br />
            <br />
            C'est un projet Fullstack, j'ai créé le Front avec React, le Back est en Node.js avec un serveur Express.
            J'ai créé ma propre API REST et une base de donnée NoSQL avec MongoDB Atlas.
          </p>
          <ul className="card-perso__tasks">
            {tasks.map((task, id) => (
              <li key={id}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
      <ul className="card-perso__techs">
        {techs.map((tech, id) => (
          <li key={id}>
            <img src={tech} alt={tech.name} />
          </li>
        ))}
      </ul>
    </article>
  );
}

export default CardPerso;
