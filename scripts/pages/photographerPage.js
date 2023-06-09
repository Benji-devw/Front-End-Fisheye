import ImageMedia from "../models/Image.js";
import PhotographersApi from "../../data/data.js";
import VideoMedia from "../models/Video.js";
import ContactModal from "../utils/contactForm.js";
// import Slider from "../utils/slider.js";

/**
  * @function getIdQuery
  * @description Get Photographer id
  * @param  id - The url params ?id (string)
  **********************************/
function getIdQuery() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  console.log(typeof(urlParams.get('id')));
  return urlParams.get('id');
}


/**
  * @class PhotographerPage
  **********************************/
export default class PhotographerPage {
  constructor() {
    this.$photographersApi = new PhotographersApi('../../data/photographers.json')
    this.$photographer_infos = document.querySelector('#photographer_infos')
    this.$image_header = document.querySelector('#image_header')
    this.$gallery = document.querySelector('.gallery');
    this.$openContactModal = document.querySelector('.contact_button');
    this.$closeContactModal = document.querySelector('.close_modal')
    this.$submitContactButton = document.querySelector('.sumit_button');
    this.$totalsLikes = document.querySelector('.likes')
    this.$price = document.querySelector('.price')
  }
  
  async main() {
    //** Get Photographer by id */
    const photographerWithMedias = await this.$photographersApi.getPhotographerWithMedias(getIdQuery())
    
    //** Create Photographer */
    const photographer = new PhotographerInstance(photographerWithMedias)
    photographer.getBanner()
    photographer.getCardsMedias()
    photographer.getTotals()
    photographer.addLike()

    //** Create Modal Slider */
    const slider = new SliderInstance(photographer.medias)
    // slider.getSlider()
    
    //** Create Modal Contact */
    const contact = new ContactInstance(photographer.name)
    contact.getContact()
  }
}


/**
  * @class PhotographerInstance
  * @description Represents an instance of a photographer on the photographer page
  * @param Photographer - The photographer object
  **********************************/
class PhotographerInstance extends PhotographerPage {
  constructor(photographer) {
    super(photographer)
    this.photographer = photographer
  }

  getBanner() {
    const {$_banner, $_image} = this.photographer.createPhotographerBanner()
    this.$photographer_infos.innerHTML = $_banner
    this.$image_header.innerHTML = $_image
  }

  getCardsMedias() {
    this.photographer.medias.forEach(media => {
      if (media instanceof ImageMedia ){
        this.$gallery.innerHTML += media.createImage()
      } else if (media instanceof VideoMedia) {
        this.$gallery.innerHTML += media.createVideo()
      }
    });
  }

  getTotals() {
    const counterLikes = this.photographer.totalLikes()
    this.$totalsLikes.innerHTML = `
    <span>${counterLikes}</span>
    <i class="fa-solid fa-heart"></i>
    `;
    const price = this.photographer.price
    this.$price.innerHTML = `
    <span>${price}€ / jour</span>
    `;
  }

  
  addLike() {
    const addLike = document.querySelector('.add-like')
   addLike.addEventListener('click', () => {
      console.log('dqsdqsdqsd');

    })
  }

}


/**
  * @class SliderInstance
  * @description Represents an instance of a Slider Modal
  **********************************/
class SliderInstance {
  getSlider() {
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
  * @description Represents an instance of a Contact Modal
  * @param name - The Photographer name string
  **********************************/
class ContactInstance extends PhotographerPage {
  constructor(name){
    super(name)
    this.name = name
  }

  getContact() {
    const contactModal = new ContactModal(this.name);
    this.$openContactModal.addEventListener("click", () => {contactModal.openModal()});
    this.$closeContactModal.addEventListener("click", () => {contactModal.closeModal()});
    this.$submitContactButton.addEventListener("click", () => {contactModal.onSubmitForm()});
  }
}



const app = new PhotographerPage()
app.main()