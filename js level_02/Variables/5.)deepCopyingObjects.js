
const person = {
    name: 'Rishav',
    gender: 'male'
}


console.log('Method 1')
//Method 1
//Object.assign();
const student = Object.assign({}, person);
console.log('person', person);
console.log('student', student);

student.name = "Agamya";
console.log('person', person);
console.log('student', student);


console.log('Method 2');
//Method 2
//Spread Operator
const stud = {...person};

stud.name = 'Ishi';
console.log('person', person);
console.log('stud', stud);
