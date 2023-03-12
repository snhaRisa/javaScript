/*
Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

To illustrate:
    indexShuffle("abcd") ➞ "acbd"
    // "ac" (even-indexed) + "bd" (odd-indexed)

Examples
    indexShuffle("abcdefg") ➞ "acegbdf"
    indexShuffle("holiday") ➞ "hldyoia"
    indexShuffle("maybe") ➞ "myeab"

Notes
    0 should be treated as an even number.
*/

const inputStr = 'Rishav';
                //012345

function indexShuffle(input)
{
    let resultStr = '', evenStr='', oddStr='';
    let count = 0;

    for(count=0; count<input.length; count++)
    {
        if(count%2 == 0)
        {
            evenStr = evenStr + input[count];
        }
        else
        {
            oddStr = oddStr + input[count];
        }
    }

    resultStr = evenStr + oddStr;

    return resultStr; 
}

console.log(indexShuffle(inputStr));
