function calculateNumber(type, a, b) {

  const x = Math.round(a);
  const y = Math.round(b);

  if (type === 'SUM') {
    return x + y;
  } else if (type === 'SUBTRACT') {
    return x - y;
  } else if (type === 'DIVIDE') {
    if (y === 0) {
      return 'Error';
    }
    return x / y;
  }
}

module.exports = calculateNumber;
