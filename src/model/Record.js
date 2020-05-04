// @ts-check

/**
 * Class represents movie or TV serie
 */
class Record {
  /**
   *
   * @param {string} title 
   * @param {string} poster_path 
   * @param {number} id
   * @param {array} genres
   * @param {string} overview indentifier of strategy
   */
  constructor(title, poster_path, id, genres, overview) {
    this.title = title
    this.poster_path = poster_path
    this.id = id
    this.genres = genres
    this.overview = overview
  }
}

module.exports = Record