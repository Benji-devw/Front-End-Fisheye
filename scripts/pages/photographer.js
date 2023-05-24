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


async function photographer() {
  const { photographers, media } = await getPhotographers();
  const getPhotographer = photographers.filter(user => user.id == getIdQuery())
  const getMedia = media.filter(id => id.photographerId == getIdQuery());

  console.log(getPhotographer);
}

photographer();