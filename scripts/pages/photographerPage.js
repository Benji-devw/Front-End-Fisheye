import PhotographersApi from "../../data/data.js";
import ModalContact from "../utils/contactForm.js";

function getIdQuery() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('id');
}

export default class PhotographerPage {
  constructor() {
    this.$photographerSection = document.querySelector('.photographer_section')
    this.$contactSection = document.querySelector('.contact_modal')
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

    // Créer le modal de contact en utilisant les données du photographe
    // const modalContactHTML = ModalContact.createModalContact(photographer._photographer.name);
    // Insérer le modal de contact dans le document
    // document.body.insertAdjacentHTML('beforeend', modalContactHTML);

  }
}

const app = new PhotographerPage()
app.main()