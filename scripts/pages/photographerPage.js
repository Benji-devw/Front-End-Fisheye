import PhotographersApi from "../../data/data.js";
import ImageMedia from "../models/Image.js";
import VideoMedia from "../models/Video.js";
import ContactModal from "../utils/contactForm.js";
// import Slider from "../utils/slider.js";

/**
 * @function get query id
**********************************/
function getIdQuery() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('id');
}



/**
 * @class PhotographerPage
**********************************/
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
    //** Get Photographer by id */
    const photographer = await this.$photographersApi.getPhotographerWithMedias(getIdQuery())
    console.log(photographer.totalLike)
    
    //** Create Banner Photographer */
    const {$_banner, $_image} = photographer.createPhotographerBanner()
    this.$photographer_infos.innerHTML = $_banner
    this.$image_header.innerHTML = $_image

    //** Create Card Photographer */
    photographer.medias.forEach(media => {
      if (media instanceof ImageMedia ){
        this.$gallery.innerHTML += media.createImage()
      } else if (media instanceof VideoMedia) {
        this.$gallery.innerHTML += media.createVideo()
      }
    });
    
    //** Create Modal Slider */
    const slider = new SliderInstance(photographer.medias)
    slider.getId()
    
    //** Create Modal Contact */
    const contact = new ContactInstance(photographer.name)
    contact.openContact()
  }
}



/**
 * @class SliderInstance
**********************************/
class SliderInstance {
  getId() {
    // const slider = new Slider(photographer.media)
    const cards = document.querySelectorAll('.card');
    const handleCardInteraction = (card) => {
      const cardId = card.id;
      console.log(cardId);
    };
    
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        handleCardInteraction(card);
      });
    
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          handleCardInteraction(card);
        }
      });
    });
  }
}


/**
 * @class ContactInstance
**********************************/
class ContactInstance extends PhotographerPage {
  constructor(name){
    super(name)
    this.name = name
  }
  openContact() {
    const contactModal = new ContactModal(this.name);
    this.$openContactModal.addEventListener("click", () => {contactModal.openModal()});
    this.$closeContactModal.addEventListener("click", () => {contactModal.closeModal()});
    this.$submitContactButton.addEventListener("click", () => {contactModal.onSubmitForm()});
  }
}



const app = new PhotographerPage()
app.main()