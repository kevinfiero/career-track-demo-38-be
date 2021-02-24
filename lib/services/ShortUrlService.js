const ShortUrl = require('../models/shortUrl');
const chance = require('chance').Chance();

module.exports = class ShortUrlService {
  static create({ url }) {
    const id = chance.string({ 
      length: 8, 
      alpha: true, 
      numeric: true, 
      symbols: false,
      casing: 'lower'
    });

    return ShortUrl.insert({
      id,
      originalUrl: url
    });
  }
};
