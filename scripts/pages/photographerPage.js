import PhotographersApi from "../../data/data.js";
import MediasFactory from "../factories/MediasFactory.js";
import ContactModal from "../utils/contactForm.js";
import Slider from "../utils/slider.js";

function getIdQuery() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('id');
}


/**
 * @class PhotographerPage
 * Display Photographer by id
 */
export default class PhotographerPage {
  constructor() {
    this.$photographer_infos = document.querySelector('#photographer_infos')
    this.$image_header = document.querySelector('#image_header')
    this.$gallery = document.querySelector('.gallery');
    this.$openContactModal = document.querySelector('.contact_button');
    this.$closeContactModal = document.querySelector('.close_modal')
    this.$submitContactButton = document.querySelector('.sumit_button');
    
    this.$photographersApi = new PhotographersApi('../../data/photographers.json')
  }
  
  async main() {
    const photographer = await this.$photographersApi.getPhotographer(getIdQuery())
    
    
    const {$_banner, $_image} = photographer.createPhotographerBanner()
    this.$photographer_infos.innerHTML = $_banner
    this.$image_header.innerHTML = $_image
    
    
    photographer.media.forEach(media => {
      const factory = new MediasFactory(photographer.name, media);
      const medias = factory.createMedia()
      // console.log(medias);
      this.$gallery.innerHTML += medias
    });
    
    
    const slider = new Slider(photographer.media)
    const $card = document.querySelector('.card')
    $card.addEventListener("click", () => {
      // slider.test()
      console.log('test');

    })


    const contactModal = new ContactModal(photographer.name);
    this.$openContactModal.addEventListener("click", () => {contactModal.openModal()});
    this.$closeContactModal.addEventListener("click", () => {contactModal.closeModal()});
    this.$submitContactButton.addEventListener("click", () => {contactModal.onSubmitForm()});
  }
}

const app = new PhotographerPage()
app.main()