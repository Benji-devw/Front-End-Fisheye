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
      <div id="card-${this.id}" class="card" aria-label="titre ${this.title}, nombre de like ${this.likes}">
        <div class="card-media">
          <video class="media" role="button">
          <source type="video/mp4" src="assets/images/${this.name.replace(' ', '_')}/${this.video}" alt="${this.title}">
        </div>
        <div class="legend">
          <h2>${this.title}</h2>
          <div class="likes-content">
            <span class="likes-${this.id}">${this.likes} </span>
            <i class="fa-solid fa-heart add-like" title="like" aria-hidden="true"   tabindex="0" role="button"></i>
          </div>
        </div>
      </div>
      `
    return $_video;
  }


  createSliderItem(currentId) {
    return `
      <li class="slide" ${currentId == `card-${this.id}` ? 'data-active' : ''}>
        <video tabindex="0" src="assets/images/${this.name.replace(' ', '_')}/${this.video}" controls></video>
        <p class="slide-title">${this.title}</p>
      </li>
    `;
  }
}
