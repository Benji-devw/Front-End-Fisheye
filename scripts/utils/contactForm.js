class Form {
  static onSumitForm() {
    const form = document.querySelector('#myForm');
    const name = form.querySelector('#name').value;
    const message = form.querySelector('#message').value;
    
    console.log(name, message);
    form.reset();
  }

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

}