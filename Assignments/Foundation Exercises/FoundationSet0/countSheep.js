//Given a number, say 3. Return 1 sheep...2 Sheep...3 Sheep.

const num = 5; 

function countSheep(number)
{
    let count = 1; 

    for(count; count<=number; count++)
    {
        console.log(`${count} sheep...`);
        //console.log( count + 'sheep...');
    }

    return true; 
}

countSheep(num);