import { Media } from "./Media.js";

export default class ImageMedia extends Media {
  constructor(data) {
    super(data)
    this.image = data.image
    console.log("IMAGE");
    
  }

  createImage() {
    const $_image = `
      <div class="card" tabindex="${this.id}" role="button" aria-label="${this.title}">
        <div class="img_card">
          <img src="assets/images/${this.photographerName.replace(' ', '_')}/${this.image}" alt="${this.title}" />
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

