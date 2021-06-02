const chai = require("chai");
const { expect } = chai;
const arr = ["map", "filter", "forEach", "reduce"];
describe("forEach vjezba", () => {
  it("forEach add word", function () {
    const copy = [];
    arr.forEach((value) => {
      copy.push("arr." + value);
    });

    expect(copy).to.eql(["arr.map", "arr.filter", "arr.forEach", "arr.reduce"]);
  });
});
