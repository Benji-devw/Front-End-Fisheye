<<<<<<< HEAD
export default class Modal {
  constructor(children) {
    this.children = children;
    this.modalElement = null;
    this.modalContainer = document.createElement('div');
    this.modalElement = document.createElement('div');
    this.main = document.querySelector('#main')
    this.modalContainer.classList.add('modal-container');
    this.modalElement.classList.add('modal');
  }

  createModal() {
    this.modalElement.innerHTML = this.children
    this.modalContainer.appendChild(this.modalElement)
    this.modalContainer.setAttribute('role', 'dialog')
    this.modalContainer.setAttribute('aria-label', 'image closeup view')
    document.body.appendChild(this.modalContainer);
    this.showModal()
  }

  hideModal() {
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
=======
export default class Modal {
  constructor(children) {
    this.children       = children;
    this.modalElement   = null;
    this.modalContainer = document.createElement('div');
    this.modalElement   = document.createElement('div');
    this.main           = document.querySelector('#main')
    this.modalContainer.classList.add('modal-container');
    this.modalElement.classList.add('modal');
  }

  createModal() {
    this.modalElement.innerHTML = this.children
    this.modalContainer.appendChild(this.modalElement)
    this.modalContainer.setAttribute('role', 'dialog')
    this.modalContainer.setAttribute('aria-label', 'image closeup view')
    document.body.appendChild(this.modalContainer);
    this.showModal()
  }

  hideModal() {
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
>>>>>>> main
