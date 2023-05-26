import Photographer from "../scripts/utils/Photographer.js"

class Api {
  constructor(url) {
    this._url = url
  }
  async get() {
    return fetch(this._url)
      .then(res => res.json())
      .catch(err => console.log('ERROR => ', err))
  }
}

export default class PhotographersApi extends Api {
 constructor(url) {
  super(url)
 }
 async getPhotographers() {
  const response = await this.get()
  return response.photographers.map(photographer => new Photographer(photographer))
 }
 
 async getPhotographer(id) {
  const photographers = await this.getPhotographers()
  const photographerJson = photographers.find(photographer => photographer.id == id)
  if (!photographerJson) return null
  return new Photographer(photographerJson)
 }
}