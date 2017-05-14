// PRINT ALL AT ONCE
// const prompt = require('prompt');

// prompt.get(['Name'], (err, result) => {
//     if (err) {return onErr(err);}
//     console.log(cheer(result.Name));
// })

// onErr = (err) => {
//     console.log(err);
//     return 1;
// }
// // console.log(name);

// cheer = (name) => giveMeA(name);

// giveMeA = (name) => {
//     let obj = {name};
//     let arr = obj.name.split('');
//     let str = '';
//     arr.forEach((letter) => {
//         if (letter.match(/[aefhilmnorsx]/ig)){
//             str += `Give me an... ${letter}!\n`
//         } else if (letter === ' '){
//             return;
//         } else{
//             str += `Give me a.... ${letter}!\n`
//         }
//     });
//     str += `What does that spell?\n${obj.name}!`
//     return str;
// }

// BONUS: PRINT WITH DELAY BY LINE

const prompt = require('prompt');

prompt.get(['Name'], (err, result) => {
    if (err) {return onErr(err);}
    cheer(result.Name);
})

onErr = (err) => {
    console.log(err);
    return 1;
}
// console.log(name);

cheer = (name) => giveMeA(name);

giveMeA = (name) => {
    let counter = 0;
    let obj = {name};
    let arr = obj.name.split('');
    arr.forEach((letter) => {
        if (letter.match(/[aefhilmnorsx]/ig)){
            printIt(`Give me an... `, letter, counter);
        } else if (letter === ' '){
            return;
        } else{
            printIt(`Give me a.... `, letter, counter);
        }
        counter++;
    });
    printIt(`What's that spell?\n`, obj.name, counter);
};

printIt = (intro, letter, counter) => setTimeout(()=>{console.log(`${intro}${letter}!\n`)}, counter*1000);