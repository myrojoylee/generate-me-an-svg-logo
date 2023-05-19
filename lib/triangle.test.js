const Shape = require("./shapes");

describe("Shape", () => {
  describe("renderShape", () => {
    it("should return a corresponding string representing a triangle svg given the shape color", () => {
      const expected = `<polygon points="150, 18 244, 155 56, 155" fill="khaki"/>`;
      const triangle = new Shape[2]();
      triangle.shapeColor = "khaki";
      expect(triangle.renderShape()).toEqual(expected);
    });
  });
});
