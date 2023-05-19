const Shape = require("./shapes");

describe("Shape", () => {
  describe("renderShape", () => {
    it("should return a corresponding string representing a square svg given the shape color", () => {
      const expected = `<rect x='85' y='35' width='130' height='130' fill="#4B0082"/>`;
      const square = new Shape[3]();
      square.shapeColor = "#4B0082";
      expect(square.renderShape()).toEqual(expected);
    });
  });
});
