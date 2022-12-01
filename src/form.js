const inputElements = document.querySelectorAll(".form-class [name]");
const salaryBox = document.getElementById("salaryBox");


function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(employee)
}
function onChange(event) {
    if (event.target.name == "salary") {
        if(+event.target.value < 1000 || +event.target.value > 40000){
            event.target.value=''
            salaryBox.classList.add("salary")
            window.alert("Salary must be between 1000 and 40000");
        }
    }
}



    //red label (значение не правильное - будет рессет) = css - massage = alert + button OK = обнуление - введите правильную         
    
// найти способ получить год рождения из строки - сабстринг???