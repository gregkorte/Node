// This parse-args file should export a single function to parse your command line arguments. The function should accept an array containing the arguments passed on the command line. Convert these arguments to an object with a count and sides property.

console.log('parse-args.js imported successfully...')

module.exports = () => parseDieNotation({
        parse(dieArray){
        console.log(dieArray);
    }
});