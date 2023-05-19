const Shape = require("./shapes");

describe("Shape", () => {
  describe("renderShape", () => {
    it("should return a corresponding string representing a circle svg given the shape color", () => {
      const expected = `<circle cx="150" cy="100" r="60" fill="dodgerblue" />`;
      const circle = new Shape[1]();
      circle.shapeColor = "dodgerblue";
      expect(circle.renderShape()).toEqual(expected);
    });
  });
});
