export class Media {
  constructor(data) {
    // console.log(data);
    this.id = data.id
    this.photographerId = data.photographerId
    this.title = data.title
    this.likes = data.likes
    this.date = new Date(data.date)
    this.price = data.price
  }
}