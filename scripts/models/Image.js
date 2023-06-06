import { Media } from "./Media.js";

export default class ImageMedia extends Media {
  constructor(name, data) {
    super(name, data)
    this.data = data
    this.name = name
    this.image = data.image
    // console.log(this.data.id)
  }

  createImage() {
    const $_image = `
      <div class="card" tabindex="0" role="button" aria-label="${this.data.title}">
        <div class="img_card">
          <img src="assets/images/${this.name.replace(' ', '_')}/${this.image}" alt="${this.title}" />
        </div>
        <div class="legend">
          <h2>${this.data.title}</h2>
          <span class="likes">${this.data.likes} <i class="fa-solid fa-heart"></i></span>
        </div>
      </div>
      `
      // console.log($_image);
    return $_image;
  }
}

