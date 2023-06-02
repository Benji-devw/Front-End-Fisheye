import PhotographersApi from "../data/data.js"

class App {
  constructor() {
    this.$photographerSection = document.querySelector('.photographer_section')
    this.$photographersApi = new PhotographersApi("../data/photographers.json")
  }

  async main() {
    
    const $_photographers = await this.$photographersApi.getPhotographers();

    $_photographers.forEach(photographer => {
      const $_article = document.createElement('article');
      $_article.setAttribute('aria-label', photographer._name);
  
      const $_photographerCard = photographer.createPhotographerCard();
      $_article.innerHTML = $_photographerCard;
  
      this.$photographerSection.appendChild($_article);
    });
  }
}

const app = new App()
app.main()