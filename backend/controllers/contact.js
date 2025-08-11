const nodemailer = require('nodemailer');
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Champs invalides' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS, // mot de passe d'application Gmail
      },
    });

    await transporter.sendMail({
      from: EMAIL_USER,
      replyTo: email,
      to: EMAIL_USER,
      subject: `Contact depuis portfolio — ${name}`,
      text: message,
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Erreur Nodemailer:', err);
    res.status(500).json({ error: 'Erreur lors de l’envoi du message' });
  }
};

module.exports = { sendMessage };
