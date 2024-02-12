"use strict";
function isLeagel(user) {
    if (user.age < 18)
        return false;
    else
        return true;
}
const greet = (user) => {
    console.log("Hello " + user.firstName);
};
const user = {
    firstName: 'John',
    lastName: "david",
    age: 88
};
console.log(isLeagel(user));
greet(user);
