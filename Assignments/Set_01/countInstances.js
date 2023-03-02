/*
Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
    charCount("c", "Chamber of secrets") ➞ 1
    charCount("b", "big fat bubble") ➞ 4
*/

const inputString = 'Chamber of Secrets';
const character = 'c';
const input = inputString;

function charCount(character, input)
{
    let count = 0, occurrence = 0;

    for(count=0; count<input.length; count++)
    {
        if(character === input.charAt(count))
        {
            occurrence++;
        }
    }
    
    return occurrence; 
}

console.log(charCount(character, inputString))
