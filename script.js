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