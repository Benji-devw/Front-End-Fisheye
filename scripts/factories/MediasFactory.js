import ImageMedia from "../models/Image.js";
import VideoMedia from "../models/Video.js";


export default class MediasFactory {
  constructor() {

  }

  createMedia(mediaJson) {
    
    if (mediaJson.image) {
      return new ImageMedia(mediaJson);
    } 
    else if (mediaJson.video) {
      return new VideoMedia(mediaJson);
    } 
    else {
      throw 'Unknown media type';
    }
  }
}
