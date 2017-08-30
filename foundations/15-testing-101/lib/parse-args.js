'use strict';

module.exports = function(dieArray) {
    let obj = {};
    if (!dieArray){
        return 'You have not entered any numbers.\nPlease enter the number of sides and the number of times you want to roll.';
    }
    if (dieArray.length === 1){
        obj.count = 1;
        obj.sides = dieArray[0];
        return obj;
    } else if (dieArray.length === 2){       
        obj.count = dieArray[1];
        obj.sides = dieArray[0];
        return obj;
    } else if (dieArray.length > 2){
        return 'You have entered too many numbers.\nPlease enter the number of sides and the number of times you want to roll.';
    } else return;
};