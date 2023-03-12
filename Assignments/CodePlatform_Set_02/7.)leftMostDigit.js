/*
Write a function that takes a string as an argument and returns the left most digit in the string.
Examples
    leftDigit("TrAdE2W1n95!") ➞ 2
    leftDigit("V3r1ta$") ➞ 3
    leftDigit("U//DertHe1nflu3nC3") ➞ 1
    leftDigit("J@v@5cR1PT") ➞ 5
*/

const rando = 'U//DertHe1nflu3nC3';

function leftDigit(inputRan)
{
    const tempArr = inputRan.split('');
    let count = 0;
    let result;

    for(count=0; count<tempArr.length; count++)
    {
        if(tempArr[count].charCodeAt()>47 && tempArr[count].charCodeAt()<58)
        {
            result = parseInt(tempArr[count]);
            break; 
        }
    }

    return result; 
}

console.log(leftDigit(rando));
