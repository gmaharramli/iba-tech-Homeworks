function createNewUser() {
    let newUser = {};
    newUser.firstname = prompt("Enter your first name:");
    newUser.lastname = prompt("Enter your last name: ");
    newUser.getLogin = () =>
    {
        return newUser.firstname.charAt(0).concat(newUser.lastname).toLowerCase();
    }
    alert(newUser.getLogin());
}
createNewUser();
/*Theoretical question:
* Methods are actions that can be performed on objects, and it is also property
* which contains function definition. In this exercise, getlogin is method of function.
* For accessing method we need to type objectName.methodName()-newUser.getLogin()
* There is also built-in-methods which exist also in this exercise-(tolowerCase())
* */