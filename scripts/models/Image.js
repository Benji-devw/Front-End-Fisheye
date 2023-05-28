//**
//*  CONSTRUCTEUR PATTERN */
//*/
class ImageMedia {
  constructor(data, photographerName) {
    this.data = data;
    this.photographerName = photographerName;
  }

  render() {
    return `
      <div class="card">
        <div class="img_card">
          <img src="assets/images/${this.photographerName.replace(' ', '_')}/${this.data.image}" alt="${this.data.title}" />
        </div>
        <div class="legend">
          <h2>${this.data.title}</h2>
          <span class="likes">${this.data.likes}</span>
        </div>
      </div>
    `;
  }
}

