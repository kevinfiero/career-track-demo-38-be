const { Router } = require('express');
const ShortUrl = require('../models/shortUrl');

module.exports = Router()
  .get('/:id', (req, res, next) => {
    ShortUrl
      .findById(req.params.id)
      .then(shortUrl => res.redirect(shortUrl.originalUrl))
      .catch(next);
  });
