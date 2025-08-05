import GitHub from '@/assets/logo/github.png';
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
        </div>
        <p className="section-presentation__content__p-left">
          Après plusieurs années passées dans le domaine de la logistique, je me reconvertis aujourd’hui avec passion
          dans le développement web. Je me forme en continu pour progresser en Front-end, Back-end et sur les différents
          outils permettant de concevoir des sites performants, esthétiques et sécurisés.
        </p>
        <p className="section-presentation__content__p-right">
          Ce Portfolio est voué à évoluer au fur et à mesure de mon apprentissage et de mes futurs projets personnels et
          professionnels. Il n'est donc pas terminé, et ne le sera jamais vraiment.
        </p>

        <div className="section-presentation__content__buttons">
          <button className="btn">ME CONTACTER</button>
          <button className="btn" id="btn-github">
            <img src={GitHub} alt="GitHub" /> GITHUB
          </button>
          <button className="btn">MON CV</button>
        </div>
      </div>
    </section>
  );
}

export default SectionPresentation;
