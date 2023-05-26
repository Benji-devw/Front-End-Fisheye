// import GetPhotographers from '../../data/data';

async function GetPhotographers() {
  try {
    const response = await fetch("../../data/photographers.json");
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}



function GetIdQuery() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('id');
}



async function Profile() {
  const { photographers } = await GetPhotographers();
  const getPhotographer = photographers.filter(user => user.id == GetIdQuery())
  
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
  const { photographers, media } = await GetPhotographers();
  const getPhotographer = photographers.filter(user => user.id == GetIdQuery())
  const getMedia = media.filter(id => id.photographerId == GetIdQuery());
  console.log(media[0]);
  
  const gallery = document.querySelector('.gallery')
  
  const cardsElements = getMedia.map(element => {
    const card = document.createElement('div')
    const image = document.createElement('img');
    const legend = document.createElement('div')
    const title = document.createElement('span')
    const like = document.createElement('div')
    
    gallery.appendChild(card)
    card.appendChild(image)
    card.appendChild(legend)
    legend.appendChild(title)
    legend.appendChild(like)

    card.classList.add("card")
    legend.classList.add("legend")
    title.textContent = element.title
    like.textContent = element.likes
    image.src = `assets/images/${getPhotographer[0].name.replace(" ", "_")}/${element.image}`;
    image.alt = element.title 
    return card;
  });
  
  cardsElements.forEach(imageElement => {
    gallery.appendChild(imageElement);
  });

  return gallery;
}


async function photographer() {
  Profile()
  Medias()
}
photographer();