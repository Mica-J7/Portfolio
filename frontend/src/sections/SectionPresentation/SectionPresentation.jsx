import './section-presentation.scss';

function SectionPresentation() {
  return (
    <section className="section-presentation" id="presentation">
      <div className="section-presentation__content">
        <div className="section-presentation__content__titles">
          <h1>
            Michaël Jongeau <br />
            Développeur web junior
          </h1>
          <h2>Présentation :</h2>
          <p>
            Après plusieurs années passées dans le domaine de la logistique, je me reconvertis aujourd’hui avec passion
            dans le développement web. Je me forme en continu pour progresser en Front-end, Back-end et sur les
            différents outils, afin de concevoir des sites performants, esthétiques et sécurisés.
          </p>
        </div>
        <div className="section-presentation__content__buttons">
          <button>Me Contacter</button>
          <button>GitHub</button>
          <button>Mon CV</button>
        </div>
      </div>
    </section>
  );
}

export default SectionPresentation;
