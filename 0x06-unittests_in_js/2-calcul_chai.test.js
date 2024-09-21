const chai = require('chai');
const expect = chai.expect;

const calculateNUmber = require('./2-calcul');

describe("Calculate number function testing", function() {
  it('checks addition and round', function() {
    const sum = calculateNUmber('SUM', 5.6, 1.2);
    expect(sum).to.equal(8);
  });
  it('Checks for subtraction and round', function() {
    const subtract = calculateNUmber('SUBTRACT', 6.4, 3.8);
    expect(subtract).to.equal(2);
  });
  it('checks for division and round', function() {
    const division = calculateNUmber('DIVIDE', 9.0, 2.5);
    expect(division).to.equal(3);
  });
  it('checks if second para is 0', function() {
    const dividedByZero = calculateNUmber('DIVIDE', 4.3, 0.1);
    expect(dividedByZero).to.equal('Error');
  })
});