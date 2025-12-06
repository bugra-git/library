const library = [];

function Book() {
    this.title = titleBook;
    this.author = authorBook;
    this.pages = pagesBook;
    this.publisher = publisherBook;
    this.year = yearPublished;
    this.id = crypto.randomUUID();
    this.presence = "Present"
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
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML ="";
    for (const books of library) {
        const tableRow = document.createElement("tr");
        tableBody.appendChild(tableRow);
        tableRow.innerHTML = `<td class="delete-cell"><button class="delete" data-id="${books.id}">Delete Item</button></td><td class=bookTitle>${books.title}</td><td class=bookAuthor>${books.author}</td><td class=bookPages>${books.pages}</td><td class=bookPublisher>${books.publisher}</td><td class=bookYearPublished>${books.year}</td><td class="presence"><span>${books.presence}</span><button class="toggle" data-id="${books.id}">✔</button></td>`
    }
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            const index = library.findIndex(book => book.id === id);
            if (index !== -1) {
                library.splice(index, 1);
            }
            generateTable();
        });
    });

    const presenceButtons = document.querySelectorAll(".toggle");
    presenceButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const presenceCell = btn.parentElement;
            const presenceStatus = presenceCell.querySelector("span").textContent
            const newStatus = presenceStatus === "Present" ? "Absent" : "Present";
            btn.textContent = newStatus === "Present" ? "✔" : "✘";
            presenceCell.querySelector("span").textContent = newStatus;
            const id = btn.dataset.id;
            const index = library.findIndex(book => book.id === id);
            if (index !== -1) {
                library[index].presence =newStatus;
            }
        })
    })
}

const openDialogBtn = document.querySelector("#openDialog");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");

openDialogBtn.addEventListener("click",() => dialog.showModal());

const confirmBtn = document.getElementById("confirmBtn");
confirmBtn.addEventListener("click",(btn) => {
    btn.preventDefault();
    let inputTitle = document.getElementById("title").value;
    let inputAuthor = document.getElementById("author").value;
    let inputPages = document.getElementById("pages").value;
    let inputPublisher = document.getElementById("publisher").value;
    let inputYear = document.getElementById("publishyear").value;
    addBookToLibrary(inputTitle,inputAuthor,inputPages,inputPublisher,inputYear);
    dialog.close();
    form.reset();
});

const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click",()=>dialog.close());

const tableBtn = document.getElementById("createTable");
tableBtn.addEventListener("click",()=>generateTable());