

const inputStr = 'Neighborhood'; 
const chopLength = 3, resultArr = []; 

function chopString(strInput, num)
{
    let count = 0; 
    
    for(count; count<strInput.length; count++)
    {
        resultArr.push(strInput.slice(count, count+num));
        count++;
    }

    return resultArr;
}

console.log(chopString(inputStr, chopLength));