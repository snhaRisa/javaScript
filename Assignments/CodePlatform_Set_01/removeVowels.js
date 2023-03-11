//Remove every vowel from the string. 

const inputString = 'This is Mumbai';
let resultString = '';
const vowel = 'aeiou';

let count = 0; 

function removeVowels(inputString)
{
    for(count=0; count<inputString.length; count++)
    {
        if(vowel.includes(inputString.charAt(count).toLowerCase()))
        {
            resultString = resultString + '';
        }
        else
        {
            resultString = resultString + inputString[count];
        }
    }

    return resultString;
}

console.log(removeVowels(inputString))
