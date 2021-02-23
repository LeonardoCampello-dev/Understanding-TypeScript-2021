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
