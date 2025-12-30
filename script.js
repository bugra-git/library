const library = [];

class Book {
    constructor(title, author, pages, publisher, year) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.publisher = publisher;
        this.year = year;
        this.id = crypto.randomUUID();
        this.presence = "Present"
    }

    togglePresence() {
        this.presence = this.presence === "Present" ? "Absent" : "Present";
    }
}

function generateTable() {
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML ="";
    for (const book of library) {
        const tableRow = document.createElement("tr");
        tableBody.appendChild(tableRow);
        tableRow.innerHTML = `<td class="delete-cell"><button class="delete" data-id="${book.id}">Delete Item</button></td><td class=bookTitle>${book.title}</td><td class=bookAuthor>${book.author}</td><td class=bookPages>${book.pages}</td><td class=bookPublisher>${book.publisher}</td><td class=bookYearPublished>${book.year}</td><td class="presence"><span>${book.presence}</span><button class="toggle" data-id="${book.id}">${book.presence === "Present" ? "✔" : "✘"}</button></td>`
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
            const id = btn.dataset.id;
            const book = library.find(b => b.id === id);
            if (!book) return;
            book.togglePresence();
            const presenceCell = btn.parentElement;
            btn.textContent = book.presence === "Present" ? "✔" : "✘";
            presenceCell.querySelector("span").textContent = book.presence;
        });
    });
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
    const currentBook = new Book(inputTitle,inputAuthor,inputPages,inputPublisher,inputYear);
    library.push(currentBook);
    dialog.close();
    form.reset();
});

const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click",()=>dialog.close());

const tableBtn = document.getElementById("createTable");
tableBtn.addEventListener("click",()=>generateTable());