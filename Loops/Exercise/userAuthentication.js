//Create a function authenticate() which has two arguments, one being array the other being the string. Array would be a collection of strings. If the string is matched with any one of the string in array it return "authenticated", otherwise return "not authenticate".
//NO USE OF INCLUDES & INDEXOF METHOD.

const passwords = ['Password123', 'dct@academy', 'qwerty', 'secret123', 'gopro123', 'harryp@tter'];
const inputStr = 'secret@123';

function authenticate(passwords, inputStr)
{   
    let count =0;
    for(count; count<passwords.length; count++)
    {
        if(inputStr === passwords[count])
        {
            return "authenticated";
        }
        else
        {
            continue; 
        }
    }

    return 'not authenticate';
}

console.log(authenticate(passwords, inputStr));

