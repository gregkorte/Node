// The math file should export an Object with a method called randomInt that accepts two arguments, a lower bound and an upper bound. This function should return a random integer inclusive of the lower bound and the upper bound.

console.log('math.js imported successfully...')

module.exports = () => randomInt({
        random(lower, upper){
        return Math.random() * (upper - lower) + lower;
    }
});