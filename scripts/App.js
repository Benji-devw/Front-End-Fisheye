import PhotographersApi from "../data/data.js"

class App {
  constructor() {
    this.$photographerSection = document.querySelector('.photographer_section')
    this.photographersApi = new PhotographersApi("../data/photographers.json")
  }

  async main() {
    const photographers = await this.photographersApi.getPhotographers()

    photographers.forEach(photographer => {
      this.$photographerSection.appendChild(photographer.createPhotographerCard())
    })
  }
}

const app = new App()
app.main()