const chai = require("chai");
const { expect } = chai;
const arr = ["map", "filter", "forEach", "reduce"];
describe("filter vjezba", () => {
  it("filter higher than 10", () => {
    expect([5, 10, 15, 20].filter((value) => value > 10)).to.eql([15, 20]);
  });
  it("filter higher than 5", () => {
    expect(arr.filter((value) => value.length > 5)).to.eql([
      "filter",
      "forEach",
      "reduce",
    ]);
  });
  it("filter starts on f", () => {
    expect(arr.filter((value) => value[0] == "f")).to.eql([
      "filter",
      "forEach",
    ]);
  });
  it("filter postive", () => {
    expect([5, 10, 15, 20].filter((value) => value % 2 == 0)).to.eql([10, 20]);
  });
  it("filter manje od 5", () => {
    expect(arr.filter((value) => value.length < 5)).to.eql(["map"]);
  });
});
