
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let result = [];
  let isReverse = false;

  for (let i = 0; i < matrix.length; i++) {
    if (isReverse) {
      let reverseArr = matrix[i].reverse();
      
      for (let item of reverseArr) {
        result.push(item);
      }
    } else {
      for (let item of matrix[i]) {
        result.push(item);
      }
    }
    
    isReverse = !isReverse;
  }

  return matrix.length !== 0 ? result : [];
}
