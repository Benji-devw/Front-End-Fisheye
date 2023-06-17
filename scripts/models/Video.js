import { Media } from "./Media.js";

/**
  * @class VideoMedia
  * @description Create Video element html
  * @param name - The photographer name string
  * @param data - The photographer media object
  **********************************/
export default class VideoMedia extends Media {
  constructor(name, data) {
    super(name, data)
    this.video = data.video
  }

  createVideo() {
    const $_video = `
    <div id="likes-${this.id}" class="card" tabindex="0" role="button" aria-label="${this.title}">
        <div class="media_card">
          <video controls>
          <source type="video/mp4" src="assets/images/${this.name.replace(' ', '_')}/${this.video}" alt="${this.title}">
        </div>
        <div class="legend">
          <h2>${this.title}</h2>
          <div class="likes-content">
            <span class="likes-${this.id}">${this.likes} </span>
            <i class="fa-solid fa-heart add-like" title="like" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      `
    return $_video;
  }
}
