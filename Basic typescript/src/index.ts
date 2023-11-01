// typescript for javascript programmers

import { type } from "os";

// Defining types - interfaces, type, directly
interface Book {
  title: String;
  author: String;
  price: Number;
  read: Boolean;
}

interface reviews {
  name: String;
  desc: String;
  stars: Number;
}

// redeclare interface to extend interface
interface Book {
  reviews: reviews[];
}

const book: Book = {
  title: "Rudest book ever",
  author: "Swetabh",
  price: 150,
  read: true,
  reviews: [{ name: "Victor", desc: "A very nice book", stars: 4 }],
};

console.log(book);

type BookType = {
  title: String;
  price: Number;
};

const book2: BookType = {
  title: "dopamine nation",
  price: 123,
};

console.log(book2);

// you can extend type with interface and interface with type
type ScienceBooks = { genre: String } & BookType;
type SelfHelpBooks = { genre: String } & Book;

interface Kids extends Book {
  AimedAt: "Kids";
}

interface Teenagers extends BookType {
  AimedAt: "Teenagers";
}

// has only title and price since it is an extension of BookType
let DopamineNation: ScienceBooks = {
  genre: "Science",
  title: "Dopamine Nation",
  price: 234,
};

let RudestBook: SelfHelpBooks = { ...book, genre: "self help" };

let PeterPan: Kids = { ...book, AimedAt: "Kids" };
let TwilightSaga: Teenagers = { ...book2, AimedAt: "Teenagers" };

console.log(DopamineNation, RudestBook, PeterPan, TwilightSaga);

// Defining types directly
const car: { name: String; model: String; price: Number } = {
  name: "scorpio",
  model: "x-12",
  price: 4800000,
};

// Composing types - Unions and generics
type youExist = true | false;
type submitStatus = "pending" | "submitted" | "rejected";

// Generics - they provide variables to types
type numberArray = Array<Number>;
type stringArray = Array<String>;
type objectArray = Array<{ youExist: Boolean }>;

// Structural type system
function PrintBook(b: BookType) {
  console.log(b);
}
const cantHurtMe = {
  title: "Can't hurt me",
  author: "david goggins",
  price: 200,
};

// passing this in PrintBook will throw error
const hexcode = {
  hexVal: "122",
};

PrintBook(cantHurtMe);


