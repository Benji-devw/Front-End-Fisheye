export default class Photographer {
  constructor(photographer, media) {
    this._photographer = photographer
    this._media = media
  }

  createPhotographerCard() {
    const $_article = document.createElement('article')
    $_article.setAttribute('aria-label', this._photographer.name)

    const photographerCard = `
        <div class="article_head">
          <a class="article_head_link" href="${`/photographer.html?id=${this._photographer.id}`}">
            <img class="card_img" alt="${this._photographer.name}" src="assets/photographers/${this._photographer.portrait}" />
          </a>
          </div>
        <div class="article_body">
          <h2>${this._photographer.name}</h2>
        </div>
      `
    $_article.innerHTML = photographerCard
    return $_article;
  }

  createPhotographerBanner() {
    const $_photographer_infos = document.querySelector('.photographer_infos')
    const $_image = document.querySelector('.image_header')

    const photographerBanner = `
      <div class="banner">
        <h1 class="banner_name">${this._photographer.name}</h1>
        <p class="banner_city">${this._photographer.city}</p>
        <span class="banner_tagline">${this._photographer.tagline}</span>
      </div>
      `
    $_image.innerHTML = `<img src="assets/photographers/${this._photographer.portrait}" alt="${this._photographer.name}" />`
    $_photographer_infos.innerHTML = photographerBanner
  }

}
