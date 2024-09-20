const powerNumber = (base, power) => {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= base;
  }
  return result
};

console.log(powerNumber(4,2));
