const inputElements = document.querySelectorAll(".form-class [name]");
const salaryBox = document.getElementById("salaryBox");
const errorBox = document.getElementById("error")

function onSubmit(event) {
    
    event.preventDefault();
    console.log("submitted");
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
}
function onChange(event) {

    if (event.target.name == "salary") {
        if (+event.target.value < 1000 || +event.target.value > 40000) {
            salaryBox.classList.add("salary")
            document.getElementById("main").style.display = "none";
            errorBox.innerHTML = "Sorry, salary must be between 1000 and 40000";
            setTimeout(showAlert, 5000)
            event.target.value = ''
        }
    }

    if (event.target.name == "birthDate") {
        if (+event.target.value.substring(0, 4) < 1950 || +event.target.value.substring(0, 4) > new Date().getFullYear()) {
            birthDate.classList.add("birthdate")
            document.getElementById("main").style.display = "none";
            errorBox.innerHTML = "Sorry, the year cannot be less than 1950 and greater than the current year";
            setTimeout(showAlert, 5000)
            event.target.value = ''
        }
    }

}

function showAlert() {
    errorBox.innerHTML = "";
    return document.getElementById("main").style.display = "block"

}

