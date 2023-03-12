/*
Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.
Examples
    convertBinary("house") ➞ "01110"
    convertBinary("excLAIM") ➞ "0100000"
    convertBinary("moon") ➞ "0111"
Notes
    Conversion should be case insensitive (see example #2).
*/

const inputString = 'house';

function convertBinary(input)
{
    let resultStr = '', count=0; 

    for(count=0; count<input.length; count++)
    {
        if(input[count].toLowerCase().charCodeAt()>96 && input[count].toLowerCase().charCodeAt()<110)
        {
            resultStr = resultStr + '0';
        }
        else if(input[count].toLowerCase().charCodeAt()>109 && input[count].toLowerCase().charCodeAt()<123)
        {
            resultStr = resultStr + '1';
        }
        else
        {
            continue; 
        }
    }

    return resultStr; 
}

console.log(convertBinary(inputString));
