function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // Correct usage
console.log(result); // Output: 8

//Corrected usage
result = add(5, parseInt('3')); //Correctly parses the string to a number
console.log(result); // Output: 8

result = subtract(5, 3); // Correct usage
console.log(result); // Output: 2

// Example of type guard for safer usage
function isNumber(value: any): value is number {
    return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
    if (isNumber(a) && isNumber(b)) {
        return a + b;
    } else {
        throw new Error('Invalid input: Both arguments must be numbers');
    }
}
console.log(addSafe(5,3)); //Output: 8
console.log(addSafe('5',3)); //Throws an error
console.log(addSafe(5,'3')); //Throws an error