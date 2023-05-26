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

  createPhotographerMedia() {
    console.log(this._media);
    // const $body = document.querySelector('.photographer_body')
    // console.log(this._media.title);
    // const photographerMedia = `
    // <div class="card">
    //   <div class="img_card"><img src="${this._media.image}" alt="${this._media.title}" /></div>
    //   <div class="legend">
    //     <h2>${this._media.title}</h2>
    //     <span class="likes"<span>
    //   </div>
    // </div>
    // `
    // $body.appendChild(photographerMedia)
  }

}
