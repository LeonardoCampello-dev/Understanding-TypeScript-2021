const person = {
  name: "Leonardo",
  age: 20,
  hobbies: ["music", "games", "sports"],
};

let favoriteActivities: string[];
favoriteActivities = ["dance"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(person);
