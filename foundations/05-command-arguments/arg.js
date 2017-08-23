#!/usr/bin/env node

//      Used for original, Bonus #1 & Bonus #2

// process.argv.splice(0, 2)
// let inputs = process.argv;

//      Original

// let input = process.argv;
// let total = input.reduce((a, b) => parseFloat(a) + parseFloat(b));

// console.log('The sum of the arguments is', total);


//      Bonus #1 - If no arguments are passed return 0

// if(inputs === []){
//     console.log('You have not passed any arguments on the command line', 0);
// } else {
//     let input = process.argv;
//     let total = input.reduce((a, b) => parseFloat(a) + parseFloat(b));
    
//     console.log('The sum of the arguments is', total);
// }

//      Bonus #2 - Use Array.prototype.map to change the primitive to Number

// if(inputs === []){
//     console.log('You have not passed any arguments on the command line', 0);
// } else {
//     let input = process.argv;
//     let total = input.map(Number).reduce((a, b) => a + b);
    
//     console.log('The sum of the arguments is', total);
// }

//      Bonus #3 - Use filter to get only the input parameters
//      Bonus #4 - Use reduce on the array to sum the inputs

let inputs = process.argv.filter((v, i) => i > 1);

if(inputs === []){
    console.log('You have not passed any arguments on the command line');
    return 0;
} else {
    let total = inputs.map(Number).reduce((a, b) => a + b);
    
    console.log('The sum of the arguments is', total);
}
