const chai = require("chai");
const { expect } = chai;

describe("Reduce", () => {
  it("reduce sum", () => {
    expect([1, 2, 3, 4, 5].reduce((value, index) => value + index)).to.eql(15);
  });
  it("reduce flat", () => {
    expect(
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ].reduce((value, index) => value.concat(index))
    ).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("reduce object key sum", () => {
    expect(
      [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
        (value, index) => value + index.x,
        0
      )
    ).to.eql(6);
  });
  it("reduce subtract", () => {
    expect(
      [4, 3, 7, 4].reduce((value, index) => {
        return value + index - 3;
      })
    ).to.eql(9);
  });
  it("reduce words ", () => {
    expect(["a", "b", "c"].reduce((value, index) => value + index)).to.eql(
      "abc"
    );
  });
  it("reduce test divide (devide)", () => {
    expect([50, 2, 5, 1].reduce((value, index) => value / index)).to.eql(5);
  });
});
