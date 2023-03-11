//check whether the object either contains the property or not. 

const person = {
    Name: 'Rishav', 
    Age: 23,
    Profession: 'Developer',
    Gender: 'Male',
    City: 'Bokaro Steel City'
}
const property = 'age';

function objectProperty(objectInput, propCheck)
{
    for(const key in objectInput)
    {
        if(key == propCheck)
        {
            return true;
        }
    }

    return false; 
}

console.log(objectProperty(person, property))
