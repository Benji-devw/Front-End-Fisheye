import PhotographersApi from "../../data/data.js";
import ImageMedia from "../models/Image.js";
import VideoMedia from "../models/Video.js";
import Modal from "../utils/Modal.js";
import ContactModel from "../models/contact.js";
import SliderModel from "../utils/slider.js";





/**
  * @function FocusTrap
  * @description Get Elements focusable in modal
  * @param {object} element - The html element
  **********************************/
function FocusTrap(element) {
  const focusableElements = element.querySelectorAll(
    'video, a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
  );

  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', (e) => {
    var isTabPressed = (e.key === 'Tab' || e.keyCode === 9);
    if (!isTabPressed) return; 
    
    if ( e.shiftKey ) /* shift + tab */ {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
          e.preventDefault();
        }
      } else /* tab */ {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
          e.preventDefault();
        }
      }
  });

}





/**
  * @function getIdQuery
  * @description Get Photographer id
  * @param {string} id - The url params ?id
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
    this.$photographerInfos = document.querySelector('#photographer_infos_banner');
    this.$imageBanner = document.querySelector('#image_banner');
    this.$contactBtn = document.querySelector('.contact_btn_banner')
    this.$openContactModal = document.querySelector('.contact_btn');
    this.$gallery = document.querySelector('.gallery');
    this.$totals_likes = document.querySelector('.likes');
    this.$price = document.querySelector('.price');
    this.$submitContact = document.querySelector('.submit_btn');
    this.$filter = document.querySelector('#filter-select')
  }

  async main() {
    //** Get Photographer by id */
    const photographerWithMedias = await this.$photographersApi.getPhotographerWithMedias(getIdQuery())

    //** Create Photographer elemenrs */
    const photographerEvents = new PhotographerInstance(photographerWithMedias)
    photographerEvents.getBanner()
    photographerEvents.getTotals()
    photographerEvents.getFilter('likes')
    photographerEvents.getCardsMedias()

    //** Create Filter */
    this.$filter.addEventListener('change', () => {
      // console.log(this.$filter.value);
      photographerEvents.getFilter(this.$filter.value)
      photographerEvents.getCardsMedias()
    })



    // AJOUTER FOCUSTRAP pour boulez avec touche tab dans la modal
    //** Create Modal Contact */
    const contact = new ContactInstance(photographerWithMedias.name)
    contact.getFormContact()
  }
}





/**
  * @class PhotographerInstance
  * @description Represents an instance of a photographer on the photographer page
  * @param {object} Photographer - The photographer
  **********************************/
class PhotographerInstance extends PhotographerPage {
  constructor(photographer) {
    super(photographer)
    this.photographer = photographer
  }


  getBanner() {
    const {$_banner, $_contactBtn, $_image} = this.photographer.createPhotographerBanner()
    this.$photographerInfos.innerHTML = $_banner
    this.$contactBtn.innerHTML = $_contactBtn
    this.$imageBanner.innerHTML = $_image
  }


  getFilter(sortBy) {
    this.photographer.medias = this.photographer.medias.sort((firstElement, secondElement) => secondElement[sortBy] > firstElement[sortBy] ? 1 : -1)
    sortBy === "title" && this.photographer.medias.reverse()
    // console.log(this.photographer.medias);
  }


  getCardsMedias() {
    this.$gallery.innerHTML = null;

    this.photographer.medias.forEach(mediaElement => {
      let cardHTML = '';

      if (mediaElement instanceof ImageMedia) {
        cardHTML =  mediaElement.createImage();
      } else if (mediaElement instanceof VideoMedia) {
        cardHTML =  mediaElement.createVideo();
      }

      const cardElement = document.createElement('div');
      cardElement.classList.add('card-container')
      cardElement.innerHTML = cardHTML;

      this.addLike(cardElement, mediaElement)
      this.$gallery.appendChild(cardElement);
    });

    //** Create Modal Slider */
    const slider = new SliderInstance(this.photographer)
    slider.getSlider()
  }


  addLike(cardElement, mediaElement) {
    const addTotalLikes = document.querySelector('.total-likes');

    let likes = mediaElement.likes;
    let likedSwitch = true;
    const addLikeButton = cardElement.querySelector('.add-like');
    const addLikeToCard = cardElement.querySelector(`.likes-${mediaElement.id}`)

    const addLikeEvent = () => {
      if (likedSwitch) {
        likes++;
        addTotalLikes.textContent++;
        addLikeButton.classList.add('liked'); 
      } else {
        likes--;
        addTotalLikes.textContent--;
        addLikeButton.classList.remove('liked'); 
      }
      addLikeToCard.textContent = likes;
      likedSwitch = !likedSwitch;
    }
    addLikeButton.addEventListener('click', (event) => {
      addLikeEvent()
    });
    addLikeButton.addEventListener('keydown', (event) => {
      if(event.key === "Enter") addLikeEvent()})
  }


  getTotals() {
    const counterLikes = this.photographer.totalLikes()

    this.$totals_likes.innerHTML = `
    <span class="total-likes">${parseInt(counterLikes)}</span>
    <i class="fa-solid fa-heart"></i>
    `;
    this.$price.innerHTML = `
    <span>${this.photographer.price}€ / jour</span>
    `;
  }

}





/**
  * @class SliderInstance
  * @description Represents an instance of a Slider Modal
  **********************************/
class SliderInstance {
  constructor(datas) {
    this.datas = datas
    this.id = ''
  }

  getSlider() {
    const cards = document.querySelectorAll('.card');
    
    const handleSlider = () => {
      const sliderModel = new SliderModel(this.datas)
      const modal = new Modal(sliderModel.createSlider(this.id))
      modal.createModal()
      sliderModel.getNavigation()
      FocusTrap(document.querySelector('.modal-container'))
    };

    cards.forEach(card => {
      const cardMedia = card.querySelector('.media');
      const cardEvent = () => {
        this.id = card.id;
        handleSlider();
      }

      cardMedia.addEventListener('click', () => { 
        cardEvent()
      });
      cardMedia.addEventListener('keydown', (event) => {
        if (event.key === "e") {
          console.log(cardMedia );
          cardEvent()
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
  
  getFormContact() {
    const handleSlider = () => {
      const getContactModel = new ContactModel(this.name);
      const modal = new Modal(getContactModel.createContact())
      modal.createModal()
      getContactModel.checkForm()
      FocusTrap(document.querySelector('.modal-container')) 
    }

    this.$openContactModal.addEventListener("click", () => {
      handleSlider()
    })
    this.$openContactModal.addEventListener("keydown", (e) => {
      if (e.key === "e" ) {
        handleSlider()
      }})
    }
}





const app = new PhotographerPage()
app.main()