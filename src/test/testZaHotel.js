var assert = require("assert");
var chai = require("chai");
const priceListFormatter = require("../hotelPrices");
var expect = chai.expect;
var should = chai.should;
let pricelist = [
  { from: "2020-01-01", to: "2020-02-01", price: 34.5 },
  { from: "2020-02-02", to: "2020-03-01", price: 37.0 },
  { from: "2020-03-02", to: "2020-05-15", price: 39.0 },
  { from: "2020-05-16", to: "2020-06-15", price: 37.0 },
];
describe("hoteltest", function () {
  it(" should be a function", function () {
    priceListFormatter(pricelist);
  });
  it("format,  expected format(price : date_from : date_to)", function () {
    expect(priceListFormatter(pricelist)).to.include(
      "34.5 : 2020-01-01 do 2020-02-01"
    );
    expect(priceListFormatter(pricelist)).to.include(
      "37.0 : 2020-02-02 do 2020-03-01"
    );
  });

  it("grouped  by price", function () {
    expect(priceListFormatter(pricelist)).to.include(
      "37.0 : 2020-02-02 do 2020-03-01 , 2020-05-16 do 2020-06-15 \n"
    );
  });
  it("grouped and sorted  by price", function () {
    expect(priceListFormatter(pricelist)).to.equal(
      "34.5 : 2020-01-01 do 2020-02-01 \n" +
        "37.0 : 2020-02-02 do 2020-03-01 , 2020-05-16 do 2020-06-15 \n" +
        "39.0 : 2020-03-02 do 2020-05-15 \n"
    );
  });
});
