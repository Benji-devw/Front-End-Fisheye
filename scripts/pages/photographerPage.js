import PhotographersApi from "../../data/data.js";

function getIdQuery() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('id');
}

export default class PhotographerPage {
  constructor() {
    this.$photographerSection = document.querySelector('.photographer_section')
    this.photographersApi = new PhotographersApi("../../data/photographers.json")
  }

  async main() {
    const photographer = await this.photographersApi.getPhotographer(getIdQuery())
      this.$photographerSection += photographer.createPhotographerBanner()

      photographer._media.forEach(card => {
        this.$photographerSection += photographer.createPhotographerMedia(card, photographer._photographer.name)
      })
  }
}

const app = new PhotographerPage()
app.main()