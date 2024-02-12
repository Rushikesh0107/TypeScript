"use strict";
function greetThePerson(person) {
    console.log("Hello " + person.name);
    console.log("You are in the " + person.department + " department");
}
greetThePerson({
    name: "david",
    age: 66,
    department: "HR"
});
console.log("-------------------------------------------------");
function greetTheCustomer(customer) {
    console.log("Hello " + customer.name);
    console.log("You are " + customer.age + " years old");
    if ("card" in customer) {
        console.log("You have a card " + customer.card);
    }
    if ("cash" in customer) {
        console.log("You have cash " + customer.cash);
    }
}
greetTheCustomer({
    name: "john",
    age: 22,
    card: 1234567890
});
console.log("-------------------------------------------------");
greetTheCustomer({
    name: "david",
    age: 88,
    cash: 33
});
