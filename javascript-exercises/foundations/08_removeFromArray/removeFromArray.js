const removeFromArray = function (nums, numToRemove) {
  let result = [];
  result = nums.filter((item) => {
    return item !== numToRemove;
  });

  return result;
};
// Do not edit below this line
module.exports = removeFromArray;
