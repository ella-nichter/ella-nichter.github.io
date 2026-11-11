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

let selectedGenre = "";
let selectedVibe = "";


function chooseGenre(genre) {
    selectedGenre = genre;

    const recommendationGenre = document.getElementById("recommendation-genre");

    recommendationGenre.innerText = "Genre selected: " + selectedGenre;
}


function chooseVibe(vibe) {
    selectedVibe = vibe;

    const recommendationAuthor = document.getElementById("recommendation-author");

    recommendationAuthor.innerText = "Vibe selected: " + selectedVibe;
}


function generateRecommendation() {
    const recommendationTitle = document.getElementById("recommendation-title");
    const recommendationAuthor = document.getElementById("recommendation-author");
    const recommendationGenre = document.getElementById("recommendation-genre");

    if (selectedGenre === "" || selectedVibe === "") {
        recommendationTitle.innerText = "Choose a genre and a vibe first!";
        recommendationAuthor.innerText = "";
        recommendationGenre.innerText = "";
        return;
    }

    const bookRecommendations = {
        Romance: [
            {
                title: "Book Lovers",
                author: "Emily Henry"
            },
            {
                title: "The Seven Husbands of Evelyn Hugo",
                author: "Taylor Jenkins Reid"
            }
        ],

        Thriller: [
            {
                title: "The Silent Patient",
                author: "Alex Michaelides"
            },
            {
                title: "The Housemaid",
                author: "Freida McFadden"
            }
        ],

        Fantasy: [
            {
                title: "Fourth Wing",
                author: "Rebecca Yarros"
            },
            {
                title: "The Night Circus",
                author: "Erin Morgenstern"
            }
        ],

        Mystery: [
            {
                title: "A Good Girl's Guide to Murder",
                author: "Holly Jackson"
            },
            {
                title: "The Thursday Murder Club",
                author: "Richard Osman"
            }
        ],

        "Science Fiction": [
            {
                title: "Dark Matter",
                author: "Blake Crouch"
            },
            {
                title: "The Martian",
                author: "Andy Weir"
            }
        ],

        Contemporary: [
            {
                title: "Tomorrow, and Tomorrow, and Tomorrow",
                author: "Gabrielle Zevin"
            },
            {
                title: "Normal People",
                author: "Sally Rooney"
            }
        ]
    };

    const possibleBooks = bookRecommendations[selectedGenre];

    const randomNumber = Math.floor(Math.random() * possibleBooks.length);

    const chosenBook = possibleBooks[randomNumber];

    recommendationTitle.innerText = chosenBook.title;

    recommendationAuthor.innerText =
        "By " + chosenBook.author + " — perfect for a " + selectedVibe.toLowerCase() + " reading mood.";

    recommendationGenre.innerText =
        selectedGenre + " recommendation";
}