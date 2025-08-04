import { useState } from 'react';
import Textarea from '@/components/ui/Textarea/Textarea.jsx';
import './section-contact.scss';

function SectionContact() {
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <section className="section-contact" id="contact">
      <h2>Me contacter :</h2>

      <form className="section-contact__form">
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

        <button className="section-contact__form__button" type="submit">
          ENVOYER
        </button>
      </form>
    </section>
  );
}

export default SectionContact;
