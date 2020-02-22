function createNewUser() {
    let newUser={
        firstname: prompt("Enter your first name: "),
        lastname: prompt("Enter your last name: "),
        getLogin() {
            alert((this.firstname.charAt(0)+this.lastname).toLocaleLowerCase()) ;
        }
    }
    return newUser;
}
let user = new createNewUser();
user.getLogin()

/* Theoretical question:
*  Methods are actions that can be performed on objects, and it is also property
*  which contains function definition. In this exercise, getlogin is method of function.
*  For accessing method we need to type objectName.methodName()-newUser.getLogin()
*  There is also built-in-methods which exist also in this exercise-(tolowerCase())
* */