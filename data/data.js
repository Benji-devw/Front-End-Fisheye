import Photographer from "../scripts/models/Photographer.js";
import ImageMedia from "../scripts/models/Image.js";
import VideoMedia from "../scripts/models/Video.js";

/**
 * @class Api
 * Get photographer data
 * Get media data
**********************************/
class Api {
  constructor(url) {
    this._url = url;
  }
  async get() {
    return fetch(this._url)
    .then((res) => res.json())
    .catch((err) => console.log("ERROR => ", err));
  }
}


/**
 * @class PhotographersApi
 * Get photographers
 * Get Photographer by id with medias
 * Create Media factory
 **********************************/
export default class PhotographersApi extends Api {
  constructor(url) {
    super(url);
  }
  
  async getPhotographers() {
    const response = await this.get();
    return response.photographers.map(photographer => new Photographer(photographer));
  }

  async getPhotographerWithMedias(id) {
    const datas = await this.get();
    const photographer = datas.photographers.find(photographer => photographer.id == id);
    if (!photographer) return null
    // console.log(photographer);

    const mediasJson = datas.media.filter(media => media.photographerId == id);
    const medias = mediasJson.map(media => this.createMediaFactory(photographer.name, media));
    // console.log(medias);

    return new Photographer(photographer, medias)
  }


  createMediaFactory(photographerName, media) {
    if (media.image) {
      return new ImageMedia(photographerName, media)
    } 
    else if (media.video) {
      return new VideoMedia(photographerName, media)
    } 
    else {
      throw 'Unknown media type';
    }
  }

}
