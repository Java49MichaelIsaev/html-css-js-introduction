import { Library } from "./data/library.js";
import { BooksList } from "./ui/BooksList.js";
import { BookForm } from "./ui/BookForm.js";
import { PagesForm } from "./ui/PagesForm.js";
import { AuthorForm } from "./ui/AuthorForm.js";

const MIN_PAGES = 50;
const MAX_PAGES = 2000;
const minDateString = '1980-01-01';
const ACTIVE = "active"

const listAllBooks = new BooksList("books-all");
const listBooksByPages = new BooksList("books-pages");
const listBooksByAuthor = new BooksList("books-author");
const sectionsElement = document.querySelectorAll("section");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");

const library = new Library();

const bookForm = new BookForm({
    idForm: "book_form", idPagesInput: "pages_input",
    idDateInput: "date_input", idPagesError: "pages_error", idDateError: "date_error",
    minPages: MIN_PAGES, maxPages: MAX_PAGES, minDate: new Date(minDateString)
});

bookForm.addSubmitHandler((book) => library.addBook(book));


const paramsPages = { idForm: "pages-form", idPagesFromInput: "pagesFrom", idPagesToInput: "pagesTo", idErrorMessage: "pages_form_error" };
const pagesForm = new PagesForm(paramsPages);
pagesForm.addSubmitHandler((pagesObj) => {
    const books = library.getBooksbyPagesRange(pagesObj.pagesFrom, pagesObj.pagesTo);
    console.log(books);
    listBooksByPages.showBooks(books);
})


const paramsAuthor = { idForm: "author_form", idAuthorInput: "author-name" }
const authorForm = new AuthorForm(paramsAuthor);
authorForm.addSubmitHandler((authorObj) => {
    const authors = library.getBooksbyAuthor(authorObj.idAuthorInput);
    console.log(authors);
    listBooksByAuthor.showBooks(authors);
})


function showSection(index) {
    buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const books = library.getAllBooks();
        listAllBooks.showBooks(books);
    }
}

window.showSection = showSection;
