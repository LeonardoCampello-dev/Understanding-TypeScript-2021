enum Role {
  ADMIN = 1,
  AUTHOR,
  READ_ONLY,
}

const person = {
  name: "Leonardo",
  age: 20,
  hobbies: ["music", "games", "sports"],
  role: Role.ADMIN,
};

console.log(person);

// var Role;
// (function (Role) {
//   Role[(Role["ADMIN"] = 1)] = "ADMIN";
//   Role[(Role["AUTHOR"] = 2)] = "AUTHOR";
//   Role[(Role["READ_ONLY"] = 3)] = "READ_ONLY";
// })(Role || (Role = {}));
// var person = {
//   name: "Leonardo",
//   age: 20,
//   hobbies: ["music", "games", "sports"],
//   role: Role.ADMIN,
// };
// console.log(person);
