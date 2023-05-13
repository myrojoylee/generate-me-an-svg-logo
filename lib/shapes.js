class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  render() {
    return `render shape!`;
  }

  setColor() {
    return `color shape!`;
  }
}

class Circle extends Shape {
  constructor(width, height) {
    super(width);
  }

  customerResponse() {
    console.log("user wants a circle.");
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width);
  }
  customerResponse() {
    console.log("user wants a triangle");
  }
}

class Square extends Shape {
  constructor(width, height) {
    super(width);
  }

  customerResponse() {
    console.log("user wants a square.");
  }
}

module.exports = [Shape, Circle, Triangle, Square];

// const sampleTriangle = new Triangle();
// console.log(sampleTriangle.render(3, 4));
