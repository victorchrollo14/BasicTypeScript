"use strict";
// typescript for javascript programmers
Object.defineProperty(exports, "__esModule", { value: true });
const book = {
    title: "Rudest book ever",
    author: "Swetabh",
    price: 150,
    read: true,
    reviews: [{ name: "Victor", desc: "A very nice book", stars: 4 }],
};
console.log(book);
const book2 = {
    title: "dopamine nation",
    price: 123,
};
console.log(book2);
// has only title and price since it is an extension of BookType
let DopamineNation = {
    genre: "Science",
    title: "Dopamine Nation",
    price: 234,
};
let RudestBook = { ...book, genre: "self help" };
let PeterPan = { ...book, AimedAt: "Kids" };
let TwilightSaga = { ...book2, AimedAt: "Teenagers" };
console.log(DopamineNation, RudestBook, PeterPan, TwilightSaga);
// Defining types directly
const car = {
    name: "scorpio",
    model: "x-12",
    price: 4800000,
};
// Structural type system
function PrintBook(b) {
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
//# sourceMappingURL=index.js.map