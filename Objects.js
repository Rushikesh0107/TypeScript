"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser() {
    return { name: "rushikesh", Phone: 6969 };
}
console.log(createUser().name);
function newUser(_a) {
    var string = _a.name, number = _a.Phone;
    return {};
}
// newUser({name: "rushikesh", Phone: 5565, email: "php@gmail.com"}) cannot use an extra parameter 
//But youo can use it by first passing it in a variable and and the variable as a parameter
var data = { name: "Rushikesh", Phone: 5544, email: "rushikesh@gmail.com" };
console.log(newUser(data));
