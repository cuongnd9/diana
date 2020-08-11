import { diana } from '../src';

// Create unique id with length equal default(16).
console.log(diana());
// Create unique id with length equal 0.
console.log(diana(0));
// Create unique id with length equal 8.
console.log(diana(8));
// Create unique id with length equal 12.
console.log(diana(12));
// Create unique id with length equal 32.
console.log(diana(32));
