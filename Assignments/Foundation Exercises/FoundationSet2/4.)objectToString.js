//Convert an object to a string with '=' instead of ':'

const person = {
    // Name: 'Rishav', 
    // Job: 'Unemployed', 
    // isGreat: false
};

function objectString(objInput)
{
    let resultStr = '';

    for(const key in objInput)
    {
        resultStr = resultStr + `${key} = ` + `${objInput[key]}, `;
    }

    return resultStr; 
}

console.log(objectString(person));
