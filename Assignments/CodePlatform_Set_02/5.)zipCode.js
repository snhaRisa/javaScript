/*
Body:
Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. 
A valid zip code is as follows:
    Must only contain numbers (no non-digits allowed).
    Must not contain any spaces.
    Must not be greater than 5 digits in length.
Examples
    isValid("59001") ➞ true
    isValid("853a7") ➞ false
    isValid("732 32") ➞ false
    isValid("393939") ➞ false
*/

const zipCode = '12345';

function isValid(inputZip)
{
    let count = 0;

    if(inputZip.length != 5)
    {
        return false; 
    }

    for(count=0; count<inputZip.length; count++)
    {
        if(inputZip[count].charCodeAt()>=48 && inputZip[count].charCodeAt()<58)
        {
            continue; 
        }
        else
        {
            return false; 
        }
    }

    return true; 
}

console.log(isValid(zipCode));
