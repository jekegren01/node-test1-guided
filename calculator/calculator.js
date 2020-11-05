// '...' gives us all of our parameters values as an array, regardless of how many parameters are passed

function sum(...values) {
    //take pairs of values out of the array and add them together until the end is reached
    return values.reduce((a,b) => a + b, 0)
}

function difference(...values) {
    return values.slice(1).reduce((a,b) => a - b, values[0] || 0)
}

function product(...values) {
    return values.reduce((a,b) => a * b, 1)
}

function quotient(...values) {
    // if (b === 0){
    if (values.slice(1).indexOf(0) > -1) {
        throw new Error("cannot divide by zero")
    }
    return values.slice(1).reduce((a,b) => a / b, values[0] || 0)
}

function parse(data) {
    const result = {}

    if (Array.isArray(data.sum)) {
        // using the spread operator here takes the array value and spreads it out as parameters.
        result.sum = sum(...data.sum)
    }

    if(Array.isArray(data.difference)) {
        result.difference = difference(...data.difference)
    }

    if(Array.isArray(data.product)) {
        result.product = product(...data.product)
    }

    if(Array.isArray(data.quotient)) {
        result.quotient = quotient(...data.quotient)
    }
    return result
}

module.exports = {
    sum,
    difference,
    product,
    quotient,
    parse,
}