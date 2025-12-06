const library = [];

function Book() {
    this.title = titleBook;
    this.author = authorBook;
    this.pages = pagesBook;
    this.publisher = publisherBook;
    this.year = yearPublished;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, publisher, year) {
    titleBook = title;
    authorBook = author;
    pagesBook = pages;
    publisherBook = publisher;
    yearPublished = year;
    currentBook = new Book();
    library.push(currentBook);
}

function generateTable() {
    for (const books of library) {
        const tableBody = document.querySelector("tbody");
        const tableRow = document.createElement("tr");
        tableBody.appendChild(tableRow);
        tableRow.innerHTML = `<td class=bookTitle>${books.title}</td><td class=bookAuthor>${books.author}</td><td class=bookPages>${books.pages}</td><td class=bookPublisher>${books.publisher}</td><td class=bookYearPublished>${books.year}</td>`
    }
}