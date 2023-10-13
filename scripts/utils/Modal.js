
/**
 * @class Modal
 * @description Modal class for creating and showing modals with close button
 * @param {HTMLElement} children - The children of the modal
 * @exports Modal
 */
<<<<<<< HEAD
export default class Modal {
  constructor(children) {
    this.children       = children;
    this.modalElement   = null;
    this.modalContainer = document.createElement('div');
    this.modalElement   = document.createElement('div');
    this.main           = document.querySelector('#main')
    this.main = document.querySelector('#main')
    this.modalContainer.classList.add('modal-container');
    this.modalElement.classList.add('modal');
  }

  /**
   * Create modal and append it to the body
   * @method createModal
   * @returns {void}
   * */
  createModal() {
    this.modalElement.innerHTML = this.children
    this.modalContainer.appendChild(this.modalElement)
    this.modalContainer.setAttribute('role', 'dialog')
    this.modalContainer.setAttribute('aria-label', 'image closeup view')
    document.body.appendChild(this.modalContainer);
    this.showModal()
  }

  /**
   * @method hideModal
   * @description Hide modal and remove it from the body
   * @returns {void}
   */
  hideModal() {
    this.modalContainer.remove();
    document.body.style.overflow = 'auto';
    this.main.setAttribute('aria-hidden', 'false');
    this.modalContainer.setAttribute('aria-hidden', 'true')
  }

  /**
   * @method showModal
   * @description Show modal and add event listener on close button
   * @returns {void}
   * */  hideModal() {
    this.modalContainer.remove();
    document.body.style.overflow = 'auto';
    this.main.setAttribute('aria-hidden', 'false');
    this.modalContainer.setAttribute('aria-hidden', 'true')

  }

  showModal() {
    const closeModalBtn = document.querySelector('.close-modal');
    document.body.style.overflow = 'hidden';
    this.main.setAttribute('aria-hidden', 'true');
    this.modalContainer.setAttribute('aria-hidden', 'false')

    closeModalBtn.focus()
    closeModalBtn.addEventListener("click", () => {
      this.hideModal()
    })
    closeModalBtn.addEventListener("keydown", (event) => {
     if (event.key === "Enter" || event.keyCode === 13) this.hideModal()
    })
  }
}
