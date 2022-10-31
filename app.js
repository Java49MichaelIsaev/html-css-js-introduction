// console.log("Hello world!");

// for(var i = 0; i < 3; i++){
//     // setTimeout(function(){
//         console.log('var', i);
// // }); 
// // }
// }
// // for(let i = 0; i < 3; i++){
// //     setTimeout(function(){console.log(i)})
// // } => 0 1 2

// // for(const i = 0; i < 3; i++){
// //     console.log(i);`

// // }

// // console.log(i);} }}}}}}}


function sumDigits(number) {

    let sum = 0;
    

    if (number < 0){
        number = -number;
    }
        
    while (number > 0)
     {
    console.log("blablabla")
        sum += number % 10;
        number = Math.floor(number/10);
    } 
        return sum;      
}
     console.log('sum=', sumDigits(123));
