class MediasFactory {
  constructor(data, photographerName) {
    if (data.image) {
      return new ImageMedia(data, photographerName);
    } else if (data.video) {
      return new VideoMedia(data, photographerName);
    } else {
      throw 'Unknown media type';
    }
  }
}
