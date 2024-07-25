console.log("- Activity 1");
let book = {
  title: "Javascript",
  author: "ABC",
  year: 2022,
};
console.log(book);
console.log(book.title, book.author);

console.log("- Activity 2");
book.display = function () {
  return `Title: ${book.title}   Author: ${book.author}`;
};
console.log(book.display());
book.updateYear = function (year) {
  console.log(`Previous: ${book.year}`);
  book.year = year;
  console.log(`Current: ${book.year}`);
};
book.updateYear(2023);
console.log(book);

console.log("- Activity 3");
const library = {
  name: "Js Books",
  books: [
    {
      title: "Js Beginner",
      author: "B",
    },
    {
      title: "Js Intermediate",
      author: "I",
    },
    {
      title: "Js Advanced",
      author: "A",
    },
  ],
};
console.log(library);
console.log(`Library Name: ${library.name}`);
console.log("Books available");
library.books.map((book) => {
  console.log(book.title);
});

console.log("- Activity 4");
book.displayThis = function () {
  console.log(`Title: ${this.title}`);
  console.log(`Year: ${this.year}`);
};
book.displayThis();

console.log("- Activity 5");
console.log("for...in");
for (const key in book) {
  console.log(`${key}: ${book[key]}`);
}
console.log("Object.keys & Object.values");
let keys = Object.keys(book);
console.log(keys);
let values = Object.values(book);
console.log(values);
