let emp = {};
let result = []
let numberOfEmployees = 0

function createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary) {

    numberOfEmployees = nEmployees;

    for (i = 0; i < nEmployees; i++) {
        emp = { name: `Name: ${randomN()} - ID : ${randomIdDigits(idDigits)}`, year: randomA(), salary: randomS(minSalary, maxSalary) }
        result.push(emp);
    }
    return result;
}

function getAverageAge(result) {

    let averageAge = result.reduce((accumulator, currentValue) =>
        ((new Date().getFullYear() - currentValue["year"]) + accumulator),
        0);
    averageAge = Math.floor((averageAge) / numberOfEmployees)
    console.log("Avarage age: " + averageAge)
    return averageAge;

}

function getEmployeeBySalary(result, salaryFrom, salaryTo) {

    let result1 = result.filter(result => result["salary"] > salaryFrom && result["salary"] < salaryTo)
    
    result1.sort(function (a, b) {
        return a.salary - b.salary;
    });

    console.log(result1)
}


function randomIdDigits(digits) {
    return Math.random().toFixed(digits).split('.')[1];
}

function randomA() {
    return Math.floor(Math.random() * (2000 - 1940 + 1)) + 1940;
}

function randomS(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomN() {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


console.log(createRandomEmployees(4, 4, 1000, 2000));
getEmployeeBySalary(result, 1000, 2000)
getAverageAge(result)


console.log(createRandomEmployees(1, 1, 100, 1000));
getEmployeeBySalary(result, 100, 1000)
getAverageAge(result)

console.log(createRandomEmployees(10, 10, 99999, 6000));
getEmployeeBySalary(result, 99999, 6000)
getAverageAge(result)

console.log(createRandomEmployees(2, 2, 3000, 6000));
getEmployeeBySalary(result, 3000, 6000)
getAverageAge(result)


createRandomEmployees(4, 4, 1000, 6000)
getEmployeeBySalary(result, 1000, 3000)
getAverageAge(result)


