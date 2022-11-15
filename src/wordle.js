let count = 6;
const word = "table"
const N_LETTERS = 5;
const letterElements = document.querySelectorAll(".letter-guess")

function onChange(event) {
    const wordGuess = event.target.value;
    event.target.value = '';
    count = count - 1;
    if (word !== wordGuess) {
        gameOver(count);
    }

    if (wordGuess.length != N_LETTERS) {
        alert(`A word should contain ${N_LETTERS} letters`);

    } else {
        const wordAr = Array.from(wordGuess);
        wordAr.forEach((l, i) => letterElements[i].innerHTML = l)
        if (word == wordGuess) {
            youWin()
        }
        const colors = wordAr.map((l, i) => {

            let index = word.indexOf(l); //есть ли эта буква в слове - если есть возвращает индекс этой буквы в массиве, если нет - -1
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

    var x = document.getElementById("game-over");
    if (count > 1) {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function youWin() {

    var x = document.getElementById("game-win");
    x.style.display = "block";
}


