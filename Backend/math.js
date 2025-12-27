export const sum = (a, b) => a+b;
export const mul = (a, b) => a*b;
export const g = 9.8;
export const PI = 3.14;

//module.exports = 123; // math.js module.exports ki help se 123 pre-set value export karegi scrit.js file ko filhal toh jab ham run karvaenge : node script.js -> o/p: 123


/* 1.
let obj={
    sum:sum,
    mul:mul,
    g:g,
    PI:PI
};
module.exports = obj;
*/

//2.par vale object ko ham ese bhi likh skte h
// module.exports = {
//     sum:sum,
//     mul:mul,
//     g:g,
//     PI:PI
// };

//3.  
// module.exports.sum = (a,b) => a+b;
// module.exports.mul = (a,b) => a*b;
// module.exports.g = 9.8;
// module.exports.PI = 3.14;

//4.
// exports.sum = (a,b) => a+b;
// exports.mul = (a,b) => a*b;
// exports.g = 9.8;
// exports.PI = 3.14;
