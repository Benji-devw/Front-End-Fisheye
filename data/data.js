import Photographer from "../scripts/models/Photographer.js";
import MediasFactory from "../scripts/factories/MediasFactory.js";
import ImageMedia from "../scripts/models/Image.js";
import VideoMedia from "../scripts/models/Video.js";


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

export default class PhotographersApi extends Api {
  constructor(url) {
    super(url);
  }
  
  async getPhotographers() {
    const response = await this.get();
    return response.photographers.map(photographer => new Photographer(photographer));
  }

  async getPhotographer(id) {
    const photographers = await this.getPhotographers();
    const photographer = photographers.find(photographer => photographer.id == id);
    // console.log(photographer.constructor.name);

    const datas = await this.get();
    const mediasJson = datas.media.filter((media) => media.photographerId == id);
    const factory = new MediasFactory();
    const medias = mediasJson.map((media) => factory.createMedia(media));
    console.log(medias);

    // if (medias[0] instanceof ImageMedia) console.log("image");
    // else if (medias[0] instanceof VideoMedia) console.log("video");

    if (!photographer && !mediasJson) return null
    return new Photographer(photographer, mediasJson)
  }
}
