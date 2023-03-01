//Take a food cart as object and return the total. 

const cart = [
    { id: 1, name: 'vade', price: 35, quantity: 1 }, 
    { id: 2, name: 'dose', price: 65, quantity: 2 },
]

function totalBill(order)
{
    let count = 0; 
    let sum = 0; 

    for(count=0; count<cart.length; count++)
    {
        sum = sum + (cart[count].price * cart[count].quantity);    
    }

    return sum;
}

console.log(`The total sum of your order is Rs.${totalBill(cart)}`);
