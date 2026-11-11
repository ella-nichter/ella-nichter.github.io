let tbrBooks = JSON.parse(localStorage.getItem("tbrBooks")) || [];
let finishedBooks = JSON.parse(localStorage.getItem("finishedBooks")) || [];

let selectedGenre = "";
let selectedVibe = "";


/* HOME PAGE */

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


/* TBR PAGE */

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
/* CURRENTLY READING BOOK */

let currentBook = JSON.parse(localStorage.getItem("currentBook")) || {
    title: "Book Title",
    author: "Author Name",
    genre: "Genre Name"
};

function showNewBookForm() {
    const newBookForm = document.getElementById("new-book-form");

    if (newBookForm.style.display === "grid") {
        newBookForm.style.display = "none";
    } else {
        newBookForm.style.display = "grid";
    }
}

function saveCurrentBook() {
    const titleInput = document.getElementById("current-book-title-input");
    const authorInput = document.getElementById("current-book-author-input");
    const genreInput = document.getElementById("current-book-genre-input");

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const genre = genreInput.value.trim();

    if (title === "" || author === "" || genre === "") {
        alert("Please fill out the title, author, and genre.");
        return;
    }

    currentBook = {
        title: title,
        author: author,
        genre: genre
    };

    localStorage.setItem("currentBook", JSON.stringify(currentBook));

    updateCurrentBook();

    titleInput.value = "";
    authorInput.value = "";
    genreInput.value = "";

    document.getElementById("new-book-form").style.display = "none";
}

function updateCurrentBook() {
    const currentTitle = document.getElementById("current-title");
    const currentAuthor = document.getElementById("current-author");
    const currentGenre = document.getElementById("current-genre");
    const currentBookCoverText = document.getElementById("current-book-cover-text");


    if (currentTitle !== null) {
    currentTitle.innerText = currentBook.title;
    currentAuthor.innerText = "Author: " + currentBook.author;
    currentGenre.innerText = "Genre: " + currentBook.genre;
    currentBookCoverText.innerText = currentBook.title;
    }
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


/* BOOK PICKER PAGE */

function chooseGenre(genre, button) {
    selectedGenre = genre;

    const genreButtons = document.querySelectorAll(".genre-button");

    for (let i = 0; i < genreButtons.length; i++) {
        genreButtons[i].classList.remove("selected-genre");
    }

    button.classList.add("selected-genre");
}

function chooseVibe(vibe, button) {
    selectedVibe = vibe;

    const vibeButtons = document.querySelectorAll(".vibe-button");

    for (let i = 0; i < vibeButtons.length; i++) {
        vibeButtons[i].classList.remove("selected-vibe");
    }

    button.classList.add("selected-vibe");
}

function generateRecommendation() {
    const recommendationTitle = document.getElementById("recommendation-title");
    const recommendationAuthor = document.getElementById("recommendation-author");
    const recommendationGenre = document.getElementById("recommendation-genre");
    const recommendationCover = document.getElementById("recommendation-cover-image");

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
                author: "Emily Henry",
                cover: "https://covers.openlibrary.org/b/isbn/9780593334836-L.jpg"
            },
            {
                title: "The Seven Husbands of Evelyn Hugo",
                author: "Taylor Jenkins Reid",
                cover: "https://covers.openlibrary.org/b/isbn/9781501139239-L.jpg"
            }
        ],

        Thriller: [
            {
                title: "The Silent Patient",
                author: "Alex Michaelides",
                cover: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg"
            },
            {
                title: "The Housemaid",
                author: "Freida McFadden",
                cover: "https://covers.openlibrary.org/b/isbn/9781538742570-L.jpg"
            }
        ],

        Fantasy: [
            {
                title: "The Night Circus",
                author: "Erin Morgenstern",
                cover: "https://covers.openlibrary.org/b/isbn/9780385534635-L.jpg"
            },
            {
                title: "The Priory of the Orange Tree",
                author: "Samantha Shannon",
                cover: "https://covers.openlibrary.org/b/isbn/9781635570298-L.jpg"
            }
        ],

        Mystery: [
            {
                title: "A Good Girl's Guide to Murder",
                author: "Holly Jackson",
                cover: "https://covers.openlibrary.org/b/isbn/9781984896393-L.jpg"
            },
            {
                title: "The Thursday Murder Club",
                author: "Richard Osman",
                cover: "https://covers.openlibrary.org/b/isbn/9781984880986-L.jpg"
            }
        ],

        "Science Fiction": [
            {
                title: "Dark Matter",
                author: "Blake Crouch",
                cover: "https://covers.openlibrary.org/b/isbn/9781101904220-L.jpg"
            },
            {
                title: "The Martian",
                author: "Andy Weir",
                cover: "https://covers.openlibrary.org/b/isbn/9780553418026-L.jpg"
            }
        ],

        Romantasy: [
            {
                title: "Fourth Wing",
                author: "Rebecca Yarros",
                cover: "https://covers.openlibrary.org/b/isbn/9781649374042-L.jpg"
            },
            {
                title: "A Court of Thorns and Roses",
                author: "Sarah J. Maas",
                cover: "https://covers.openlibrary.org/b/isbn/9781635575552-L.jpg"
            }
        ]
    };

    const possibleBooks = bookRecommendations[selectedGenre];
    const randomNumber = Math.floor(Math.random() * possibleBooks.length);
    const chosenBook = possibleBooks[randomNumber];

    recommendationTitle.innerText = chosenBook.title;

    recommendationAuthor.innerText =
        "By " + chosenBook.author +
        " — perfect for a " + selectedVibe.toLowerCase() + " reading mood.";

    recommendationGenre.innerText = selectedGenre + " recommendation";

    recommendationCover.src = chosenBook.cover;
    recommendationCover.alt = "Cover of " + chosenBook.title;
  
}

