/*
Write a function that reverses all the words in a sentence that start with a particular letter.

Examples
    specialReverse("word searches are super fun", "s")
    ➞ "word sehcraes are repus fun"
    specialReverse("first man to walk on the moon", "m")
    ➞ "first nam to walk on the noom"
    specialReverse("peter piper picked pickled peppers", "p")
    ➞ "retep repip dekcip delkcip sreppep"

Notes
    Reverse the words themselves, not the entire sentence.
    All characters in the sentence will be in lower case.
*/

const inputStr = 'word searches are super fun';
const alpha = 's';

function specialReverse(input, char)
{
    let count = 0; 
    let tempArr = input.split(' ');
    let resultStr = '';

    for(count=0; count<tempArr.length; count++)
    {
        if(tempArr[count][0] == char)
        {
            tempArr[count] = tempArr[count].split('').reverse().join('');
        }
    }

    resultStr = resultStr + tempArr.join(' ');

    return resultStr;
}

console.log(specialReverse(inputStr, alpha));
