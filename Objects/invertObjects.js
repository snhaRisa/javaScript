//Invert the key:value pairs in an Object.

const person = {
    firstName: 'Rishav',
    lastName: 'Champion',
    age: 24,
    profession: 'FSDeveloper'
}

function invert(input)
{
    const resultObject = {};
    let key; 
    for(key in input)
    {
        //console.log(key, input[key]);
        resultObject[input[key]] = key;
    }

    return resultObject;
}

console.log(invert(person));
