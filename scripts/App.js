import PhotographersApi from "../data/data.js"

class App {
  constructor() {
    this.$_photographerSection = document.querySelector('.photographer_section')
    
    this.$_photographersApi = new PhotographersApi("https://benji-devw.github.io/Front-End-Fisheye/data/photographers.json")
  }

  async main() {
    const $_photographers = await this.$_photographersApi.getPhotographers();
    let photographerCardsHTML = '';

    $_photographers.forEach(photographer => {
      const $_photographerCard = photographer.createPhotographerCard();
      photographerCardsHTML += $_photographerCard;
      this.$_photographerSection.innerHTML = photographerCardsHTML;
    });
  }
}

const app = new App()
app.main()