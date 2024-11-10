// Creating the array that stores books in the library
const myLibrary = [];

// Object constructor for the books
function Book(title, author, status) {
    this.title = title,
    this.author = author;
    this.status = status;
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 'on');
const theFellowship = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 'on');
const theLastKingdom = new Book ('The Last Kingdom', 'Bernard Cornwell', 'on');
const dune = new Book('Dune', 'Frank Herbert', 'on');
const duneMessiah = new Book('Dune Messiah', 'Frank Herbert', 'off');

function addBookToLibrary(newBook) {
    let book = newBook;

    myLibrary.push(book);
}

// Test cases

addBookToLibrary(theHobbit);
addBookToLibrary(theLastKingdom);
addBookToLibrary(dune);
addBookToLibrary(duneMessiah);
addBookToLibrary(theFellowship);

const libraryDiv = document.getElementById("library");

// Function to remove current book through delete button
function removeBook(index){
        let currentIndex = index;
        myLibrary.splice(currentIndex, 1);

        refreshLibrary();
        displayBooks(myLibrary);
}
        

// Function to loop through library array and display each result

function displayBooks(library) {
    for (let i = 0; i < library.length; i++) {
        let bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.dataset.index = i;

        let title = document.createElement("h2");
        let node = document.createTextNode(library[i].title);
        title.appendChild(node);

        let author = document.createElement("h3");
        let authorNode = document.createTextNode(library[i].author);
        author.appendChild(authorNode);

        bookDiv.appendChild(title);
        bookDiv.appendChild(author);

        const deleteBttn = document.createElement('button')
        const deleteTxt = document.createTextNode('delete');
        deleteBttn.appendChild(deleteTxt);
        deleteBttn.classList.add("delete");
        deleteBttn.addEventListener('click' , () => {
            removeBook(bookDiv.dataset.index);
         }); 

        const readDiv = document.createElement("div");
        readDiv.classList.add("readDiv");

        const readBttn = document.createElement("div");
        readBttn.classList.add("readWrapper");

        const toggle = document.createElement("input");
        toggle.type = "checkbox";
        toggle.setAttribute("id", "id"+i);
        toggle.classList.add("id");
        if (library[i].status === 'on'){
            toggle.checked = true;
        }
        toggle.addEventListener("change", (e) => {
            this.readStatusValue = e.target.checked ? 'on' : 'off';
            library[i].status = this.readStatusValue;
        });
        const label = document.createElement("label");
        label.classList.add("toggle");
        label.setAttribute("for", "id"+i);
        const span = document.createElement("span");
        label.appendChild(span);
        readBttn.appendChild(toggle);
        readBttn.appendChild(label);

        const readStatus = document.createElement("p");
        const readText = document.createTextNode("read:");
        readStatus.appendChild(readText);

        const readBttnWrapper = document.createElement("div");
        readBttnWrapper.classList.add("readBttnWrapper");

        readBttnWrapper.appendChild(readStatus);
        readBttnWrapper.appendChild(readBttn);

        readDiv.appendChild(deleteBttn);
        readDiv.appendChild(readBttnWrapper);

        bookDiv.appendChild(readDiv);

        
        libraryDiv.appendChild(bookDiv);
        
    }
}

displayBooks(myLibrary);

// function clear library, used to display the updated library after user adds a book

function refreshLibrary() {
    while (libraryDiv.lastElementChild) {
        libraryDiv.removeChild(libraryDiv.lastElementChild);
      }
}

// funcitonality for a user to add a new book to the library

const bookCreator = document.getElementById('bookCreator');
const bookBtn = document.getElementById('newBook');
const submitBtn = document.getElementById('submit');


bookBtn.addEventListener('click', () => {
    bookCreator.showModal();
});

submitBtn.addEventListener('click', () => {
    const titleInput = document.getElementById("bookTitle");
    const titleValue = titleInput.value;
    const authInput = document.getElementById("bookAuthor");
    const authValue = authInput.value;
    
    const userBook = new Book(titleInput.value, authInput.value);

    addBookToLibrary(userBook);
    refreshLibrary();
    displayBooks(myLibrary);
    
    titleInput.value = "";
    authInput.value = "";
});

