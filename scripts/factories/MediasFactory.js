import ImageMedia from "../models/Image.js";
import VideoMedia from "../models/Video.js";

export default class MediasFactory {
  constructor(data) {
    this.data = data
    // console.log(this.data);
  }

  createMedia() {
    if (this.data.image) {
      return new ImageMedia(this.data);
    } 
    else if (this.data.video) {
      return new VideoMedia(this.data);
    } 
    else {
      throw 'Unknown media type';
    }
  }
}
