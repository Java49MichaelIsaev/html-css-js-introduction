const number = 900550;
const base = 36;

// const number = 11483;
// const base = 2;

// const number = 19673;
// const base = 16;


function fromNumberToString(number, base) {
    let ASCIIstep;
    let digital = number;
    let result = number;
    let word = [];
    let reminder;

    while (result > 0) {
        result = Math.trunc(digital / base)
        reminder = digital - (result * base)
        digital = result

        ASCIIstep = reminder > 9 ? 55 : 48

        word.unshift(String.fromCharCode(reminder + ASCIIstep))
    }

    return word.join('')
}

const word = fromNumberToString(number, base)

console.log(word)

function fromStringToNumber(number, base) {
    // 'JAVA' = 74 - 55

}
