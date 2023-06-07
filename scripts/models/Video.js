import { Media } from "./Media.js";

/**
 * @class VideoMedia
 * Create Video
 */
export default class VideoMedia extends Media {
  constructor(name, data) {
    super(name, data)
    this.data = data
    this.name = name
    this.video = data.video
  }

  createVideo() {
    const $_video = `
      <div class="card">
        <div class="media_card">
          <video controls>
          <source type="video/mp4" src="assets/images/${this.name.replace(' ', '_')}/${this.data.video}" alt="${this.data.title}">
        </div>
        <div class="legend">
          <h2>${this.data.title}</h2>
          <span class="likes">${this.data.likes} <i class="fa-solid fa-heart"></i></span>
        </div>
      </div>
      `
    return $_video;
  }
}
