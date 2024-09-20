// array1 = [1, 2, 3];
// array2 = [4, 5];
// console.log(Math.max(array1.length,array2.length));

// let max = Math.max(array1.length, array2.length);
// console.log(max);

const mergeSort = (a, b) => {
  let max = Math.max(a.length, b.length);
  let sort = [];
  for (let i = 0; i < max; i++) {
    if (a[i] <= b[i]) {
      sort[i] = a[i];
    }
  }
  return sort
};

console.log(mergeSort([1,2,3],[4,5]));
