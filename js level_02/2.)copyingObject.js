

let a = [10];

//copying a into c.
let c = a; 

console.log('a', a);
console.log('c', c);

a.push(20, 40, 60);
c.push(30, 50, 70);

console.log('a', a);
console.log('c', c);

//The thing with object data types is that they don't copy by value. They copy by reference. 
//unlike the other method of copy by value. 


/*
When we create an object, it takes a memory location and creates itself. The address of the respective object is then copied to the variable. That variable doesn't holds the value of object. It holds the reference to the address where our object is created.
That is why, when we copy a into c. c takes the value of a, which is an address reference. & when we perform different operations, they both give the same output. 
There are different ways to copy the VALUES of the array. Here we only copied the address reference.
*/