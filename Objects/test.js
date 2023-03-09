//Working with objects; 

const person = {
    firstName: 'Rishav',
    city: 'Germany',
    age: 24,
    //key: 'Not Defined'
}

function findKeysAndValues(input) //we don't input a parameter it directly takes our arguments. Good practice is to write the parameter. 
{
    let resultArr = [];
    for(const key in person)
    {
        console.log(key.toUpperCase() + ":", person[key]); //we cannot use the input.key dot operator, it is trying to find a property called 'key' in our object. 
        //console.log(Object.entries(input))
    }
    return -1;
}

console.log(findKeysAndValues(person));
