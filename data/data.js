import Photographer from "../scripts/models/Photographer.js";
import ImageMedia from "../scripts/models/Image.js";
import VideoMedia from "../scripts/models/Video.js";

/**
  * @class Api
  * @description Get photographer data
  * @description Get media data
  * @param url - The Path to Photographer data (json)
  **********************************/
class Api {
  constructor(url) {
    this._url = url;
  }
  async get() {
    try {
      return fetch(this._url)
      .then((res) => res.json())
      .catch((err) => console.log("ERROR => ", err));
    } catch (error) {
      return error
    }
  }
}



/**
  * @class Create Media factory
  * @description Get photographers
  * @description Get Photographer by id with medias
  * @param url - The Path Photographer.json (json)
  **********************************/
export default class PhotographersApi extends Api {

  async getPhotographers() {
    const response = await this.get();
    return response.photographers.map(photographer => new Photographer(photographer));
  }

  async getPhotographerWithMedias(id) {
    const data = await this.get();
    const photographer = data.photographers.find(photographer => photographer.id === parseInt(id));
    
    const mediasJson = data.media.filter(media => media.photographerId === parseInt(id));
    const medias = mediasJson.map(media => this.createMediaFactory(photographer.name, media));

    return new Photographer(photographer, medias)
  }

  createMediaFactory(photographerName, media) {
    if (media.image)  return new ImageMedia(photographerName, media)
    else if (media.video) return new VideoMedia(photographerName, media)
    else throw 'Unknown media type';
  }

}
