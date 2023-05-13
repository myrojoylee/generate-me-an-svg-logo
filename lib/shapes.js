class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  render(a, b) {
    console.log(a * b);
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
  render(a, b) {
    super.render(a, b);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width);
  }
}

class Circle extends Shape {
  constructor(width, height) {
    super(width);
  }
}

module.exports = [Shape, Circle, Rectangle, Circle];

const sampleTriangle = new Triangle();
console.log(sampleTriangle.render(3, 4));
