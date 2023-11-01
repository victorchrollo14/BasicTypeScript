"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Type by inference
let firstName = "Naruto";
console.log(firstName);
// Explicit type assignment
let secondName = "Uzumaki";
const fullName = `${secondName} ${firstName}`;
console.log(fullName);
// Special types: any
let itemExists = true;
itemExists = "yep it does not exist";
// Special type: unknown
let items = 1;
items = ["fruits"];
items = () => {
    return "fruits, apples";
};
console.log(items);
// Special type: never
let x;
// Special type: undefined & null
let y = undefined;
let z = null;
console.log(y, z);
// Arrays
const names = ["Luffy", "Naruto", "kenshin"];
const bounties = [3000000000, 3000000000, 1000000000]; // readonly
names.push("Roronoa Zoro");
console.log(names, bounties);
// Tuples
let ourTuples;
ourTuples = [5, true, "Coding is fun"];
let readOnlyTuples;
let graph;
graph = [10, 12.2];
const [a, b] = graph; // destructuring tuples
console.log(a, b);
// Object types
let Car;
Car = {
    type: "A-3",
    name: "Toyota",
    year: 1999,
};
console.log(Car);
//# sourceMappingURL=basic.js.map