const person: {
  name: String;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "pankaj",
  age: 35,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"]
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());

  //console.log(hobby.map()); // ERROR!!
}
console.log(person.role[1]);
