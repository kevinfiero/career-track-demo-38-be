const { Router } = require('express');
const ShortUrlService = require('../services/ShortUrlService');

module.exports = Router()
  .post('/', (req, res, next) => {
    ShortUrlService
      .create(req.body)
      .then(shortUrl => res.send(shortUrl))
      .catch(next);
  });
