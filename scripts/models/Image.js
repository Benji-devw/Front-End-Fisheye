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
    this.image = data.image
  }

  createImage() {
    const $_image = `
      <div id="likes-${this.id}" class="card" tabindex="0" role="button" aria-label="titre ${this.title}, nombre de like ${this.likes}">
        <div class="img_card">
          <img src="assets/images/${this.name.replace(' ', '_')}/${this.image}" alt="${this.title}" />
        </div>
        <div class="legend">
          <h2>${this.title}</h2>
          <div class="likes-container">
            <span class="likes-${this.id}">${this.likes} </span>
            <i class="fa-solid fa-heart add-like" title="like" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      `
      // console.log($_image);
    return $_image;
  }
}

