import PhotographersApi from "../../data/data.js";
import MediasFactory from "../factories/MediasFactory.js";
// import ModalContact from "../utils/contactForm.js";

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
      // const factory = new MediasFactory();
      // const medias = factory.createMedia(media)
      // console.log(media);

      const test = photographer.createMediaFactory(media)
      console.log(test);
      this.$gallery.innerHTML += test


      // const $_image = `
      // <div class="card" tabindex="${media.id}" role="button" aria-label="${media.title}">
      //   <div class="img_card">
      //     <img src="assets/images/${photographer.name.replace(' ', '_')}/${media.image}" alt="${media.title}" />
      //   </div>
      //   <div class="legend">
      //     <h2>${media.title}</h2>
      //     <span class="likes">${media.likes} <i class="fa-solid fa-heart"></i></span>
      //   </div>
      // </div>
      // `
      // this.$gallery.innerHTML += $_image
    });

 
    // const contactModal = new ContactModal(photographer._photographer.name);
    // this.$openContactModal.addEventListener("click", () => {contactModal.openModal()});
    // this.$closeContactModal.addEventListener("click", () => {contactModal.closeModal()});
    // this.$submitContactButton.addEventListener("click", () => {contactModal.onSubmitForm()});
    // this.$contactModal.addEventListener('click', () => {contactModal.access()});
  }
}

const app = new PhotographerPage()
app.main()