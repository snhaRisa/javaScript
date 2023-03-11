//Swap key value pair of an object. 

const person = {
    Name: 'Rishav',
    Age: 24,
    Job: 'Unemployed',
    Gender: 'Male'
}

function swapIt(inputObj)
{
    const swappedObj = {};

    for(const key in inputObj)
    {
        swappedObj[inputObj[key]] = key;
    }

    return swappedObj;
}

console.log(swapIt(person));
