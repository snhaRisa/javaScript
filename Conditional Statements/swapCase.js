//Create a function which takes a string in upper & lower case. Then swap them and display the output.

const string = 'tHisISmuMBai';
let resultString = '';
let count = 0;


function swapCase(str)
{
    for(count=0; count<string.length; count++)
    {
        if(string.charAt(count) == string.charAt(count).toUpperCase())
        {
            resultString = resultString + string.charAt(count).toLowerCase();
        }
        else
        {
            resultString = resultString + string.charAt(count).toUpperCase();
        }
    }
    console.log(resultString);
}

swapCase(string);
