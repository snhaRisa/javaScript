

const inputStr = 'A';


function counterpartCharCode(input)
{
    let resultCode;
    
    console.log(typeof input);

    if(typeof input == 'number')
    {
        resultCode = input.toString().charCodeAt();
        return resultCode;
    } 

    if(input == input.toUpperCase())
    {
        resultCode = input.toLowerCase().charCodeAt();
    }
    else
    {
        resultCode = input.toUpperCase().charCodeAt();
    }

    return resultCode; 
}

console.log(counterpartCharCode(inputStr));
