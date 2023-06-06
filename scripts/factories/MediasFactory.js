import ImageMedia from "../models/Image.js";
import VideoMedia from "../models/Video.js";

export default class MediasFactory {
  constructor(name, media) {
    this.media = media
    this.name = name
    // console.log(this.media);
  }

  createMedia() {
    if (this.media.image) {
      const img = new ImageMedia(this.name, this.media)
      return img.createImage();
    } 
    else if (this.media.video) {
      const vdo = new VideoMedia(this.name, this.media)
      return vdo.createVideo();
    } 
    else {
      throw 'Unknown media type';
    }
  }
}
