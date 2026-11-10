let tbrBooks = JSON.parse(localStorage.getItem("tbrBooks")) || [];
let finishedBooks = JSON.parse(localStorage.getItem("finishedBooks")) || [];


function changeQuote() {
    const quoteDisplay = document.getElementById("book-quote");

    const quotes = [
        "“A reader lives a thousand lives before he dies.”",
        "“Books are a uniquely portable magic.”",
        "“Reading is dreaming with open eyes.”",
        "“There is no friend as loyal as a book.”"
    ];

    const randomNumber = Math.floor(Math.random() * quotes.length);

    quoteDisplay.innerText = quotes[randomNumber];
}


function addBook() {
    const titleInput = document.getElementById("book-title-input");
    const authorInput = document.getElementById("book-author-input");
    const genreInput = document.getElementById("book-genre-input");

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const genre = genreInput.value.trim();

    if (title === "" || author === "" || genre === "") {
        alert("Please fill out the title, author, and genre.");
        return;
    }

    const newBook = {
        title: title,
        author: author,
        genre: genre
    };

    tbrBooks.push(newBook);

    localStorage.setItem("tbrBooks", JSON.stringify(tbrBooks));

    titleInput.value = "";
    authorInput.value = "";
    genreInput.value = "";

    renderTBR();
}


function renderTBR() {
    const bookList = document.getElementById("tbr-list");
    const tbrCount = document.getElementById("tbr-count");

    if (bookList === null) {
        return;
    }

    bookList.innerHTML = "";

    for (let i = 0; i < tbrBooks.length; i++) {
        const book = tbrBooks[i];

        const bookItem = document.createElement("li");
        bookItem.classList.add("tbr-book");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            markBookFinished(i);
        });

        const titleText = document.createElement("p");
        titleText.innerText = book.title;

        const authorText = document.createElement("p");
        authorText.innerText = book.author;

        const genreText = document.createElement("p");
        genreText.innerText = book.genre;

        bookItem.appendChild(checkbox);
        bookItem.appendChild(titleText);
        bookItem.appendChild(authorText);
        bookItem.appendChild(genreText);

        bookList.appendChild(bookItem);
    }

    tbrCount.innerText = tbrBooks.length;
}


function markBookFinished(bookIndex) {
    const finishedBook = tbrBooks[bookIndex];

    finishedBooks.push(finishedBook);
    tbrBooks.splice(bookIndex, 1);

    localStorage.setItem("tbrBooks", JSON.stringify(tbrBooks));
    localStorage.setItem("finishedBooks", JSON.stringify(finishedBooks));

    renderTBR();
    updateBooksRead();
}


function updateBooksRead() {
    const booksReadDisplay = document.getElementById("books-read-display");

    if (booksReadDisplay !== null) {
        booksReadDisplay.innerText = finishedBooks.length;
    }
}


renderTBR();
updateBooksRead();