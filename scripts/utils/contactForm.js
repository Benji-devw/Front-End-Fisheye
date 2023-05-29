class ContactModal {
  constructor() {
    this._contact_modal = document.getElementById("contact_modal");
    this._firstNameInput = document.getElementById("fistName");
    this._lastNameInput = document.getElementById("lastName");
    this._emailInput = document.getElementById("email");
    this._messageTextarea = document.getElementById("message");
    this._submitButton = document.querySelector(".sumit_button");

    this.contactButton = document.querySelector(".contact_button");

    // Attacher le gestionnaire d'événement pour ouvrir la modal
    this.contactButton.addEventListener("click", this.openModal.bind(this));
  }

  openModal() {
    const modalElement = document.getElementById("contact_modal");
    modalElement.style.display = "block";
  }

  closeModal() {
    this._contact_modal.style.overflow = 'visible';
    this._contact_modal.style.display = "none";
  }

  onSubmitForm() {
    const firstName = this._firstNameInput.value;
    const lastName = this._lastNameInput.value;
    const email = this._emailInput.value;
    const message = this._messageTextarea.value;

    // Effectuer les actions souhaitées avec les données du formulaire
    // Par exemple, envoyer les données à un serveur, effectuer des validations, etc.
    console.log(firstName);
    // Réinitialiser les champs du formulaire après l'envoi
    this._firstNameInput.value = "";
    this._lastNameInput.value = "";
    this._emailInput.value = "";
    this._messageTextarea.value = "";
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