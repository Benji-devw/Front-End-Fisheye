/**
  * @regex Form Contact
  * @textRegex Two letters min && autorize French alphabet
  * @emailRegex Two letters min all && autorize (-) or (_)
  **********************************/
var textRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{2,}$/;
var emailRegex = /^[a-zA-Z0-9-_.]{2,}@[a-zA-Z0-9]{1,61}\.[a-zA-Z]{2,}$/;



/**
  * @class ContactModal
  * @description Modal Events
  * @param name - The photographer name (string)
  **********************************/
export default class ContactModal {
  constructor(name) {
    this.name = name
    this.form = document.querySelector("#myForm");
    this.contactModal = document.getElementById("contact_modal");
    this.closeContactModal = document.querySelector(".close_modal")
    this.btnContactModal = document.querySelector(".contact_button")
    this.contactName = document.querySelector(".contact_name")
    this.firstNameInput = document.getElementById("fistName");
    this.lastNameInput = document.getElementById("lastName");
    this.emailInput = document.getElementById("email");
    this.messageTextarea = document.getElementById("message");
    this.datas = []
    this.errors = []
  }

  // openModal() {
  //   document.body.style.overflow = 'hidden';
  //   document.body.setAttribute('aria-hidden', 'false')
  //   this.contactModal.setAttribute('aria-hidden', 'true')
  //   this.contactModal.style.display = "block";
  //   this.contactName.innerHTML = this.name
  //   this.closeContactModal.focus()
  //   //** Initialise tabs */
  //   this.datas = []
  // }

  // closeModal() {
  //   document.body.style.overflow = 'visible';
  //   document.body.setAttribute('aria-hidden', 'true')
  //   this.contactModal.setAttribute('aria-hidden', 'false')
  //   this.contactModal.style.display = "none";
  //   this.btnContactModal.focus()
  // }

  inputChecker(bool, val, err) {
    const formDataError = document.getElementById(err)
    if (bool) {
      this.datas.push({champ: val.name, values: val.value.trim() })
      formDataError.setAttribute("data-error-visible", "false");
    } else {
      this.errors.push({champ: val.name, values: val.value.trim() })
      formDataError.setAttribute("data-error-visible", "true");
    }
  }

  onSubmitForm() {
    this.datas = []
    this.errors = []
    this.inputChecker(textRegex.test(this.firstNameInput.value), this.firstNameInput, 'firstData');
    this.inputChecker(textRegex.test(this.lastNameInput.value), this.lastNameInput, 'lastData');
    this.inputChecker(emailRegex.test(this.emailInput.value), this.emailInput, 'emailData');
    this.inputChecker(textRegex.test(this.messageTextarea.value), this.messageTextarea, 'areaData');

    console.log('Form errors !!! => ', this.errors);
    if (this.errors.length === 0) {
      console.log('Form sumited !!! => ', this.datas);
      this.closeModal()
      this.form.reset()
    }
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