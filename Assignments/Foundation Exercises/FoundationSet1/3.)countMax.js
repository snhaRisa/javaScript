//Create a function which takes an integer and then returns the sum of the digits of our integer. 

//Note:
//Could have done without the use of an Array. Still the solution is right. We can reduce it further and save some space. 


let number = 1987;

function countDigits(input)
{
    let count=0, strTest='', sum=0;
    let arrTest = [];

    strTest = strTest + input;
    
    for(count; count<strTest.length; count++)
    {
        arrTest.push(Number(strTest[count]));
    }

    for(count=0; count<arrTest.length; count++)
    {
        sum+= arrTest[count];
    }

    return sum; 
}

console.log(countDigits(number))
