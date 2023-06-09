import { Media } from "./Media.js";

/**
 * @class ImageMedia
 * Create Image
**********************************/
export default class ImageMedia extends Media {
  constructor(name, data) {
    super(name, data)
    this.image = data.image
  }

  createImage() {
    const $_image = `
      <div id="${this.id}" class="card" tabindex="0" role="button" aria-label="${this.title}">
        <div class="img_card">
          <img src="assets/images/${this.name.replace(' ', '_')}/${this.image}" alt="${this.title}" />
        </div>
        <div class="legend">
          <h2>${this.title}</h2>
          <span class="likes">${this.likes} <i class="fa-solid fa-heart"></i></span>
        </div>
      </div>
      `
      // console.log($_image);
    return $_image;
  }
}

