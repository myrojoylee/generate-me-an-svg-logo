class Shape {
  constructor(width, height, text, bgColor, textColor) {
    this.width = width;
    this.height = height;
    this.text = text;
    this.bgColor = bgColor;
    this.textColor = textColor;
  }

  renderShape(shape) {
    shape = ``;
    return shape;
  }

  renderLogo() {
    let logo = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${
      this.height
    }">
        <rect width="${this.width}" height="${this.height}" fill='${
      this.bgColor
    }' />
        ${this.renderShape()}
        <text x="127" y="110" font-size="1.5em" fill='${this.textColor}'>${
      this.text
    }</text>
      </svg>
    `;

    return logo;
  }
}

class Circle extends Shape {
  constructor(width, height, text, bgColor, textColor, shapeColor) {
    super(width, height, text, bgColor, textColor);
    this.shapeColor = shapeColor;
  }

  renderShape(shape) {
    shape = `<circle cx="150" cy="100" r="60" fill="${this.shapeColor}" />`;
    super.renderShape(shape);
    return shape;
  }

  renderLogo() {
    return super.renderLogo();
  }
}

class Triangle extends Shape {
  constructor(width, height, text, bgColor, textColor, shapeColor) {
    super(width, height, text, bgColor, textColor);
    this.shapeColor = shapeColor;
  }

  renderShape(shape) {
    shape = `<polygon points="150, 18 244, 155 56, 155" fill="${this.shapeColor}"/>`;
    super.renderShape(shape);
    return shape;
  }

  renderLogo() {
    return super.renderLogo();
  }
}

class Square extends Shape {
  constructor(width, height, text, bgColor, textColor, shapeColor) {
    super(width, height, text, bgColor, textColor);
    this.shapeColor = shapeColor;
  }

  renderShape(shape) {
    shape = `<rect x='85' y='35' width='130' height='130' fill="${this.shapeColor}"/>`;
    super.renderShape(shape);
    return shape;
  }

  renderLogo() {
    return super.renderLogo();
  }
}

module.exports = [Shape, Circle, Triangle, Square];
