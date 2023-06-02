import { Media } from "./Media.js";

export default class VideoMedia extends Media {
  constructor(data) {
    super(data)
    this.video = data.video
    // this.data = data;
    // this.photographerName = photographerName;
    console.log("VIDEO");
  }

  createVideo() {
    const $_video = `
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
    return $_video;
  }
}
