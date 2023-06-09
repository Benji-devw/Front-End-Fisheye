export class Media {
  constructor(name, data) {
    this.name = name
    this.id = data.id
    this.photographerId = data.photographerId
    this.title = data.title
    this.likes = data.likes
    this.date = new Date(data.date)
    this.price = data.price
  }
}

