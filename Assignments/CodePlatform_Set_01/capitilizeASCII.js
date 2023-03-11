/* 
Create a function that takes a string as input and capitalizes a letter if its ASCII code is even and returns its lower case version if its ASCII code is odd.
    Examples
    asciiCapitalize("to be or not to be!") ➞ "To Be oR NoT To Be!"
    asciiCapitalize("THE LITTLE MERMAID") ➞ "THe LiTTLe meRmaiD"
    asciiCapitalize("Oh what a beautiful morning.") ➞ "oH wHaT a BeauTiFuL moRNiNg."
*/

const inputString = 'to be or not to be!';
let resultString = '';

function asciiCapitalize(stringInput)
{
    let count = 0; 

    for(count; count<stringInput.length; count++)
    {
        if(stringInput.charCodeAt(count) % 2 == 0)
        {
            resultString = resultString + stringInput[count].toUpperCase();
        }
        else
        {
            resultString = resultString + stringInput[count].toLowerCase();
        }
    }

    return resultString; 
}

console.log(asciiCapitalize(inputString));
