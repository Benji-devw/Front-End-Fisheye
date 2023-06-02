export default class Photographer {
  constructor(photographer, media) {
    this._id = photographer.id
    this._name = photographer.name
    this._city = photographer.city
    this._country = photographer.country
    this._tagline = photographer.tagline
    this._price = photographer.price
    this._portrait = photographer.portrait
    this._media = media
  }

  createPhotographerCard() {
    const $_article = document.createElement('article')
    $_article.setAttribute('aria-label', this.name)

    const photographerCard = `
        <div class="article_head">
          <a class="article_head_link" href="${`/photographer.html?id=${this.id}`}">
            <img class="card_img" alt="${this.name}" src="assets/photographers/${this.portrait}" />
          </a>
          </div>
        <div class="article_body">
          <h2>${this.name}</h2>
        </div>
      `
    $_article.innerHTML = photographerCard
    return $_article;
  }

  createPhotographerBanner() {
    const $_banner = `
      <div class="banner">
        <h1 class="banner_name">${this.name}</h1>
        <p class="banner_city">${this.city}</p>
        <span class="banner_tagline">${this.tagline}</span>
      </div>
      `
    const $_image = `<img src="assets/photographers/${this.portrait}" alt="${this.name}" />`
    return {$_banner, $_image}
  }

}
