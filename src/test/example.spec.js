var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const fizzBuzz = require("../fizzBuzz");
/*
FizzBuzz problem: 
- za broj djeljiv sa 3 funkcija vraća "Fizz"
- za broj djeljiv sa 5 funkcija vraća "Buzz"
- Za broj djeljiv sa 3 i 5 funkcija vraća FizzBuzz
- Za ostale brojeve vratiti undefined
*/
describe("fizz buz problem", function () {
  it("fizzBuzz should be a function", function () {
    fizzBuzz(1);
  });
  it("function should throw error if argument is not a number", function () {
    expect(() => fizzBuzz("pero")).to.throw(Error);
  });
  it("function should accept number as an argument", function () {
    fizzBuzz(1);
  });
  it("should return Fizz if number is dividible by 3", function () {
    expect(fizzBuzz(3)).to.equal("Fizz");
    expect(fizzBuzz(6)).to.equal("Fizz");
  });
  it("should return Buzz if number is dividible by 5", function () {
    expect(fizzBuzz(5)).to.equal("Buzz");
  });
  it("should return FizzBuzz if number is dividible by 3 & 5", function () {
    expect(fizzBuzz(30)).to.equal("FizzBuzz");
  });

  it("should return Buzz if number is dividible by 7", function () {
    expect(fizzBuzz(7)).to.equal("Suzz");
  });
  it("should return FizzBuzz if number is dividible by 3 & 7", function () {
    expect(fizzBuzz(21)).to.equal("FizzSuzz");
  });
  it("should return FizzBuzz if number is dividible by 5 & 7", function () {
    expect(fizzBuzz(35)).to.equal("BuzzSuzz");
  });
  it("nije djeljiv ", function () {
    expect(fizzBuzz(2)).to.be.undefined;
  });
});

//R-G-R
