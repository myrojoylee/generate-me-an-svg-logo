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

class Triangle extends Shape {
  constructor(width, height) {
    super(width);
  }
  customerResponse() {
    console.log("user wants a triangle");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width);
  }

  customerResponse() {
    console.log("user wants a rectangle.");
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

module.exports = [Shape, Triangle, Rectangle, Circle];

// const sampleTriangle = new Triangle();
// console.log(sampleTriangle.render(3, 4));
