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
    // console.log(this._id);
  }

  createPhotographerCard() {
    const $_photographerCard = `
        <div class="article_head">
          <a class="article_head_link" href="${`/photographer.html?id=${this._id}`}">
            <img class="card_img" alt="${this._name}" src="assets/photographers/${this._portrait}" />
          </a>
          </div>
        <div class="article_body">
          <h2>${this._name}</h2>
        </div>
      `
    return $_photographerCard;
  }

  createPhotographerBanner() {
    const $_banner = `
      <div class="banner">
        <h1 class="banner_name">${this._name}</h1>
        <p class="banner_city">${this._city}</p>
        <span class="banner_tagline">${this._tagline}</span>
      </div>
      `
    const $_image = `<img src="assets/photographers/${this._portrait}" alt="${this._name}" />`
    return {$_banner, $_image}
  }

}
