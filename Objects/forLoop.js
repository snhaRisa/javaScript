//Display keys and values as arrays of an object using the for loop.

const person = {
    firstName: 'Rishav',
    city: 'Dortmund', 
    age: 24,
    profession: 'FullStack Developer',
    //count: 2
}

function keysAndValues(input)
{
    const keys = [], values=[];
    let count = 0;

    for(count; count<Object.keys(input).length; count++)
    {
        
    }
    

    return keys;
}

console.log(keysAndValues(person));
