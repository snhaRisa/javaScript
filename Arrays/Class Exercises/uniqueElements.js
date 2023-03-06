//Get unique elements from the array. 
//can use .includes(), .indexOf(to get-1 and then input);

const numbers = [10, 20, 30, 40, 10, 20, 40, 10];

function findUnique(numbers)
{
    const results = [];
    let count = 0; 

    for(count; count<numbers.length; count++)
    {
        if(results.includes(numbers[count]) == false) //taking it as true would have been an issue. As we would have a possibility of missing a number occurring only once. 
        //if(!results.includes(numbers[count]))
        {
            results.push(numbers[count]);
        }      
        else
        {
            continue;
        }
    }

    return results;
}

console.log(findUnique(numbers)); //10, 20, 30, 40;
