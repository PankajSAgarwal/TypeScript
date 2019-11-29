// const person: {
//   name: String;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "pankaj",
//   age: 35,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"]
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: "Pankaj",
  age: 35,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());

  //console.log(hobby.map()); // ERROR!!
}
if (person.role === Role.ADMIN) {
  console.log("IS ADMIN");
}
//console.log(person.role[1]);
