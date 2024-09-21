const assert = require("assert");
const sum = require("./calculateNumber");

describe("addittiona and round test", function() {
  it("should return 4 if 2.1 ia added with 2.3", function() {
    const result = calculateNumber(2.1, 2.3);
    assert.equal(result, 4);
  });
});
