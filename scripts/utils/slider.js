/**
 * @class Slider
**********************************/
export default class SliderModel {
  constructor(data) {
    this.name =  data.name
    this.medias = data.medias
  }


  getNavigation(id) {
    const buttons = document.querySelectorAll('.carousel-nav');
    const closeModal = document.querySelector('.close-modal')
    const lastFocus = document.querySelector(`#${id} .media`)

    if (closeModal) {
      closeModal.addEventListener('click', () => lastFocus.focus())
      closeModal.addEventListener('keydown', (event) => {
        if (event.key === "Enter" || event.keyCode === 13) lastFocus.focus()
      })
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const offset = btn.dataset.carouselBtn === 'next' ? 1 : -1
        const slides = btn.closest('.slider-body').querySelector('[data-slides]')
        const activeSlide = slides.querySelector('[data-active]')

        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = "true"
        delete activeSlide.dataset.active
      })
    })
  }

  
  createSlider(currentId) {
    return `
      <div class="slider-container" aria-label="Slider Medias">
        <div class="slider-content">
    
          <div class="slider-header">
            <button class="close-modal" aria-label="Close dialog"><img src="assets/icons/close.svg" alt="close" /></button>
          </div>
    
          <div class="slider-body">
            <button class="carousel-nav prev" data-carousel-btn="prev" aria-label="Previous image">&lt;</button>
          
            <div id="image-carousel" class="carousel" data-carousel>
              <ul data-slides>
                ${this.medias.map((media) => media.createSliderItem(currentId))}
              </ul>
            </div>
            <button class="carousel-nav next" data-carousel-btn="next" aria-label="Next image">&gt;</button>
            
          </div>
        </div>
      </div>
    `;
  }
}