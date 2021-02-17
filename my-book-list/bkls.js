class Book {
  constructor(title, author, isbn, pages, pagesRead) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  static appendBookList(bk) {
    const tableRow = document.createElement("tr");

    Object.keys(bk).forEach((data) => {
      console.log(bk[data]);
      const tableData = document.createElement("td");
      tableData.textContent = bk[data];
      tableRow.appendChild(tableData);
    });

    const aLink = document.createElement("a");
    aLink.href = "#";
    aLink.className = "btn btn-danger btn-sm delete";
    aLink.innerText = "x";

    const xButton = document.createElement("td");
    xButton.appendChild(aLink);

    tableRow.appendChild(xButton);

    const bookList = document.querySelector("#bkls");
    bookList.appendChild(tableRow);
  }

  static deleteBook(ele) {
    if (ele.classList.contains("delete")) {
      ele.parentElement.parentElement.remove();
    }
  }

  static showAlert(msg, className) {
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(msg));
    const container = document.querySelector(".container");
    const form = document.querySelector("#bkls-form");
    container.insertBefore(div, form);
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }

  static clearForm() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  static showList() {
    const books = Store.getBooks();

    books.forEach((bk) => {
      UI.appendBookList(bk);
    });
  }
}

class Store {
  static getBooks() {
    let books;

    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  static addBook(bk) {
    const books = Store.getBooks();
    books.push(bk);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static delBook(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      } else {
        console.log("Whoops!");
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}

document.querySelector("#bkls-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Try again!", "alert alert-danger");
  } else {
    const book = new Book(title, author, isbn);
    Store.addBook(book);
    UI.showAlert("Book added!", "alert alert-success");
    UI.appendBookList(book);
    UI.clearForm();
  }
});

document.querySelector("#bkls").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
  Store.delBook(e.target.parentElement.previousElementSibling.textContent);
  UI.showAlert("Book deleted!", "alert alert-success");
});

document.addEventListener("DOMContentLoaded", UI.showList);
