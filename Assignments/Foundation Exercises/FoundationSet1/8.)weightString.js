
const string01 = 'Batman';
const string02 = 'Superman';

function weightCalc(input01, input02)
{
    let strSum01 = 0, strSum02 = 0;
    
    for(let count = 0; count<input01.length; count++)
    {
        strSum01 = strSum01 + input01.charCodeAt(count);
    }
    for(count = 0; count<input02.length; count++)
    {
        strSum02 = strSum02 + input02.charCodeAt(count);
    }

    if(strSum01 > strSum02)
    {
        return 1;
    }
    else if(strSum01 < strSum02)
    {
        return 2; 
    }
    else
    {
        return "Equal"; 
    }
}

console.log(weightCalc(string01, string02));
