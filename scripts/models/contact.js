import checkContactForm from "../utils/checkContactForm.js";

/**
  * @class ContactModel
  * @description Create contact modal
  * @param {string} name - The photographer name
  **********************************/
export default class ContactModel extends checkContactForm {
  constructor(name) {
    super()
    this.name = name
  }

  checkForm() {
    const contact_submit = document.querySelector('.submit_btn');
    contact_submit.addEventListener('click', () => {
      const test = new checkContactForm(this.name)
      return test.onSubmitForm()
    })
  }

  createContact() {
    const $contactForm = `
      <div class="contact-container" aria-hidden="true" aria-label="contact" role="dialog">
        <div class="form-header">
          <h2>Contactez-moi <br /> <span class="contact_name">${this.name}</span></h2>
          <button class="close-modal"><img src="assets/icons/close.svg" alt="close" /></button>
        </div>
        <form id="myForm" action="" method="POST">
          <div class="form-group">

            <div class="formData" id="firstData" data-error="Deux lettre min - Pas de caractères spéciaux">
              <label id="firstNameLabel" for="fistName">Prénom</label>
              <input id="fistName" name="firstName" type="text" placeholder="fistName" aria-labelledby="firstNameLabel" required />
            </div>

            <div class="formData" id="lastData" data-error="Deux lettre min - Pas de caractères spéciaux">
              <label id="lastNameLabel" for="lastName" for="lastName">Nom</label>
              <input id="lastName" name="lastName" type="text" placeholder="lastName" aria-labelledby="lastNameLabel" required />
            </div>

            <div class="formData" id="emailData" data-error="Email invalide">
              <label id="emailLabel" for="email">Email</label>
              <input id="email" name="email" type="email" placeholder="email" aria-labelledby="emailLabel" required />
            </div>

            <div class="formData" id="areaData" data-error="Deux lettre min - Pas de caractères spéciaux">
              <label id="messageLabel" for="message">Votre message:</label>
              <textarea id="message" name="message" placeholder="Message..." aria-labelledby="messageLabel" rows="5" cols="33"></textarea>
            </div>

          </div>
        </form>
        <div class="form-footer">
          <button class="submit_btn" type=submit >Envoyer</button>
        </div>
      </div>
    `
    return $contactForm;
  }

}

