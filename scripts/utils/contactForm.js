function displayModal() {
  const modal = document.getElementById("contact_modal");
  document.body.style.overflow = 'hidden';
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  document.body.style.overflow = 'visible';
  modal.style.display = "none";
}
