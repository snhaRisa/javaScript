

const person = {
    Name: 'Rishav',
    Age: 24,
    Profession: 'Student',
    Gender: 'Female'
}

function keys(input)
{
    const arrayKeys = [];

    for(let key in input)
    {
        arrayKeys.push(key);
    }

    return arrayKeys;
}

console.log(keys(person));