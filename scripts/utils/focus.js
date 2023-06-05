

  // document.addEventListener('keydown', function(event) {
  //   const currentElement = document.activeElement;
    
  //   if (event.key === '2') {
  //     const nextElement = currentElement.nextElementSibling;
  //     if (nextElement) {
  //       nextElement.focus();
  //     }
  //   } else if (event.key === '8') {
  //     const previousElement = currentElement.previousElementSibling;
  //     if (previousElement) {
  //       previousElement.focus();
  //     }
  //   }
  // });





//** Close modal when escape key is pressed */ 
// const contactModal = document.getElementById("contact_modal");

// document.addEventListener('keydown', function(e) {
//   const keyCode = e.keyCode ? e.keyCode : e.which;
//   const modal = document.getElementById("contact_modal");

//   if (modal.getAttribute('aria-hidden') === 'false' && keyCode === 27) {
//     onCloseModal();
//   }
// });








//   //** add all the elements inside modal which you want to make focusable */ 
// const  focusableElements =
// 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), .card';
// const modal = document.querySelector('#contact_modal'); // select the modal by it's id

// const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
// const focusableContent = modal.querySelectorAll(focusableElements);
// const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal


// document.addEventListener('keydown', function(e) {
// let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

// if (!isTabPressed) {
//   return;
// }

// if (e.shiftKey) { // if shift key pressed for shift + tab combination
// if (document.activeElement === firstFocusableElement) {
//   lastFocusableElement.focus(); // add focus for the last focusable element
//   e.preventDefault();
// }
// } else { // if tab key is pressed
// if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
//   firstFocusableElement.focus(); // add focus for the first focusable element
//   e.preventDefault();
// }
// }
// });

// firstFocusableElement.focus();









function handleCardNavigation(event) {
  // Vérifiez la touche de navigation au clavier pressée
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    // Empêchez le comportement par défaut pour éviter le défilement de la page
    event.preventDefault();

    // Naviguez vers la carte suivante ou précédente en fonction de la touche pressée
    const currentIndex = Array.from(cards).indexOf(event.currentTarget);
    const nextIndex = event.key === 'ArrowDown' ? currentIndex + 1 : currentIndex - 1;
    const nextCard = cards[nextIndex];

    // Mettez le focus sur la carte suivante ou précédente
    if (nextCard) {
      nextCard.focus();
    }
  }
}
// Gestionnaire d'événement pour mettre en évidence la carte en focus
function highlightCard(event) {
  event.currentTarget.classList.add('focused');
}

