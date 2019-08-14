const assert = require("chai").assert;
const check = require("../luhnAlgorithm");

describe("Check", function () {
  it("should return true if number is valid", function () {
    const num = 79927398713;
    assert.isTrue(check(num));
  });
  it("should return false if a number is NOT valid", function () {
    const num = 85948378395;
    assert.isFalse(check(num));
  });
});