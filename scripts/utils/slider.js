/**
 * @class Slider
**********************************/
export default class Slider{
  constructor(data) {
    this.data = data
    this.$card = document.querySelectorAll('.gallery .card')
  }

  test() {
    const slideArray = [];
    for (let i = 0; i < this.$card.length; i++) {
      slideArray.push(this.$card[i]);
    }
    console.log(slideArray);
    return slideArray
  }

  createModal()

}