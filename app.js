// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
const fromDollartoYen = function(valueInDollar) {
    // Convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 156.5;
    // return the dollar value
    return valueInYen;
}
const fromYentoPound = function(valueInYen) {
    // Convert the given valueInEuro to dollars
    let valueInPound = valueInYen * 0.87;
    // return the dollar value
    return valueInPound;
}

// This is my function that sums two numbers
function sum(a, b) {
    return a + b;
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollartoYen, fromYentoPound};