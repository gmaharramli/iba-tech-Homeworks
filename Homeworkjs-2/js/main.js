
let number1=Number(prompt("Enter first number: "));
let number2=Number(prompt("Enter second number: "));
let operator=prompt("Enter operator: ");
function calc (number1,number2,operator){
    if(operator=='*') return number1*number2;
    else if (operator=='+') return number1+number2;
    else  if(operator=='-') return number1-number2;
    else  if(operator=='/') return number1/number2;
}
alert(calc(number1,number2,operator));

//Theoretical questions
/*First
*Function is reusable code which is utilized to perform some action.
*Functions have an advantage to provide better modularity for application, and
*functions are necessary for a high degree of code reusing instead of writing the code again. Built-in functions
*are functions which language provides them itself. However, we can write our functions also.
/*Second
*Arguments are the values received by the function, and passed to function. In this exercise,
*number1,number2 and operator are arguments of function, and function take this data and display the result.
*In some cases, arguments can be missed, and this time default value of parameter is undefined. The reason why
*they passed when a function is called the function only know the values, but it doesn't know the locations of arguments.
*In case a function changes its argument's value, it will not be able to change the parameter's original value.
*/