/* STATS PAGE */

function updateBooksRead() {
    const booksReadDisplay = document.getElementById("books-read-display");
    const statsBooksRead = document.getElementById("stats-books-read");

    if (booksReadDisplay !== null) {
        booksReadDisplay.innerText = finishedBooks.length;
    }

    if (statsBooksRead !== null) {
        statsBooksRead.innerText = finishedBooks.length;
    }

    renderStats();
}

function renderStats() {
    const favoriteGenreDisplay = document.getElementById("favorite-genre-display");
    const genreChart = document.getElementById("genre-chart");
    const finishedBooksList = document.getElementById("finished-books-list");

    if (favoriteGenreDisplay === null) {
        return;
    }

    if (finishedBooks.length === 0) {
        favoriteGenreDisplay.innerText = "No books yet";
        genreChart.innerHTML = "<p id='genre-chart-message'>Finish a book from your TBR to see your genre chart!</p>";
        finishedBooksList.innerHTML = "<li id='finished-books-message'>Your finished books will appear here.</li>";
        return;
    }

    let genreCounts = {};

    for (let i = 0; i < finishedBooks.length; i++) {
        const genre = finishedBooks[i].genre;

        if (genreCounts[genre] === undefined) {
            genreCounts[genre] = 1;
        } else {
            genreCounts[genre] = genreCounts[genre] + 1;
        }
    }

    let favoriteGenre = "";
    let highestGenreCount = 0;

    for (let genre in genreCounts) {
        if (genreCounts[genre] > highestGenreCount) {
            favoriteGenre = genre;
            highestGenreCount = genreCounts[genre];
        }
    }

    favoriteGenreDisplay.innerText = favoriteGenre;

    genreChart.innerHTML = "";

    for (let genre in genreCounts) {
        const barRow = document.createElement("div");
        barRow.classList.add("genre-bar-row");

        const genreName = document.createElement("p");
        genreName.innerText = genre;

        const barBackground = document.createElement("div");
        barBackground.classList.add("genre-bar-background");

        const barFill = document.createElement("div");
        barFill.classList.add("genre-bar-fill");

        const barWidth = (genreCounts[genre] / highestGenreCount) * 100;
        barFill.style.width = barWidth + "%";

        const genreNumber = document.createElement("p");
        genreNumber.innerText = genreCounts[genre];

        barBackground.appendChild(barFill);

        barRow.appendChild(genreName);
        barRow.appendChild(barBackground);
        barRow.appendChild(genreNumber);

        genreChart.appendChild(barRow);
    }

    finishedBooksList.innerHTML = "";

    for (let i = finishedBooks.length - 1; i >= 0; i--) {
        const book = finishedBooks[i];

        const bookItem = document.createElement("li");
        bookItem.classList.add("finished-book");

        const title = document.createElement("p");
        title.classList.add("finished-book-title");
        title.innerText = book.title;

        const details = document.createElement("p");
        details.classList.add("finished-book-details");
        details.innerText = "By " + book.author + " • " + book.genre;

        bookItem.appendChild(title);
        bookItem.appendChild(details);

        finishedBooksList.appendChild(bookItem);
    }
}


/* RUNS WHEN EACH PAGE OPENS */

renderTBR();
updateBooksRead();
updateCurrentBook();