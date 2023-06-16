export default class Modal {
  constructor(children) {
    this.children = children;
    this.modalElement = null;
    this.modalContainer = document.createElement('div');
    this.modalElement = document.createElement('div');
    this.modalContainer.classList.add('modal-container');
    this.modalElement.classList.add('modal');
  }

  createModal() {
    this.modalElement.innerHTML = this.children
    this.modalContainer.appendChild(this.modalElement)
    document.body.appendChild(this.modalContainer);
    this.showModal()
  }

  showModal() {
    const closeModalBtn = document.querySelector('.close-modal');
    document.body.style.overflow = 'hidden';
    document.body.setAttribute('aria-hidden', 'false')
    this.modalElement.setAttribute('aria-hidden', 'true')
    closeModalBtn.focus()

    closeModalBtn.addEventListener("click", () => {
      this.hideModal()
    })
    closeModalBtn.addEventListener("keydown", (e) => {
      e.key === "e" && this.hideModal()
    })
  }

  hideModal() {
    this.modalContainer.remove();
    document.body.style.overflow = 'auto';
    document.body.setAttribute('aria-hidden', 'false');

  }
}
