//**
//*  CONSTRUCTEUR PATTERN */
//*/

class VideoMedia {
  constructor(card, photographerName) {
    this.card = card;
    this.photographerName = photographerName;
  }

  createPhotographerVideo(card, name) {
    const $gallery = document.querySelector('.gallery');
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    cardDiv.innerHTML = `
      <video controls width="250">
        <source src="assets/images/${name.replace(' ', '_')}/${card.video}">
      </video>
        <div class="legend">
          <h2>${card.title}</h2>
          <span class="likes">${card.likes}<span>
        </div>
      `;
      $gallery.appendChild(cardDiv);
  }
}


// class VideoMedia {
//   constructor(card, photographerName) {
//     this.photographerName = photographerName
//       this._photographerId = card.photographerId
//       this._title = card.title
//       this._video = card.video
//       this._price = card.price
//       this._likes = card.likes
//   }
//   get actor() {
//       return this._actor
//   }
//   get photographerId() {
//     return this.photographerId
//   }
//   get image() {
//       return `/assets/images/${this.photographerName.replace(" ", "_")}/${this._video}`
//   }
//   get price() {
//       return this._price
//   }
//   get likes() {
//       return this._likes
//   }
//   get title() {
//       return this._title
//   }
// }