//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographerData() {
  await fetch('../../data/photographers.json')
  .then(response => response.json())
  .then(data => {
    const filterById = data.media.filter(id => id.photographerId === 82)
    console.log(filterById);
  })
  .catch(err => console.log(err))
}

function Photographer() {
  getPhotographerData()
  // return console.log('test');
}

Photographer()