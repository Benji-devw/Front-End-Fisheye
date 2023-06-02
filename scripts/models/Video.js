//**
//*  CONSTRUCTEUR PATTERN */
//*/

import { Media } from "./Media.js";


export default  class VideoMedia extends Media {
  constructor(data) {
    super(data)
    this._viedo = data.viedo
    // this.data = data;
    // this.photographerName = photographerName;
  }

  // render() {
  //   return `
  //     <div class="card">
  //       <div class="img_card">
  //         <video controls>
  //         <source type="video/mp4" src="assets/images/${this.photographerName.replace(' ', '_')}/${this.data.video}" alt="${this.data.title}">
  //       </div>
  //       <div class="legend">
  //         <h2>${this.data.title}</h2>
  //         <span class="likes">${this.data.likes} <i class="fa-solid fa-heart"></i></span>
  //       </div>
  //       </div>
  //       `;
  // }
}
