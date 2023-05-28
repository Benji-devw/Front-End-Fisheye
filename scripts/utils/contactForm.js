// class Form {
//   static onSumitForm() {
//     const form = document.querySelector('#myForm');
//     const name = form.querySelector('#name').value;
//     const message = form.querySelector('#message').value;
    
//     console.log(name, message);
//     form.reset();
//   }

//    static openModal() {
//     const modal = document.getElementById("contact_modal");
//     document.body.style.overflow = 'hidden';
//     modal.style.display = "block";
//   }

//    static closeModal() {
//     const modal = document.getElementById("contact_modal");
//     document.body.style.overflow = 'visible';
//     modal.style.display = "none";
//   }

// }

class ModalContact {
     static openModal() {
    const modal = document.getElementById("contact_modal");
    document.body.style.overflow = 'hidden';
    modal.style.display = "block";
  }

   static closeModal() {
    const modal = document.getElementById("contact_modal");
    document.body.style.overflow = 'visible';
    modal.style.display = "none";
  }

  static createModalContact(data) {
    const modalContact = `

			<div class="modal_content">
        <div class="modal">
          <header>
            <h2>Contactez-moi ${data}</h2>
            <img src="assets/icons/close.svg" onclick="${this.openModal()}" />
          </header>
          <form id="myForm" action="" method="POST">
            <div class="form-group">
              <label for="fistName">Prénom</label>
              <input id="fistName" type="text" placeholder="fistName" required />
              <label for="lastName">Nom</label>
              <input id="lastName" type="text" placeholder="lastName" required />
              <label for="email">Email</label>
              <input id="email" type="email" placeholder="email" required />
              
              <label for="message">Votre message:</label>
              <textarea id="message" name="message" placeholder="Message..." rows="5" cols="33"></textarea>
            </div>
            <!-- <button class="contact_button" type="submit" onclick="Form.openModal()">Envoyer</button> -->
          </form>
          <button class="contact_button" onclick="Form.onSumitForm()">Envoyer</button>
        </div>
			</div>

    `;
    return modalContact;
  }
}

export default ModalContact;