import ImageMedia from "../models/Image.js";
import PhotographersApi from "../../data/data.js";
import VideoMedia from "../models/Video.js";
import ContactModal from "../utils/contactForm.js";
// import Slider from "../utils/slider.js";
import Modal from "../utils/Modal.js";
import ContactModel from "../models/contact.js";


/**
  * @function getIdQuery
  * @description Get Photographer id
  * @param  id - The url params ?id (string)
  **********************************/
function getIdQuery() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  // console.log(typeof(urlParams.get('id')));
  return urlParams.get('id');
}


/**
  * Main Class for contruct photographer page
  * @class PhotographerPage
  **********************************/
export default class PhotographerPage {
  constructor() {
    this.$photographersApi = new PhotographersApi('../../data/photographers.json');
    this.$photographer_infos = document.querySelector('#photographer_infos');
    this.$image_header = document.querySelector('#image_header');
    this.$gallery = document.querySelector('.gallery');
    this.$openContactModal = document.querySelector('.contact_button');
    this.$closeContactModal = document.querySelector('.close-modal');
    // this.$submitContactButton = document.querySelector('.sumit_button');
    this.$totalsLikes = document.querySelector('.likes');
    this.$price = document.querySelector('.price');
  }

  async main() {
    //** Get Photographer by id */
    const photographerWithMedias = await this.$photographersApi.getPhotographerWithMedias(getIdQuery())

    //** Create Photographer */
    const photographerEvents = new PhotographerInstance(photographerWithMedias)
    photographerEvents.getBanner()
    photographerEvents.getCardsMedias()
    photographerEvents.getTotals()
    photographerEvents.addLike()

    //** Create Modal Slider */
    // const slider = new SliderInstance(photographerWithMedias.medias)
    // slider.getSlider()

    //** Create Modal Contact */
    const contact = new ContactInstance(photographerWithMedias.name)
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
    <span class="total-likes">${parseInt(counterLikes)}</span>
    <i class="fa-solid fa-heart"></i>
    `;
    this.$price.innerHTML = `
    <span>${this.photographer.price}€ / jour</span>
    `;
  }
  
  addLike() {
    const cards = document.querySelectorAll('.card');
    const addTotalLikes = document.querySelector('.total-likes');
  
    cards.forEach(card => {
      let addLikeButton = card.querySelector('.add-like');
      let addLikeToCard = card.querySelector('.likes');
      let likes = parseInt(addLikeToCard.textContent, 10);
      let likedSwitch = true
  
      addLikeButton.addEventListener('click', () => {
        if (likedSwitch) {
          likes++;
          addTotalLikes.textContent ++;
          addLikeButton.classList.add("liked"); 
        } else {
          likes--;
          addTotalLikes.textContent --;
          addLikeButton.classList.remove("liked"); 
        }
        addLikeToCard.textContent = likes;
        likedSwitch = !likedSwitch
      });
    });
  }

}


/**
  * @class SliderInstance
  * @description Represents an instance of a Slider Modal
  **********************************/
class SliderInstance {
  constructor(medias) {
    this.medias = medias
  }
  getSlider() {
    // const slider = new Slider(photographer.media)
    const cards = document.querySelectorAll('.card');
    const test = new Modal(this.medias)

    const handleCardInteraction = (card) => {
      // const cardId = card.id;
      // console.log(this.medias);
      test.createModal()
      test.showModal()
    };
    
    cards.forEach((card) => {
      card.addEventListener('click', () => { 
        // console.log(this.modalContainer);
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
  * @param {string} name - The Photographer name
  **********************************/
class ContactInstance extends PhotographerPage {
  constructor(name){
    super(name)
    this.name = name
  }

  getContact() {
    const getContactModel = new ContactModel(this.name);
    const modal = new Modal(getContactModel.createContact())

    if (getContactModel instanceof(ContactModel)){
      this.$openContactModal.addEventListener("click", () => {
        modal.createModal()
      })
    }
  }
}



const app = new PhotographerPage()
app.main()