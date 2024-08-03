const hammingdistance = (x, y) => {
  let distance = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) distance++;
  }
  return distance;
};
console.log(hammingdistance('hello','hwllr'));