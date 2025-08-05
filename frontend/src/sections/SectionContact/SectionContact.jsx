import { useState } from 'react';
import Textarea from '@/components/ui/Textarea/Textarea.jsx';
import GitHub from '@/assets/logo/github.png';
import Linkedin from '@/assets/logo/linkedin.png';
import Twitter from '@/assets/logo/twitter.png';
import Mail from '@/assets/logo/mail.png';
import './section-contact.scss';

function SectionContact() {
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <section className="section-contact" id="contact">
      <h2>Me contacter :</h2>
      <p>
        N'hésitez pas à me contacter sur mes réseaux ou via formulaire si vous souhaitez discuter d'un projet ou de tout
        autres choses.
      </p>
      <div className="section-contact__content">
        <div className="section-contact__content__logos">
          <h3>Mes réseaux</h3>
          <div className="section-contact__content__logos--cadre">
            <img src={GitHub} alt="Logo GitHub" />
            <img src={Linkedin} alt="Logo Linkedin" />
            <img src={Twitter} alt="Logo X" />
            <img src={Mail} alt="Logo Email" />
          </div>
        </div>
        <form className="section-contact__content__form">
          <input type="text" name="name" id="name" placeholder="Nom" autoComplete="off" />
          <input type="email" name="email" id="email" placeholder="Email" autoComplete="off" />
          <Textarea
            name="message"
            id="message"
            value={message}
            onChange={handleChange}
            placeholder="Message (500 caractères max)"
            rows="4"
            maxLength="500"
          />

          <button className="section-contact__content__form__button" type="submit">
            ENVOYER
          </button>
        </form>
      </div>
    </section>
  );
}

export default SectionContact;
