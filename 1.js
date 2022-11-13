// const numbers = [-5, 6, 2, 0];

// const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
//   if (currentValue > 0) {
//     const doubled = currentValue * 2;
//     return [...accumulator, doubled];
//   }
//   return accumulator;
// }, []);

// console.log(doubledPositiveNumbers); // [12, 4]



function minMax(numbers) {
    let ar =[]
    ar = [...numbers]
    console.log(ar);
    let ar2 = [];

    ar2 = ar.reduce((accumulator, currentValue) => {
        if (accumulator > currentValue) {
            return [...accumulator]
        
        }
        
    },[])
    
    console.log(ar2);
    //return minNumber;
}

minMax([15,10,1,2,53,7])