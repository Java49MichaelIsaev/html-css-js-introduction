function ulSurround(array) {

    array1 = array.map(function (e) { return "<li>" + e + "</li>" });
    array1.splice(0, 0, "</ul>")
    array1.splice(array1.length, 0, "</ul>")
    console.log(array1);
}
ulSurround(["abc", "lmn", "cd"])
ulSurround(["queen", "ramones", "kino"])
ulSurround([1, 2, 3])



function count(array, element) {
    let counter = 0;
    array.map(function (e) {
        if (e == element)
            counter++;
    })
    console.log(counter);
}
count(["abc", "lmn", "cd", "abc", "abc"], "cd")
count(["to", "be", "or", "not", "to", "be"], "be")


function arrayCopy(src, srcPos, dst, dstPos, length) {

    let array = src.slice()

    let numbers = array.splice(srcPos, length)

    for (let index = 0; index < numbers.length; index++) {
        dst.splice(dstPos + index, 0, numbers[index])
    }
    console.log(dst)
}

arrayCopy([1, 2, 3, 4, 5, 6, 7], 3, [10, 20, 30, 40, 50, 60, 70], 4, 3)
arrayCopy([1, 2, 3, 4, 5, 6, 7, 8], 6, [10, 20, 30, 40, 50, 60, 70], 0, 2)
arrayCopy([99, 88, 0, 17, -15, 10], 2, [0, -5, 3, 10, 15, 20, 15], 4, 2)


function move(array, index, offset) {

    let a = array.splice(index, 1);
    let array1 = array.slice();

    if (offset > 0) {
        array1.splice(index + offset, 0, a[0])
    }
    else {
        array1.splice(offset - (-index), 0, a[0])
    }

    console.log(array1)
}

move([1, 2, 3, 4, 5, 6, 7], 3, -1)
move([1, 2, 3, 4, 5, 6, 7], 2, 4)
move([1, 2, 3, 4, 5, 6, 7], 4, -1)
move([1, 2, 3, 4, 5, 6, 7], 6, -1)
move([5, 5, 5, 4, 5, 5, 5], 3, -2)
move([5, 5, 5, 4, 5, 5, 5], 3, 2)
