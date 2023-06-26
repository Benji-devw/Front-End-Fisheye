import { Media } from "./Media.js";

/**
  * @class ImageMedia
  * @description Create Image element html
  * @param name - The photographer name string
  * @param data - The photographer media object
  **********************************/
export default class ImageMedia extends Media {
  constructor(name, data) {
    super(name, data)
    // this.likes = data.likes
    this.image = data.image
  }

  createImage(val) {
    const $_image = `
      <div id="${this.id}" class="card" tabindex="0" role="button" aria-label="${this.title}">
        <div class="img_card">
          <img src="assets/images/${this.name.replace(' ', '_')}/${this.image}" alt="${this.title}" />
        </div>
        <div class="legend">
          <h2>${this.title}</h2>
          <span class="likes">${this.likes + val} <i class="fa-solid fa-heart add-like"></i></span>
        </div>
      </div>
      `
      // console.log($_image);
    return $_image;
  }
  // add() {
  //   const likes = document.querySelector('.add-like')
  //   likes.addEventListener('click', () => {
  //     console.log('dsqds');
  //   });
  // }
}

