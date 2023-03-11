
const inputName = 'rishav';

function capitalize(input)
{
    let resultString01 = '', resultString02 = '';
    const resultArray = [];
    let count = 0;

    for(count; count<input.length; count++)
    {
        if(count % 2 == 0)
        {
            resultString01 = resultString01 + input[count].toUpperCase();
            resultString02 = resultString02 + input[count].toLowerCase();
        }
        else
        {
            resultString01 = resultString01 + input[count];
            resultString02 = resultString02 + input[count].toUpperCase();
        }
    }

    resultArray.push(resultString01, resultString02);

    return resultArray; 
}

console.log(capitalize(inputName));
