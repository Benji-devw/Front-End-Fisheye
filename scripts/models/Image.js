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
