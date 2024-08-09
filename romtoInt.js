const romanToInt = (s) => {
  const romanSymbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let final = 0;
  for (let i = 0; i < s.length; i++) {
    let current = romanSymbol[s[i]];
    let next = romanSymbol[s[i + 1]];

    final += next > current ? -current : current;
  }
  return final;
};



console.log(romanToInt('III'));
console.log(romanToInt('IV`'));

// Subscribe for more 
// comments 
// like