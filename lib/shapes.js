class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  render(width, height, svgText, shapeColor, textColor) {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <rect width="${width}" height="${height}" fill='white' />
      <circle cx='150' cy='100' r='60' fill='${shapeColor}'/>
      <text fill='${textColor}' x="127" y="110" font-size="1.5em">
        ${svgText}
      </text>
    </svg>
    `;
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  render(width, height, svgText, shapeColor, textColor) {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <rect width="${width}" height="${height}" fill='white' />  
    <polygon fill='${shapeColor}' points="150, 18 244, 155 56, 155" />
      <text fill='${textColor}' x="117" y="100" font-size="2em">
        ${svgText}
      </text>
    </svg>
    `;
  }
}

class Square extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  render(width, height, svgText, shapeColor, textColor) {
    return ` 
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <rect width="${width}" height="${height}" fill='white' />
      <rect x='85' y='35' width='130' height='130' fill='${shapeColor}'/>
      <text fill='${textColor}' x="127" y="110" font-size="1.5em">
        ${svgText}
      </text>
    </svg>`;
  }
}

module.exports = [Shape, Circle, Triangle, Square];
