const sumAll = function (begin, end) {
  if (begin > end || begin < 0) return "ERROR";

  let nums = [];
  let k = 0;

  for (let i = begin; i <= end; i++) {
    nums.push(i);
  }

  let result = nums.reduce((sum, item) => {
    return item + sum;
  }, 0);

  return result;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
