class MediasFactory {
  constructor(data, photographerName, id) {
    if (data.image) {
      return new ImageMedia(data, photographerName, id);
    } else if (data.video) {
      return new VideoMedia(data, photographerName);
    } else {
      throw 'Unknown media type';
    }
  }
}
