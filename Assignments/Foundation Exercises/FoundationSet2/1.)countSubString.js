
const str = 'Rishav is a good man. Is he?';
const alpha = 'is';

function countOccurrence(inputString, inputAlpha)
{
    const tempArray = inputString.split(' ');
    let count = 0, resultNum = 0; 

    for(count=0; count<tempArray.length; count++)
    {
        if(tempArray[count].toLowerCase() === inputAlpha)
        {
            resultNum++;
        }
    }

    return resultNum; 
}

console.log(countOccurrence( str, alpha));
