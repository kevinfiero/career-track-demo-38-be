const pool = require('../utils/pool');

module.exports = class ShortUrl {
  id;
  originalUrl;
  constructor(row) {
    this.id = row.id;
    this.originalUrl = row.original_url;
  }

  static async insert(shortUrl){
    const { rows } = await pool.query(
      'INSERT INTO short_urls (id, original_url) VALUES ($1, $2) RETURNING *', 
      [shortUrl.id, shortUrl.originalUrl]
    );

    return new ShortUrl(rows[0]);
  }
};
