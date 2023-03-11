//Create a function that returns the index of the first vowel in a string.

let inputStr = ''; 
let resultIndex;
const inputString = 'Hello', vowels = 'aeiou';

function returnVowel(inputStr)
{
    let count = 0; 
    
    for(count; count<inputString.length; count++)
    {
        if(vowels.includes(inputString.charAt(count).toLowerCase))
        {
            return count;
        }
    }
}

console.log(returnVowel(inputString));