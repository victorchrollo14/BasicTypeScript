import * as fs from "fs";
import { hey } from "./helper";

// Type by inference
let firstName = "Naruto";
console.log(firstName);

// Explicit type assignment
let secondName: String = "Uzumaki";
const fullName = `${secondName} ${firstName}`;

console.log(fullName);

// Special types: any
let itemExists: any = true;
itemExists = "yep it does not exist";

// Special type: unknown
let items: unknown = 1;
items = ["fruits"];
items = () => {
  return "fruits, apples";
};

console.log(items);

// Special type: never
let x: never;

// Special type: undefined & null
let y: undefined = undefined;
let z: null = null;

console.log(y, z);

// Arrays
const names: String[] = ["Luffy", "Naruto", "kenshin"];
const bounties: readonly Number[] = [3000000000, 3000000000, 1000000000]; // readonly

names.push("Roronoa Zoro");
console.log(names, bounties);

// Tuples
let ourTuples: [Number, Boolean, String];
ourTuples = [5, true, "Coding is fun"];

let readOnlyTuples: readonly [Number, String, String | Boolean];

let graph: [x: Number, y: Number];
graph = [10, 12.2];
const [a, b] = graph; // destructuring tuples
console.log(a, b);

// Object types
let Car: {
  type: String;
  name: String;
  year: Number;
};

Car = {
  type: "A-3",
  name: "Toyota",
  year: 1999,
};

console.log(Car);
