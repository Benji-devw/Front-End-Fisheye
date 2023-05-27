class VideoMedia {
  constructor(card, photographerName) {
    this.card = card;
    this.photographerName = photographerName;
  }

  play() {
    console.log(`Lecture de la vidéo ${this.card.video} pour le photographe ${this.photographerName}`);
  }
}