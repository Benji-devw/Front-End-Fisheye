export default class Photographer {
  constructor(photographer) {
    this._name = photographer.name
    this._id = photographer.id
    this._city = photographer.city
    this._country = photographer.country
    this._tagline = photographer._tagline
    this._price = photographer.price
    this._portrait = photographer.portrait
  }

  createPhotographerCard() {
    const $wrapper = document.createElement('div')
    $wrapper.classList.add('photographer-card-wrapper')

    const photographerCard = `
      <article>
        <div class="article_head">
          <img alt="${this._name}" src="assets/photographers/${this._portrait}" />
        </div>
        <div class="article_body">
          <h2>${this._name}</h2>
        </div>
      </article>
    `

    $wrapper.innerHTML = photographerCard
    return $wrapper;
  }

  createPhotographerBanner() {
    // to do
  }

}










// async function getPhotographers() {
//   try {
//     const response = await fetch("../../data/photographers.json");
//     const data = await response.json();
//     // console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function displayData(photographers) {
//   const photographersSection = document.querySelector(".photographer_section");

//   photographers.forEach((photographer) => {
//     const photographerModel = photographerFactory(photographer);
//     const userCardDOM = photographerModel.getUserCardDOM();
//     photographersSection.appendChild(userCardDOM);
//   });
// }

// async function init() {
//   // Récupère les datas des photographes
//   const { photographers } = await getPhotographers();
//   displayData(photographers);
// }
// init();
