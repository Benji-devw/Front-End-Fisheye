class ContactModal {
  constructor(name) {
    this._name = name
    this._contactModal = document.getElementById("contact_modal");
    this._submitContactButton = document.querySelector(".sumit_button");
    this._closeContactModal = document.querySelector(".close_modal")
    this._btnContactModal = document.querySelector(".contact_button")
    this._contactName = document.querySelector(".contact_name")
    this._firstNameInput = document.getElementById("fistName");
    this._lastNameInput = document.getElementById("lastName");
    this._emailInput = document.getElementById("email");
    this._messageTextarea = document.getElementById("message");
  }

  openModal() {
    document.body.style.overflow = 'hidden';
    document.body.setAttribute('aria-hidden', 'false')
    this._contactModal.setAttribute('aria-hidden', 'true')
    this._contactModal.style.display = "block";
    this._contactName.innerHTML = this._name
    this._closeContactModal.focus()
  }
  
  closeModal() {
    document.body.style.overflow = 'visible';
    document.body.setAttribute('aria-hidden', 'true')
    this._contactModal.setAttribute('aria-hidden', 'false')
    this._contactModal.style.display = "none";
    this._btnContactModal.focus()
  }

  access() {

  }

  onSubmitForm() {
    const firstName = this._firstNameInput.value;
    const lastName = this._lastNameInput.value;
    const email = this._emailInput.value;
    const message = this._messageTextarea.value;

    console.log({contact: firstName, lastName, email, message});
    //** Reset Form */
    // this._firstNameInput.value = "";
    // this._lastNameInput.value = "";
    // this._emailInput.value = "";
    // this._messageTextarea.value = "";
    this.closeModal()
  }
}












// class ModalContact {
//   static openModal() {
//     const modal = document.getElementById("contact_modal");
//     document.body.style.overflow = 'hidden';
//     modal.style.display = "block";
//   }

//   static closeModal() {
//     const modal = document.getElementById("contact_modal");
//     document.body.style.overflow = 'visible';
//     modal.style.display = "none";
//   }

//   static createModalContact(data) {
//     const modalContact = `

// 			<div class="modal_content">
//         <div class="modal">
//           <header>
//             <h2>Contactez-moi ${data}</h2>
//             <img src="assets/icons/close.svg" onclick="${this.openModal()}" />
//           </header>
//           <form id="myForm" action="" method="POST">
//             <div class="form-group">
//               <label for="fistName">Prénom</label>
//               <input id="fistName" type="text" placeholder="fistName" required />
//               <label for="lastName">Nom</label>
//               <input id="lastName" type="text" placeholder="lastName" required />
//               <label for="email">Email</label>
//               <input id="email" type="email" placeholder="email" required />
              
//               <label for="message">Votre message:</label>
//               <textarea id="message" name="message" placeholder="Message..." rows="5" cols="33"></textarea>
//             </div>
//             <!-- <button class="contact_button" type="submit" onclick="Form.openModal()">Envoyer</button> -->
//           </form>
//           <button class="contact_button" onclick="Form.onSumitForm()">Envoyer</button>
//         </div>
// 			</div>

//     `;
//     return modalContact;
//   }
// }

// export default ModalContact;