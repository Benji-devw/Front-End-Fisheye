import MediasFactory from "../factories/MediasFactory.js"

export default class Photographer {
  constructor(photographer, media) {
    this.id = photographer.id
    this.name = photographer.name
    this.city = photographer.city
    this.country = photographer.country
    this.tagline = photographer.tagline
    this.price = photographer.price
    this.portrait = photographer.portrait
    this.media = media
    // console.log(this.id);
  }

  createPhotographerCard() {
    const $_photographerCard = `
    <article aria-label="${this.name}">
        <div class="article_head">
          <a class="article_head_link" href="${`/photographer.html?id=${this.id}`}">
            <img class="card_img" alt="${this.name}" src="assets/photographers/${this.portrait}" />
          </a>
          </div>
        <div class="article_body">
          <h2>${this.name}</h2>
        </div>
      </article>
      `
    return $_photographerCard;
  }

  createPhotographerBanner() {
    const $_banner = `
      <div class="banner">
        <h1 class="bannername">${this.name}</h1>
        <p class="bannercity">${this.city}</p>
        <span class="bannertagline">${this.tagline}</span>
      </div>
      `
    const $_image = `<img src="assets/photographers/${this.portrait}" alt="${this.name}" />`
    return {$_banner, $_image}
  }

  createMediaFactory() {
    return this.media
  }

}
