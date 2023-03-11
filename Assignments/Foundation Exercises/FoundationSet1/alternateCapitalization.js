
const inputName = 'rishav';

function capitalize(input)
{
    let resultString = '';
    let count = 0;

    for(count; count<input.length; count++)
    {
        if(count % 2 == 0)
        {
            resultString = resultString + input[count].toUpperCase();
        }
        else
        {
            resultString = resultString + input[count];
        }
    }

    return resultString; 
}

console.log(capitalize(inputName));
