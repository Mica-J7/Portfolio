const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { error: 'Trop de messages envoyés, réessayez plus tard.' },
});

module.exports = limiter;
