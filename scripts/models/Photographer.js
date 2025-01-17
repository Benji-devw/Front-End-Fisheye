/**
 * @class Photographer
 * @description Create a photographer
 * @param {object} photographer - The photographer
 * @param {array} medias - The medias of the photographer
 * @returns {HTMLElements} - The photographer
 * */
export default class Photographer {
  constructor(photographer, medias) {
    this.id = photographer.id
    this.name = photographer.name
    this.city = photographer.city
    this.country = photographer.country
    this.tagline = photographer.tagline
    this.price = photographer.price
    this.portrait = photographer.portrait
    this.medias = medias
  }

  createPhotographerCard() {
    return `
    <article aria-label="${this.name}">
        <div class="article_head">
          <a class="artrcle_head_link" href="${ window.location.href }/photographer.html?id=${this.id}">
            <img class="card_img" alt="${this.name}" src="assets/photographers/${this.portrait}" />
          </a>
          </div>
        <div class="article_body">
          <h2>${this.name}</h2>
          <p class="city" aria-label="${this.city}">${this.city}, ${this.country}</p>
          <p class="tagline" aria-label="${this.tagline}">${this.tagline}</p>
          <p class="price" aria-label="${this.price}">${this.price}€/jour</p>
        </div>
      </article>
      `
  }

  createPhotographerBanner() {
    const $_banner = `
      <div class="banner">
        <h1 class="banner_name">${this.name}</h1>
        <p class="banner_city">${this.city}, ${this.country}</p>
        <span class="banner_tagline">${this.tagline}</span>
      </div>
      `
    const $_contactBtn = `<button class="contact_btn">Contactez-moi</button>`
    const $_image = `<img src="assets/photographers/${this.portrait}" alt="${this.name}" />`
    return { $_banner, $_contactBtn, $_image }
  }

  /**
   * Calculates the total number of likes for all medias of a photographer.
   * @returns {number} The total number of likes.
   */
  totalLikes() {
    // Accumulate the total number of likes for all medias.
    return this.medias.reduce((acc, media) => acc + media.likes, 0)
  }

}
