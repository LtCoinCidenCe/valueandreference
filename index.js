const mod1 = require('./module1');
const mod2 = require('./module2');

console.log('typeof mod1', typeof mod1);
//typeof mod1 object
console.log("Object.hasOwn(mod1,'func1')", Object.hasOwn(mod1, 'func1'))
//Object.hasOwn(mod1,'func1') true
console.log('typeof mod2', typeof mod2);
//typeof mod2 object
console.log('mod1.m', mod1.m);
//mod1.m 11
console.log('mod2.n', mod2.n);
//mod2.n 3
console.log('mod1.obj1===mod2.obj1', mod1.obj1 === mod2.obj1);
//mod1.obj1===mod2.obj1 true
console.log("mod1.func1.constructor.name === 'AsyncFunction'", mod1.func1.constructor.name === 'AsyncFunction')
//mod1.func1.constructor.name === 'AsyncFunction' true
console.log("mod2.func2.constructor.name === 'AsyncFunction'", mod2.func2.constructor.name === 'AsyncFunction')
//mod2.func2.constructor.name === 'AsyncFunction' false
let oo = 0
