import PhotographersApi from "../../data/data.js";

function getIdQuery() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('id');
}

export default class PhotographerFactory {
  constructor() {
    this.$photographerSection = document.querySelector('.photographer_section')
    this.$gallery = document.querySelector('.gallery');
    this.photographersApi = new PhotographersApi("../../data/photographers.json")
  }

  async main() {
    const photographer = await this.photographersApi.getPhotographer(getIdQuery())
      this.$photographerSection += photographer.createPhotographerBanner()
      // console.log(this.$photographerSection);


      photographer._media.forEach(mediaData => {
        const mediaFactory = new MediasFactory(mediaData, photographer._photographer.name);
        const mediaHTML = mediaFactory.render();
        this.$gallery.insertAdjacentHTML('beforeend', mediaHTML);
      });
  }
}

const app = new PhotographerFactory()
app.main()