export class Media {
  constructor(data) {
    this._id = data.id
    this._photographerId = data.photographerId
    this._title = data.title
    this._likes = data.likes
    this._date = new Date(data.date)
    this._price = data.price
  }
}