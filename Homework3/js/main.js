let name=prompt("Enter your name: ");
let age=prompt("Enter your age: ");
if(age<18) alert("You are not allowed to visit this website");
else if(age>=18 && age<=22) {
    const result=confirm("Are you sure you want to continue?");
    if(result) alert("Welcome, "+name);
    else alert("You are not allowed to visit this website")
}
else alert("Welcome, "+name);
//Theoretical questions
/* First
*var and let are approximately the same.However, these variables have several differences: var is  function scoped it means
*var variable is accessible inside any function, but let is block scoped means let exists in appropriate blocks.
*var variable can be re-declared and updated; let cannot be re-declared.
*const is also block scoped. Difference from let and var variables is const cannot be reassigned.
*Moreover, we can initialize var variable with undefined; nevertheless, it is not possible with let and const.*/

/*Second
* var is an old way to declare any variable. Now instead of var, people use let variable. As I mentioned, because var
* variable is visible at the function level which is not so meaningful if we do not use it
*  and in var declaration process starts at function start makes it worse. In addition, if we declare the same variable
* two times, no error will happen. Therefore, if an extreme case or problem don't happen it is better not
* to use var.*/