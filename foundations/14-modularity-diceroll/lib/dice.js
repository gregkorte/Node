// The dice file should export an object with at least two methods called roll and toDiceNotation. The toDiceNotation method should accept an object with a sides and count property and convert it to a String with the dice notation i.e. "1d6" or "2d40". The roll method should accept a dice notation String and produce a random Number which is the result of the dice roll.

console.log('parse-args.js imported successfully...');

const roll = (str) => {
    // Get two numbers out of dice notation and pass to imported random function
    console.log(str);
};

const toDieNotation = (obj) => {
    console.log(`${obj.count}d${obj.sides}`);
};

module.exports = { roll, toDiceNotation };