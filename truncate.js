const truncate = (string, maxLength) => {
  return string.length > maxLength ? string.slice(0, maxLength) + "..." : string;
};

console.log(truncate("Sagar how are you ?",9));