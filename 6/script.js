//Example objects!
/*const person1 = {
    name: "Kalle",
    email: "bob@gmail.com"
};

const person2 = {
    name: "Bob",
    email: "bob@gmail.com"
};*/

//Returns true if the user email equals.
function isSameUser(person1, person2) {
    if (person1.email.toLowerCase() === person2.email.toLowerCase()) {
        return true;
    }
    return false;
}