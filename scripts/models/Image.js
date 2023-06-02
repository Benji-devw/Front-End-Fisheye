import { Media } from "./Media.js";

export default class ImageMedia extends Media {
  constructor(data) {
    super(data)
    this.image = data.image
    // this.data = data;
    // this.photographerName = photographerName;
    console.log("IMAGE");
  }

  createImage() {
    const $_image = `
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
    return $_image;
  }
}

