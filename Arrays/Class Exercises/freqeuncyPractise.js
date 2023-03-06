
const str = 'Rishav is a gentleman. He is a charmer. Ladies love him to their best of their hearts.';

function fre(str)
{
    let count = 0; 
    const obj1 = {};

    for(count=0; count<str.length; count++)
    {
        if(!Object.keys(obj1).includes(str[count]))
        {
            obj1[str[count]] = 1;
        }
        else
        {
            obj1[str[count]] = obj1[str[count]] + 1; 
        }
    }

    return obj1; 
}

console.log(fre(str));