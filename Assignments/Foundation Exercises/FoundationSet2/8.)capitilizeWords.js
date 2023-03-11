

const string = 'this is in lower case. a string made for modification.';

function capWords(inputStr)
{
    let resultStr = '';
    let tempArr = [], tempArr1=[], count=0;

    tempArr = inputStr.split(' ');

    for(count=0; count<tempArr.length; count++)
    {
        let str = '';
        str = tempArr[count][0].toUpperCase() + tempArr[count].slice(1).toLowerCase();
        tempArr1.push(str);
    }

    resultStr = tempArr1.join(', ');

    return resultStr; 
}

console.log(capWords(string));
