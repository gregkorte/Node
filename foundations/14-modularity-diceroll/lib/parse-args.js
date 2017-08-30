'use strict';

// This parse-args file should export a single function to parse your command line arguments. The function should accept an array containing the arguments passed on the command line. Convert these arguments to an object with a count and sides property.

module.exports = function(dieArray) {
    let obj = {};
    if (dieArray.length === 1){
        obj.count = 1;
        obj.sides = dieArray[0];
    } else if (dieArray.length === 2) {       
        obj.count = dieArray[1];
        obj.sides = dieArray[0];
    } else if (dieArray.length > 2){
        console.log('You have entered too many numbers.\nPlease enter the number of sides and the number of times you want to roll.');
    } else {
        console.log('You have not entered any numbers.\nPlease enter the number of sides and the number of times you want to roll.')
    }
    return obj;
};