function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // Correct usage
console.log(result); // Output: 8

result = add(5, '3'); // Type error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(result); // This line will not be reached due to the type error.