import { useState } from 'react';
import Textarea from '@/components/ui/Textarea/Textarea.jsx';
import GitHub from '@/assets/logo/github.png';
import Linkedin from '@/assets/logo/linkedin.png';
import Twitter from '@/assets/logo/twitter.png';
import Mail from '@/assets/logo/mail.png';
import './section-contact.scss';

function SectionContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChangeForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setStatus('Message envoyé avec succès');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.message || 'Erreur lors de l’envoi');
      }
    } catch (err) {
      setStatus('Erreur serveur : ', err);
    }
  };

  return (
    <section className="section-contact" id="contact">
      <h2>Me contacter :</h2>
      <div className="section-contact__text">
        <p>
          N'hésitez pas à me contacter sur mes réseaux ou via formulaire si vous souhaitez discuter d'un projet ou de
          tout autres choses.
        </p>
      </div>
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
        <form onSubmit={handleSubmit} className="section-contact__content__form">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nom"
            autoComplete="off"
            value={formData.name}
            onChange={handleChangeForm}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
            value={formData.email}
            onChange={handleChangeForm}
            required
          />
          <Textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChangeForm}
            placeholder="Message (500 caractères max)"
            rows="4"
            maxLength="500"
            formValue={formData.message}
            formOnChange={handleChangeForm}
            required
          />

          <button className="section-contact__content__form__button" type="submit">
            ENVOYER
          </button>
          <div className="error-message"> {status && <p>{status}</p>}</div>
        </form>
      </div>
    </section>
  );
}

export default SectionContact;
