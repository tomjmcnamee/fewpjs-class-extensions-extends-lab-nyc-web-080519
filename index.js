class Polygon {
  constructor(arrOfSides) {
    this.arrOfSides = arrOfSides
  }



  get countSides() {
    return this.arrOfSides.length
  }
  get perimeter() {
    return this.arrOfSides.reduce((previous, current) => current += previous)
  }
} // Ends Polygon Class


class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      return (
        this.arrOfSides[0] + this.arrOfSides[1] > this.arrOfSides[2] &&
        this.arrOfSides[0] + this.arrOfSides[2] > this.arrOfSides[1] &&
        this.arrOfSides[2] + this.arrOfSides[1] > this.arrOfSides[0]
        )
    } else {
      return false
    }
  }
} // Ends Triangle Class

class Square extends Polygon {
  get isValid() {
    if (this.countSides ==4) {
      return (
        this.arrOfSides[0] === this.arrOfSides[1] &&
        this.arrOfSides[1] === this.arrOfSides[2] &&
        this.arrOfSides[2] === this.arrOfSides[3]        
        )
    } else {
      return false
    }
  }
  get area() {
    return this.arrOfSides[0] * this.arrOfSides[0]
  }
}