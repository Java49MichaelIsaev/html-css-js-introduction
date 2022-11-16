const word = "table"
const N_LETTERS = 5;
let count = 6;
const letterElements = document.querySelectorAll(".letter-guess")
const counter = document.getElementById("counter")
const over = document.getElementById("game-over")
const win = document.getElementById("game-win")

function onChange(event) {
    const wordGuess = event.target.value;
    event.target.value = '';

    if (word !== wordGuess) {
        gameOver(count);
    }

    if (wordGuess.length != N_LETTERS) {
        alert(`The word should contain ${N_LETTERS} letters`);
    }

    else {
        count -= 1;
        changeCounter(count);
        const wordAr = Array.from(wordGuess);

        wordAr.forEach((l, i) => letterElements[i].innerHTML = l)
        if (word == wordGuess) {
            youWin()
        }
        const colors = wordAr.map((l, i) => {

            let index = word.indexOf(l);
            let res = 'red';

            if (index > -1) {
                res = index == i ? 'green' : 'yellow'
            }
            return res;
        })

        colors.forEach((c, i) =>
            letterElements[i].style.color = c)
    }
}

function gameOver(count) {

    if (count > 1) {
        over.innerHTML = "Sorry - your guess trials have ended up!";

    } else {
        over.style.display = "block";
    }
}

function youWin() {
 
    win.style.display = "block";
    win.innerHTML = (`Congratulations - you have guessed the word!`)
    counter.style.display = "none"
}

function changeCounter(a) {

    counter.innerHTML = (`Remaining guesses : ${a}`);
    if (count < 1) {
        counter.style.display = "none"
    }
}