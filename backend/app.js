require('dotenv').config({ quiet: true });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const limiter = require('./middlewares/limiter');
const MONGO_URI = process.env.MONGO_URI;

const projectsRoutes = require('./routes/projects');
const contactRoutes = require('./routes/contact');

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.log('Connexion à MongoDB échouée :', err));

const app = express();

// middleware cors installé via npm à la place du cors manuel de base.
const allowedOrigins = [
  'http://localhost:5173',
  'http://192.168.1.20:5173', // ajoute l’IP du front sur le réseau local
];

app.use(
  cors({
    origin: function (origin, callback) {
      // autorise les requêtes avec origine présente dans la liste ou sans origine (postman, curl)
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.use('/api/projects', projectsRoutes);
app.use('/api/contact', limiter, contactRoutes);

module.exports = app;
