/**
  * @regex Form Contact
  * @textRegex Two letters min && autorize French alphabet
  * @emailRegex Two letters min all && autorize (-) or (_)
  **********************************/
var textRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]{2,}$/;
var emailRegex = /^[a-zA-Z0-9-_.]{2,}@[a-zA-Z0-9]{1,61}\.[a-zA-Z]{2,}$/;



/**
  * @class checkContactForm
  * @description Modal Events
  * @param name - The photographer name (string)
  **********************************/
export default class checkContactForm {
  constructor(name) {
    this.name = name
    this.$submitContact = document.querySelector('.submit_btn');

    this.form = document.querySelector("#myForm");
    this.firstNameInput = document.getElementById("fistName");
    this.lastNameInput = document.getElementById("lastName");
    this.emailInput = document.getElementById("email");
    this.messageTextarea = document.getElementById("message");
    this.datas = []
    this.errors = []
  }


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

    if (this.errors.length === 0) {
      console.log('Form submited !!! => ', this.datas);
      // this.closeModal()
      this.form.reset()
    } else {
      console.log('Form errors !!! => ', this.errors);
    }
  }

}
