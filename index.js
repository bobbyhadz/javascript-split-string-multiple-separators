// EXAMPLE 1 - Split a String with multiple Separators in JavaScript

const str = 'a-b_c-d';

const arr = str.split(/[-_]+/);
console.log(arr); // 👉️ ['a', 'b' , 'c', 'd']

// ------------------------------------------------------------------

// // EXAMPLE 2 - Split a String with multiple Separators using replaceAll

// const str = 'one.two three.four';

// const arr = str
//   .replaceAll('.', '$')
//   .replaceAll(' ', '$')
//   .split('$');
// console.log(arr); // 👉️ ['one', 'two', 'three', 'four']

// ------------------------------------------------------------------

// // EXAMPLE 3 -  Split a String with multiple Separators using split and join

// // ✅ split on each dot and space
// const str = 'a.b c.d';

// const split3 = str
//   .split('.')
//   .join('$')
//   .split(' ')
//   .join('$')
//   .split('$');
// console.log(split3); // 👉️ ['a', 'b', 'c', 'd']
