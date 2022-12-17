export class AuthorForm {

    #formElement;
    #author;
    #authorInputElement;

    constructor(params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#authorInputElement = document.getElementById(params.idAuthorInput)
        this.onChangeAuthor();
    }
    addSubmitHandler(processPagesFun) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const authorSearch = this.#authorInputElement.value;
            const authorObj = { idAuthorInput: authorSearch }

            console.log(authorObj)
            processPagesFun(authorObj)
        })
    }

    onChangeAuthor() {

        this.#authorInputElement.addEventListener("change", (event) => {
            this.#author = event.target.value;
        })
    }

}



