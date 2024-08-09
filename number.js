const arr = [0, 12, 1, 5, 4, 5, 3, 0, 1, 3, 2, 1, 4, 5];
console.log(arr);

const Zero = [];
const nonZero = [];

for (const item of arr) {
  if (item === 0) {
    Zero.push(item);
  } else {
    nonZero.push(item);
  }
}

const concatedArray = nonZero.concat(Zero);
console.log(concatedArray);
