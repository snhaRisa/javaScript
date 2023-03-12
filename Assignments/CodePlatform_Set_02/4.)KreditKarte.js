/* 
Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.
Examples
    cardHide("1234123456785678") ➞ "************5678"
                                    0123456789112345;
    cardHide("8754456321113213") ➞ "************3213"
    cardHide("35123413355523") ➞ "**********5523"
Examples
    Ensure you return a string.
    The length of the string must remain the same as the input.
*/

const creditCard = '123453242341';

function cardHide(inputCredit)
{
    let resultStr = '', count=0;

    for(count=0; count<inputCredit.length-3; count++)
    {
        resultStr = resultStr + '*';
    }

    for(count=inputCredit.length-4; count<=inputCredit.length-1; count++)
    {
        resultStr = resultStr + inputCredit[count];
    }

    return resultStr;
}

console.log(cardHide(creditCard));
