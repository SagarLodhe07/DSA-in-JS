// const studentData = ["Ajay", "Sagar", "James", "Rob", "Mac", "Tia"];

// const find = (array, name) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === name) {
//       console.log(`Student find ${array[i]} `);
//     }
//   }
//         // 2 way
// //   const d = array.filter((n)=>n==name)
// //   return console.log(d);

// };

// find(studentData, "Mac");

const grociries = ["milk", "eggs", "bread", "wheat", "tea"];

const searchItem = (item) => {
  for (let i = 0; i < grociries.length; i++) {
    if (grociries[i] === item) {
      console.log(`found ${item} on ${i} number`);
    }
  }
};

searchItem("tea")