import { uid, code } from '..';

// Create unique id with length equal default(24).
console.log(uid());
// Create unique id with length equal 0.
console.log(uid(0));
// Create unique id with length equal 8.
console.log(uid(8));
// Create unique id with length equal 12.
console.log(uid(12));
// Create unique id with length equal 32.
console.log(uid(32));

// Create number code with length equal 4.
console.log(code());
// Create number code with length equal 4.
console.log(code(4));
// Create number code with length equal 5.
console.log(code(5));
// Create number code with length equal 6.
console.log(code(6));