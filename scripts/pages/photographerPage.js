import PhotographersApi from "../../data/data.js";
import MediasFactory from "../factories/MediasFactory.js";
import { ContactModal } from "../utils/contactForm.js";

function getIdQuery() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('id');
}

export default class PhotographerPage {
  constructor() {
    this.$photographerSection = document.querySelector('.photographer_section')
    this.$photographer_infos = document.querySelector('#photographer_infos')
    this.$image_header = document.querySelector('#image_header')
    this.$gallery = document.querySelector('.gallery');
    this.$contactModal = document.querySelector('#contact_modal')
    this.$openContactModal = document.querySelector(".contact_button");
    this.$closeContactModal = document.querySelector(".close_modal")
    this.$submitContactButton = document.querySelector(".sumit_button");

    this.$photographersApi = new PhotographersApi("../../data/photographers.json")
  }

  async main() {
    const photographer = await this.$photographersApi.getPhotographer(getIdQuery())
    // console.log(photographer);

    const {$_banner, $_image} = photographer.createPhotographerBanner()
    this.$photographer_infos.innerHTML = $_banner
    this.$image_header.innerHTML = $_image

    photographer.media.forEach(media => {
      const factory = new MediasFactory(photographer.name, media);
      const medias = factory.createMedia()
      // console.log(medias);
      this.$gallery.innerHTML += medias
    });


    /**
     * Open close and sumit form contact
     * 
     * @class ContactModal
     */
    const contactModal = new ContactModal(photographer.name);
    this.$openContactModal.addEventListener("click", () => {contactModal.openModal()});
    this.$closeContactModal.addEventListener("click", () => {contactModal.closeModal()});
    this.$submitContactButton.addEventListener("click", () => {contactModal.onSubmitForm()});
  }
}

const app = new PhotographerPage()
app.main()