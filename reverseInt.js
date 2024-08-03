const reverse = (x) => {
  let rev = 0;
  const sign = Math.sign(x);
  x = Math.abs(x);

  while (x !== 0) {
    const m = x % 10;
    x = Math.floor(x / 10);
    signedInt = 2**31-1
    if (rev > signedInt / 10 || (rev === (signedInt) / 10 && m > 7)) {
      return 0;
    }
    rev = rev * 10 + m;
  }
  return sign * rev;
};
console.log(reverse(-123));