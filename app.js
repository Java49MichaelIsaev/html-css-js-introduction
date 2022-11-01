
// // let strNum1 = "123";
// // let strNum2 = "9";
// // console.log(strNum1 + strNum2); //=> 1239
// // console.log(strNum1 - strNum2); //=> 114

// // let num1 = +strNum1;
// // let num2 = +strNum2;

// //  let strNumStr = '123ab';
// //  let numStr = +strNumStr;
// //  console.log(numStr);
// //  let num = parseInt(strNumStr); // => ! parsFloat
// //  console.log(num);

// //  if(isNaN(numStr)) {
// //     console.log("numStr is NaN")
//  //  }
 
// // result = result*10!!!!!!!!!!

// // let num10 = 123;      
// // let strNum10 = "" + num10;
// // let strNum16 = num10.toString(16);
// // console.log(strNum10, strNum16);

function fromMorseToNumber(morseCode) {
    let result = 0;
    for (let i = 0; i < morseCode.length; i++) {
        let code = morseCode[i] == '.' ? 0 : 1;
        result = result *  2 + code;
    }
    return result;
}

console.log(fromMorseToNumber('-.-..-...--..'));




// function fromNumberToMorse(number) {
//     number = Math.abs(number); 
//     let res = "";
//     do {
//         let digit = number % 2;
//         let sym = digit == 0 ? '.' : '-';
//         res = sym + res;
//         number = Math.trunc(number / 2); //base/2

//     } while(number !=0);

//     return res;
// }
 
// console.log(fromNumberToMorse('5260'))
   

function fromNumberToString(number,base) {

    number = Math.abs(number); 
    let res = "";
    do {
        let digit = number * base;

        let sym = (String.fromCharCode(digit));
        res = sym + res;
        number = Math.trunc(number / base); 

    } while(number !=0);

    return res;
}

console.log(fromNumberToString(900550,36))
console.log(fromNumberToString(46016237,36))
console.log(fromNumberToString(11483,2))


// 97 -> 10
// 48 -> 0


// function fromStringToNumber(string, base) {

//     let result = 0;
//     for (let i = 0; i < string.length; i++) {
//         let code = string[i].charCodeAt(0) 
//         result = result * base + code;
        
//     }
//     return result;

console.log(fromStringToNumber('java',36));



//getting code from symbol
// console.log('v'.charCodeAt(0)) //ASCII

// //getting symbol from code 
// console.log(String.fromCharCode(65))
