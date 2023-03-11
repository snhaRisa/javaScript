//number of occurrence of a letter in a string. 

const str = 'dcdccddttd';

function frequencyCount(str)
{
    const frequencyOb = {};
    let count = 0, occurrence=0; 

    for(count=0; count<str.length; count++)
    {
        if(frequencyOb.hasOwnProperty(str[count]))
        {
            frequencyOb[str[count]]+= 1; 
        }
        else
        {
            frequencyOb[str[count]] = 1;
        }
    }

    return frequencyOb; 
}

console.log(frequencyCount(str));