import PhotographersApi from "../../data/data.js";
import Photographer from "../utils/Photographer.js";

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
      this.$photographerSection += photographer.createPhotographerBanner()
      // console.log(photographer);

      const Medias = photographer._media.map(media => new MediasFactory(media, photographer._photographer.name))
      console.log(Medias);

      Medias.forEach(movie => {
        console.log(movie);
        // const Template = new Photographer(movie)
        this.$photographerSection +=  movie })

      // const test = photographer._media.map(data => new MediasFactory(data))
      // console.log(test);

      // const Medias = photographer._media.map(media => new MediasFactory(media, photographer._photographer.name))
      // console.log(Medias);
      // photographer._media.forEach(card => {
      //   this.$photographerSection += Medias(card, photographer._photographer.name)
      // })

      // photographer._media.forEach(card => {
      //   this.$photographerSection += photographer.createPhotographerMedia(card, photographer._photographer.name)
      // })
  }
}

const app = new PhotographerFactory()
app.main()