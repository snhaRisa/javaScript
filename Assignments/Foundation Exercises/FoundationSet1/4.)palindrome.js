

const inputString = 'Madam';

function palindrome(input)
{
    let checkString = '';
    let count;

    for(count=(input.length-1); count>=0; count--)
    {
        checkString = checkString + input[count];
    }

    if(checkString === input)
    {
        return true; 
    }
    else
    {
        return false; 
    }

}

console.log(palindrome(inputString));
