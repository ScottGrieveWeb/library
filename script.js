// Creating the array that stores books in the library
const myLibrary = [];

// Object constructor for the books
function Book(title, author, status) {
    this.title = title,
    this.author = author;
    this.status = status;
}


function addBookToLibrary(newBook) {
   myLibrary.push(newBook);
}

// Test cases
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 'on');
const theFellowship = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 'on');
const theLastKingdom = new Book ('The Last Kingdom', 'Bernard Cornwell', 'on');
const dune = new Book('Dune', 'Frank Herbert', 'on');
const duneMessiah = new Book('Dune Messiah', 'Frank Herbert', 'off');

addBookToLibrary(theHobbit);
addBookToLibrary(theLastKingdom);
addBookToLibrary(dune);
addBookToLibrary(duneMessiah);

const libraryDiv = document.getElementById("library");

// Function to remove current book through delete button
function removeBook(index){
        myLibrary.splice(index, 1);

        refreshLibrary();
        displayBooks(myLibrary);
}
        

// Function to loop through library array and display each result

function displayBooks(library) {
    for (let i = 0; i < library.length; i++) {
        // creates a new div for the book and assigns a unique index to it
        let bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.dataset.index = i;

        // creating the Title and Author text, and appending this into the div
        let title = document.createElement("h2");
        let node = document.createTextNode(library[i].title);
        title.appendChild(node);

        let author = document.createElement("h3");
        let authorNode = document.createTextNode(library[i].author);
        author.appendChild(authorNode);

        bookDiv.appendChild(title);
        bookDiv.appendChild(author);

        // adds a delete button and calls the removeBook function based on the unique index assigned to each book
        const deleteBttn = document.createElement('button')
        const deleteTxt = document.createTextNode('delete');
        deleteBttn.appendChild(deleteTxt);
        deleteBttn.classList.add("delete");
        deleteBttn.addEventListener('click' , () => {
            removeBook(bookDiv.dataset.index);
         }); 

        // adds a read status toggle
        const readDiv = document.createElement("div");
        readDiv.classList.add("readDiv");

        const readBttn = document.createElement("div");
        readBttn.classList.add("readWrapper");

        const toggle = document.createElement("input");
        toggle.type = "checkbox";
        toggle.setAttribute("id", "id"+i);
        toggle.classList.add("id");
        // if statement looks at current status of book in array, and turns on the toggle if status is already read
        if (library[i].status === 'on'){
            toggle.checked = true;
        }
        // event listener to update current book status depending on change to the toggle
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

        // review feature
        const reviewWrapper = "";

        bookDiv.appendChild(readDiv);

        //adds book into main library div
        libraryDiv.appendChild(bookDiv);
        
    }
}

displayBooks(myLibrary);

// function clear library, used to display the updated library after user adds/deletes a book

function refreshLibrary() {
    while (libraryDiv.lastElementChild) {
        libraryDiv.removeChild(libraryDiv.lastElementChild);
      }
}

// funcitonality for a user to add a new book to the library

const bookCreator = document.getElementById('bookCreator');
const bookBtn = document.getElementById('newBook');
const submitBtn = document.getElementById('submit');

// event listener on 'New Book' button that opens the modal pop-up
bookBtn.addEventListener('click', () => {
    bookCreator.showModal();
});
// event listener on tje 'Submit' button that adds the user's new book into library
submitBtn.addEventListener('click', () => {
    const titleInput = document.getElementById("bookTitle");
    const authInput = document.getElementById("bookAuthor");
    const statusInput = document.getElementById("bookStatus");
    let statusValue;
    if (statusInput.checked === true){
        statusValue = 'on'
    } else {
        statusValue = 'off';
    }
    
    const userBook = new Book(titleInput.value, authInput.value, statusValue);

    addBookToLibrary(userBook);
    refreshLibrary();
    displayBooks(myLibrary);
    
    //empties the form ready for next submission
    titleInput.value = "";
    authInput.value = "";
    statusInput.checked = false;
});

