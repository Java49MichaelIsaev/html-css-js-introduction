// function ulSurround(array) {
    
//     let array1 = array.map(function (e) { return "<li>" + e + "</li>" });
//     array1.splice(0, 0, "<ul>")
//     array1.splice(array1.length, 0, "</ul>")
//     console.log(array1);
// }

//return array!!!

// ulSurround(["abc", "lmn", "cd"])
// ulSurround(["queen", "ramones", "kino"])
// ulSurround([1, 2, 3])


// let strings=["abc", "lmn", "cd", "abc", "abc"]

// console.log(count(strings, "cd"));

// function count(array, sample) {
//         return strings.reduce(function(count, element) {
//         return element === sample ? count + 1 : count;
        
//     },0)
// }

// count(["abc", "lmn", "cd", "abc", "abc"], "cd")
// count(["to", "be", "or", "not", "to", "be"], "be")


// function arrayCopy(src, srcPos, dst, dstPos, length) {

//     let array = src.slice()

//     let numbers = array.splice(srcPos, length)
//     // V.R. Try to do the same without for
//     for (let index = 0; index < numbers.length; index++) {
//         dst.splice(dstPos + index, 0, numbers[index])
//     }
//     console.log(dst)
// }

// arrayCopy([1, 2, 3, 4, 5, 6, 7], 3, [10, 20, 30, 40, 50, 60, 70], 4, 3)
// arrayCopy([1, 2, 3, 4, 5, 6, 7, 8], 6, [10, 20, 30, 40, 50, 60, 70], 0, 2)
// arrayCopy([99, 88, 0, 17, -15, 10], 2, [0, -5, 3, 10, 15, 20, 15], 4, 2)


// function move(array, index, offset) {

//     let a = array.splice(index, 1);
//     let array1 = array.slice();
//     array1.splice(index + offset, 0, a[0])
//     return array1;
// }


// console.log(move([1, 2, 3, 4, 5, 6, 7], 3, -1))

// move([1, 2, 3, 4, 5, 6, 7], 2, 4)
// move([1, 2, 3, 4, 5, 6, 7], 4, -1)
// move([1, 2, 3, 4, 5, 6, 7], 6, -1)
// move([5, 5, 5, 4, 5, 5, 5], 3, -2)
// move([5, 5, 5, 4, 5, 5, 5], 3, 2)


// function arrayCopy(src, srcPos, dst, dstPos, length) {
//     let arForCopy = src.slice(srcPos, srcPos + length);
//     console.log(arForCopy);
//     dst.splice(dstPos, 0, arForCopy);
// }

// let ar1 = [1,2,3,4,5,6];
// let ar2 = [10,30,40,50];
// arrayCopy(ar1,2,ar2,1,3);
// console.log(`ar1: ${ar1}, ar2: ${ar2} arrayCopy(ar1,2,ar2,1,3): ${ar2}`)

// function getEvenNumbers(numbers) {
//     let res = numbers.filter(n => n % 2 == 0);
//     return res;
// }


// console.log(getEvenNumbers([989, 4,444]))

// let ar=[ 2,9, 3, 1999];
// ar.sort((a, b) => a-b);

// console.log(ar);
// ar = ["abc", "a", "lmn", "y"];
// ar.sort((a, b) => a < b ? -1 : 1);
// console.log(ar);
// ar.sort((a, b) => a.length - b.length);
// console.log(ar);