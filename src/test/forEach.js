const chai = require("chai");
const { expect } = chai;
const arr = ["map", "filter", "forEach", "reduce"];
describe("forEach vjezba", () => {
  it("forEach add word", function () {
    let copy = [];
    arr.forEach((value) => {
      copy.push("arr." + value);
    });

    expect(copy).to.eql(["arr.map", "arr.filter", "arr.forEach", "arr.reduce"]);
  });
  it("multiply", function () {
    let number = [1, 2, 3, 4];
    number.forEach((value, index, arr) => {
      arr[index] = value * 2;
    });
    expect(number).to.eql([2, 4, 6, 8]);
  });
  it("even numbers", function () {
    let allEven = true;

    const numbers = [22, 3, 4, 10];

    numbers.forEach(function (number) {
      if (number % 2 === 1) {
        allEven = false;
      }
    });
    expect(allEven).to.eql(false);
  });
  it("foreach", function () {
    let brojevi = [4, 6, 8];
    brojevi.forEach(myfunction);
    function myfunction(value, index, arr) {
      arr[index] = value / 2;
    }
    expect(brojevi).to.eql([2, 3, 4]);
  });
  it("forEach ", function () {
    let brojevi = [2, 3, 4];
    brojevi.forEach(myfunction);
    function myfunction(value, index, arr) {
      arr[index] = value - 1;
    }
    expect(brojevi).to.eql([1, 2, 3]);
  });
});
