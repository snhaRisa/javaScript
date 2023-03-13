
let a = [10];
let b,c,d;

console.log('a', a);
console.log('c', c);




console.log('Method 1')
//Method number 1
//Array slice 
c = a.slice();
console.log('a', a);
console.log('c', c);

c.push(20);
console.log('a', a);
console.log('c', c);




console.log('Method 2')
//Method number 2
//Array Concat
b = [].concat(a);
console.log('a', a);
console.log('b', b);

b.push(11);
console.log('a', a);
console.log('b', b);




console.log('Method 3');
//Method 3
//Spread Operator
d = [...a];

console.log('a', a);
console.log('d', d);
d.push(40);
a.push(7);
console.log('a', a);
console.log('d', d);
