//**
//*  CONSTRUCTEUR PATTERN */
//*/


class ImageMedia {
  constructor(card, photographerName) {
    this.card = card;
    this.photographerName = photographerName;
  }

  createImageMedia() {
    const $gallery = document.querySelector('.gallery');
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    cardDiv.innerHTML = `
        <div class="img_card"><img src="assets/images/${this.photographerName.replace(' ', '_')}/${this.card.image}" alt="${this.card.title}" /></div>
        <div class="legend">
          <h2>${this.card.title}</h2>
          <span class="likes">${this.card.likes}<span>
        </div>
      `;
      $gallery.appendChild(cardDiv);
  }
}




// class ImageMedia {
//   constructor(card, photographerName) {
//     this.photographerName = photographerName
//       this._photographerId = card.photographerId
//       this._title = card.title
//       this._image = card.image
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
//       return `/assets/images/${this.photographerName.replace(" ", "_")}/${this._image}`
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

