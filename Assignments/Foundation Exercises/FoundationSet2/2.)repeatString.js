
const letter = 'R';
const number = 6;

function repeatString(alpha, num)
{
    let resultString = '';
    let count = 0;
    
    // if(num == undefined || alpha == '')
    // {
    //     return 'Error in string or number';
    // }

    resultString = num == undefined ? "Error in string or number" : num; 


    for(count=0; count<num; count++)
    {
        resultString = resultString + alpha;
    }

    return resultString; 
}

console.log(repeatString(letter, number))
