exports.min = function min(array=[]) {
  return array.length !== 0 ? Math.min(...array) : 0;
};

exports.max = function max(array=[]) {
  return array.length !== 0 ? Math.max(...array) : 0;
};

exports.avg = function avg(array=[]) {
  if (array.length !== 0) {
    return array.reduce((sum, a) => sum + a, 0) / array.length;
  } else {
    return 0;
  }
};
