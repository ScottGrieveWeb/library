// Creating the array that stores books in the library
const myLibrary = [];

// Object constructor for the books
function Book(title, author) {
    this.title = title,
    this.author = author;
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien');
const theLastKingdom = new Book ('The Last Kingdom', 'Bernard Cornwell');
const dune = new Book('Dune', 'Frank Herbert');

function addBookToLibrary(newBook) {
    let book = newBook;

    myLibrary.push(book);
}

// Test cases

addBookToLibrary(theHobbit);
addBookToLibrary(theLastKingdom);
addBookToLibrary(dune);


// Function to loop through library array and display each result

function displayBooks(library) {
    for (let i = 0; i < library.length; i++) {

        let title = document.createElement("h2");
        let node = document.createTextNode(library[i].title);
        title.appendChild(node);

        let author = document.createElement("h3");
        let authorNode = document.createTextNode(library[i].author);
        author.appendChild(authorNode);

        const libraryDiv = document.getElementById("library");
        libraryDiv.appendChild(title);
        libraryDiv.appendChild(author);
        
    }
}

