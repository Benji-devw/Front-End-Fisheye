export default class Photographer {
  constructor(photographer, media) {
    this._photographer = photographer
    this._media = media
    // this._name = photographer.name
  }

  createPhotographerCard() {
    const $wrapper = document.createElement('article')

    const photographerCard = `
        <div class="article_head">
          <a href="${`/photographer.html?id=${this._photographer.id}`}">
            <img class="card_img" alt="${this._photographer.name}" src="assets/photographers/${this._photographer.portrait}" />
          </a>
          </div>
        <div class="article_body">
          <h2>${this._photographer.name}</h2>
        </div>
      `
    $wrapper.innerHTML = photographerCard
    return $wrapper;
  }

  createPhotographerBanner() {
    const $infos = document.querySelector('.infos')
    const $image = document.querySelector('.image_header')

    const photographerBanner = `
      <h1 class="name">${this._photographer.name}</h1>
      <p class="city">${this._photographer.city}</p>
      <span class="tagline">${this._photographer.tagline}</span>
    `
    $image.innerHTML = `<img src="assets/photographers/${this._photographer.portrait}" alt="${this._photographer.name}" />`
    $infos.innerHTML = photographerBanner
  }

  createPhotographerMedia(card, name) {
    const $gallery = document.querySelector('.gallery');
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    cardDiv.innerHTML = `
        <div class="img_card"><img src="assets/images/${name.replace(' ', '_')}/${card.image}" alt="${card.title}" /></div>
        <div class="legend">
          <h2>${card.title}</h2>
          <span class="likes">${card.likes}<span>
        </div>
      `;
      $gallery.appendChild(cardDiv);
  }
  
  createPhotographerVideo(card, name) {
    const $gallery = document.querySelector('.gallery');
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    cardDiv.innerHTML = `
      <video controls width="250">
        <source src="assets/images/${name.replace(' ', '_')}/${card.video}">
      </video>
        <div class="legend">
          <h2>${card.title}</h2>
          <span class="likes">${card.likes}<span>
        </div>
      `;
      $gallery.appendChild(cardDiv);
  }
}
