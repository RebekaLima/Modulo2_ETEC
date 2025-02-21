// Objetivo: Usar laços de repetição para retornar tabuada

// for(let num = 0; num <= 10; num++) {
//         for(let num2 = 0; num2 <= 10; num2++){
//             let result = num * num2;
//             console.log(num + "x" + num2 + "=" + result)
//         }
// }

for(let num = 1; num <=100; num++) {
    if(num%3 == 0){
        console.log("Fizz")
    }else if(num%5 == 0){
        console.log("Buzz")
    } else if(num%3 == 0 && num%5 == 0){
        console.log("Fizzbuzz")
    } else{
        console.log(num)
    }
}

// for(let num = 0; num <= 100; num++) {
//             for(let num2 = 0; num2 <= 10; num2++){
//                 if(num/num2 == 3){
//                             console.log("Fizz")
//                         }else if(num/num2 == 5){
//                             console.log("Buzz")
//                         } else if(num/num2 == 3 && num/num2 == 5){
//                             console.log("Fizzbuzz")
//                         } else{
//                             console.log(num2)
//                         }
//                     }
//             }