

const mergeSort = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let k = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result[k] = arr1[i];
      k++;
      i++;
    } else {
      result[k] = arr2[j];
      k++;
      j++;
    }
  }
  while (i < arr1.length) {
    result[k] = arr1[i];
    i++;
    k++;
  }
  while (j < arr2.length) {
    result[k] = arr2[j];
    j++;
    k++;
  }

  return result;
};

console.log(mergeSort([1, 2, 3,12,15,20], [4, 5,6,7,8,9]));
