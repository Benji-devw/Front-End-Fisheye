// import getPhotographers from '../../data/data';

async function getPhotographers() {
  try {
    const response = await fetch("../../data/photographers.json");
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

function getIdQuery() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('id');
}

async function Profile() {
  const { photographers } = await getPhotographers();
  const getPhotographer = photographers.filter(user => user.id == getIdQuery())
  
  const nameDiv = document.querySelector('.name')
  const cityDiv = document.querySelector('.city')
  const taglineDiv = document.querySelector('.tagline')
  const imageDiv = document.querySelector('.image')
  const img = document.createElement("img");
  imageDiv.appendChild(img)
  
  nameDiv.textContent = getPhotographer[0].name
  cityDiv.textContent = getPhotographer[0].city
  taglineDiv.textContent = getPhotographer[0].tagline
  
  img.setAttribute("src", `assets/photographers/${getPhotographer[0].portrait}`)
  img.setAttribute("alt", getPhotographer[0].name)

}

async function Medias() {
  const { media } = await getPhotographers();
  const getMedia = media.filter(id => id.photographerId == getIdQuery());
  console.log(getMedia);
  
  const gallery = document.querySelector('.gallery')

  const imageElements = getMedia.map(imageUrl => {
    const imgElement = document.createElement('img');
    imgElement.src = `assets/images/${imag}/${imageUrl.image}`;
    return imgElement;
  });
  
  imageElements.forEach(imageElement => {
    gallery.appendChild(imageElement);
  });

  return gallery

}

async function photographer() {

  Profile()
  Medias()
  
}

photographer();