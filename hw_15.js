function minMax(numbers) {
    let ar =[]
    ar = [...numbers]
    console.log(ar);
    let ar2 = [];

     ar2 = ar.reduce(function(accumulator, currentValue){

     return accumulator > currentValue ? accumulator : currentValue;
    })

   
    console.log(ar2);
    //return minNumber;
}

minMax([15,10,2,53,7])

//ar.sort((a, b)=>a.length - b.length);


// function count(array, sample) {
//         return strings.reduce(function(count, element) {
//         return element === sample ? count + 1 : count;
        
//     },0)


// ar.sort((a,b) => a < b ? -1 : 1)
// console.log(ar);






// function deleteWithPrefix(strings,prefix) {

//     let ar = [...strings];
//     console.log(ar)
//     let ar2 = []

//     ar2 = ar.map(x => x + prefix )
//     console.log(ar2);

//    // res = ar.filter((n) => i % 2 == 0);

//     //return array;

// }

// deleteWithPrefix(['abc', 'old_abc', 'lmn', '123', 'old_lmn'],'old_')


// function getSortedEvenOdd(numbers) {

//     return array;
// }


// function count(array, sample) {
//         return strings.reduce(function(count, element) {
//         return element === sample ? count + 1 : count;
        
//     },0)


// let ar=[ 2,9, 3, 1999];
// ar.sort((a, b) => a-b);

// console.log(ar);
// ar = ["abc", "a", "lmn", "y"];
// ar.sort((a, b) => a < b ? -1 : 1);
// console.log(ar);
// ar.sort((a, b) => a.length - b.length);
// console.log(ar);

//splice slice map forEach 