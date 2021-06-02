const chai = require("chai");
const { expect } = chai;
const arr = [16, 25, 36];
describe("Map vjezbe", () => {
  it("should return  correct array", () => {
    expect([2, 4, 6, 8, 10].map((value) => value * 2)).to.eql([
      4, 8, 12, 16, 20,
    ]);
  });
  it("Should return letter length", () => {
    expect(["a", "aa", "aaa"].map((value) => value.length)).to.eql([1, 2, 3]);
  });
  it("Should return sqrt ", () => {
    expect(arr.map(Math.sqrt)).to.eql([4, 5, 6]);
  });
  it("Should return multiply ", () => {
    expect([1, 4, 9, 16].map((value, index) => value * index)).to.eql([
      0, 4, 18, 48,
    ]);
  });
  it("Should return divide ", () => {
    expect(arr.map((value) => value / 2)).to.eql([8, 12.5, 18]);
  });
  it("Should return sum ", () => {
    expect(arr.map((value) => value + value)).to.eql([32, 50, 72]);
  });
  it("Should return substract", () => {
    expect(
      arr.map((value, index) => value - arr[arr.length - index - 1])
    ).to.eql([-20, 0, 20]);
  });
  it("Should return letter length", () => {
    expect(["velika", "slova"].map((value) => value.toUpperCase())).to.eql([
      "VELIKA",
      "SLOVA",
    ]);
  });
});
