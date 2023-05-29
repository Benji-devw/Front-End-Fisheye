import PhotographersApi from "../../data/data.js";
// import ModalContact from "../utils/contactForm.js";

function getIdQuery() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('id');
}

export default class PhotographerPage {
  constructor() {
    this.$photographerSection = document.querySelector('.photographer_section')
    this.$gallery = document.querySelector('.gallery');
    this.$contactModal = document.querySelector('#contact_modal')
    this.$openContactModal = document.querySelector(".contact_button");
    this.$closeContactModal = document.querySelector(".close_modal")
    this.$submitContactButton = document.querySelector(".sumit_button");

    this.$photographersApi = new PhotographersApi("../../data/photographers.json")
  }

  async main() {
    const photographer = await this.$photographersApi.getPhotographer(getIdQuery())
    this.$photographerSection += photographer.createPhotographerBanner()
    // console.log(this.$photographerSection);

    photographer._media.forEach(mediaData => {
      const mediaFactory = new MediasFactory(mediaData, photographer._photographer.name);
      const mediaHTML = mediaFactory.render();
      this.$gallery.insertAdjacentHTML('beforeend', mediaHTML);
    });

    // Instance ContactModal
    const contactModal = new ContactModal(photographer._photographer.name);
    this.$openContactModal.addEventListener("click", () => {contactModal.openModal()});
    this.$closeContactModal.addEventListener("click", () => {contactModal.closeModal()});
    this.$submitContactButton.addEventListener("click", () => {contactModal.onSubmitForm()});
    // this.$contactModal.addEventListener('click', () => {contactModal.access()});
  }
}

const app = new PhotographerPage()
app.main()