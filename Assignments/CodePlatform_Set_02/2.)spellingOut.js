/*
Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
Examples
    spelling("bee") ➞ ["b", "be", "bee"]
    spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
    spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]
*/

const spell = 'Happy';

function spellingEcho(inputString)
{
    const resultArr = [];
    let tempStr = '';
    let count; 

    for(count=0; count<inputString.length; count++)
    {
        tempStr = tempStr + inputString.charAt(count);
        resultArr.push(tempStr);
    }

    return resultArr;
}

console.log(spellingEcho(spell));
