export default class Modal {
  constructor(children) {
    this.children = children;
    this.modalElement = null;
    this.modalContainer = document.createElement('div');
    this.modalElement = document.createElement('div');
    this.modalContainer.classList.add('modal-container');
    this.modalElement.classList.add('modal');
    this.main = document.querySelector('#main')
  }

  createModal() {
    this.modalElement.innerHTML = this.children
    this.modalContainer.appendChild(this.modalElement)
    this.modalContainer.setAttribute('role', 'dialog')
    document.body.appendChild(this.modalContainer);
    this.showModal()
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
    closeModalBtn.addEventListener("keydown", (e) => {
      e.key === "Enter" && this.hideModal()
    })
  }
  
  hideModal() {
    this.modalContainer.remove();
    document.body.style.overflow = 'auto';
    this.main.setAttribute('aria-hidden', 'false');
    this.modalContainer.setAttribute('aria-hidden', 'true')

  }
}
