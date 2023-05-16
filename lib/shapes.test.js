const Shape = require("./shapes");

describe("Shape", () => {
  describe("renderShape", () => {
    it("should return a corresponding string representing a circle svg given the shape color", () => {
      const expected = `<circle cx="150" cy="100" r="60" fill="dodgerblue" />`;
      const circle = new Shape[1]();
      circle.shapeColor = "dodgerblue";
      expect(circle.renderShape()).toEqual(expected);
    });
    it("should return a corresponding string representing a triangle svg given the shape color", () => {
      const expected = `<polygon fill="khaki" points="150, 18 244, 155 56, 155" />`;
      const triangle = new Shape[2]();
      triangle.shapeColor = "khaki";
      expect(triangle.renderShape()).toEqual(expected);
    });
    it("should return a corresponding string representing a square svg given the shape color", () => {
      const expected = `<rect x='85' y='35' width='130' height='130' fill="#4B0082"/>`;
      const square = new Shape[3]();
      square.shapeColor = "#4B0082";
      expect(square.renderShape()).toEqual(expected);
    });
  });
});
