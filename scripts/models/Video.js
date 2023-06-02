import { Media } from "./Media.js";

export default class VideoMedia extends Media {
  constructor(data) {
    super(data)
    this.video = data.video
    console.log("VIDEO");
  }

  createVideo() {
    const $_video = `
      <div class="card">
        <div class="media_card">
          <video controls>
          <source type="video/mp4" src="assets/images/${this.photographerName.replace(' ', '_')}/${this.video}" alt="${this.title}">
        </div>
        <div class="legend">
          <h2>${this.title}</h2>
          <span class="likes">${this.likes} <i class="fa-solid fa-heart"></i></span>
        </div>
      </div>
      `
      // console.log($_video);
    return $_video;
  }
}
