const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('addittion and round test', function() {
  it('should return 4 if 2.1 is added with 2.3', function() {
    const result = calculateNumber(2.1, 2.3);
    assert.equal(result, 4);
  });
});
