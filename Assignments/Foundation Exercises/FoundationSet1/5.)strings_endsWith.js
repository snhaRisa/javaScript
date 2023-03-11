//create a function which checks whether a function ends with a particular suffix or not. It takes two arguments. 
//Could be more efficient.

const inputString = "Rishav";
const suffix = 'hav';

function endsWith(inputStr, inputsuff)
{
    const arr = inputStr.split('');
    
    const lastIndex = (arr.length-1);

    if(lastIndex == inputsuff)
    {
        return true; 
    }
    else
    {
        return false; 
    }
    
}


// function endsWith(input, suf)
// {
//    const sufLen = suffix.length; 
//    let count = 0, counter=0, sufCount=0; 

//    for(count = input.length-sufLen; count<input.length; count++)
//    {
//         if(input[count]==suf[sufCount])
//         {
//             counter++;
//         }
// 		sufCount++;
//    }

//    if(counter==sufLen)
//    {
//         return true; 
//    }
//    else
//    {
// 		return false; 
//    }
// }

console.log(endsWith(inputString, suffix));
