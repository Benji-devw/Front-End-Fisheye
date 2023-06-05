import { Media } from "./Media.js";

export default class ImageMedia extends Media {
  constructor(data) {
    super(data)
    this._image = data.image
    // this._id = id;
    // this._data = data;
    // this._photographerName = photographerName;
  }

  // render() {
  //   return `
  //     <div class="card" tabindex="${this._id}" role="button" aria-label="${this._data.title}">
  //       <div class="img_card">
  //         <img src="assets/images/${this._photographerName.replace(' ', '_')}/${this._data.image}" alt="${this._data.title}" />
  //       </div>
  //       <div class="legend">
  //         <h2>${this._data.title}</h2>
  //         <span class="likes">${this._data.likes} <i class="fa-solid fa-heart"></i></span>
  //       </div>
  //     </div>
  //   `;
  // }
}

