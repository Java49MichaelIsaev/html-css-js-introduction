const word = "table"
const N_LETTERS = 5;
const letterElements = document.querySelectorAll(".letter-guess")
function onChange(event) {
    const wordGuess = event.target.value;
    event.target.value='';
    if (wordGuess.length != N_LETTERS) {
    alert(`A word should contain ${N_LETTERS} letters`) ;
    } else {
        let count = 0;
        count++;
        if (count > 6){ 
            
        }
        const wordAr = Array.from(wordGuess);
        wordAr.forEach((l, i) => letterElements[i].innerHTML = l)
        const colors = wordAr.map((l, i) => {
            let index = word.indexOf(l); //есть ли эта буква в слове - если есть возвращает индекс этой буквы в массиве, если нет - -1
            let res = 'red';
            if (index > -1) {
                res = index == i ? 'green' : 'yellow'
            }
            return res;


        })
        colors.forEach((c, i) => 
        letterElements[i].style.color=c) 


    }
}

// количество ходов, если больше шести ходов - (введенно слово == задуманное слова) выводим лэйблом = сначала пустой = потом в лейбл помещаем конгратулэйшнс и количество ходов - или сорри ю р лост
//  в дом элемент поставить свойства на каждый ход количество уменьшается до нуля