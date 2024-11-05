// Creating the array that stores books in the library
const myLibrary = [];

// Object constructor for the books
function Book(title, author) {
    this.title = title,
    this.author = author;
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien');
const theLastKingdom = new Book ('The Last Kingdom', 'Bernard Cornwell');

function addBookToLibrary(newBook) {
    let book = newBook;

    myLibrary.push(book);
}

addBookToLibrary(theHobbit);
addBookToLibrary(theLastKingdom);

console.log(myLibrary);