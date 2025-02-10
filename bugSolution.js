function foo(a, b) {
  if (a === null || b === null) {
    return 0; //Alternative: Handle null values by returning 0 
  } else if (typeof a !== 'number' || typeof b !== 'number'){
    return NaN; //Handle cases where a or b is not a number
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo('abc', 2)); // Output: NaN