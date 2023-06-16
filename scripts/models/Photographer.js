/**
  * @class Photographer
  * @description Create Photographer Card element (html)
  * @description Create Photographer Banner element (html)
  * @description Return total likes counter from all medias (number)
  * @param photographer - The photographer (object)
  * @param medias - The photographer medias (array)
  **********************************/
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
        <h1 class="banner_name">${this.name}</h1>
        <p class="banner_city">${this.city}</p>
        <span class="banner_tagline">${this.tagline}</span>
      </div>
      `
    const $_contactBtn = `<button class="contact_btn">Contactez-moi</button>`
    const $_image = `<img src="assets/photographers/${this.portrait}" alt="${this.name}" />`
    return {$_banner, $_contactBtn, $_image}
  }

  totalLikes() {
    return this.medias.reduce((acc, curr) => acc + curr.likes, 0)
  }

}
