/*
Create a function that returns the number of hashes and pluses in a string.
Examples
    hashPlusCount("###+") ➞ [3, 1]
    hashPlusCount("##+++#") ➞ [3, 3]
    hashPlusCount("#+++#+#++#") ➞ [4, 6]
    hashPlusCount("") ➞ [0, 0]
*/

const string = '';  // Seven each. 
let resultArray = [];

function hashPlusCount(inputString)
{
    let count = 0; 
    let hashCount = 0, plusCount = 0; 

    for(count; count<inputString.length; count++)
    {
        if(inputString.charAt(count) === '#')
        {
            hashCount++;
        }
        else if(inputString.charAt(count) == '+')
        {
            plusCount++;
        }
        else
        {
            return -1; 
        }
    }

    resultArray.push(hashCount);
    resultArray.push(plusCount);

    return resultArray;
}

console.log(hashPlusCount(string));
