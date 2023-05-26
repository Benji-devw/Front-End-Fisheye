import PhotographersApi from "../../data/data.js";

function getIdQuery() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('id');
}

export default class PhotographerFactory {
  constructor() {
    this.$photographerSection = document.querySelector('.photographer_section')
    this.photographersApi = new PhotographersApi("../../data/photographers.json")
  }

  async main() {
    const photographer = await this.photographersApi.getPhotographer(getIdQuery())
    // const medias = await this.photographersApi.getMedias(getIdQuery())
    // console.log(photographer);
      this.$photographerSection += photographer.createPhotographerBanner()
      this.$photographerSection += photographer.createPhotographerMedia()
  }
}

const app = new PhotographerFactory()
app.main()