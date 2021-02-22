// Bad practice

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Leonardo",
//   age: 20,
// };

// Typescript inference takes care of that
const person = {
  name: "Leonardo",
  age: 20,
};

console.log(person);
