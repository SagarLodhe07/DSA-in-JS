const arr = [2, 5, 13, 4, 8, 1, 3, 5, 20, 4];

// const filteredArray =arr.filter((elem) => elem > 2);
// console.log(filteredArray);

// console.log(arr);

const LargestNum = (arr) => {
  let max = 0;
  for (const i of arr) {
    if (max < arr[i]) max = arr[i];
  }
  return max;
};

console.log(LargestNum(arr));

const minimunNum = (arr) => {
  let min = 1;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }
  return min;
};

console.log(minimunNum(arr));
