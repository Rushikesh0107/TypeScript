type Human = {
    name: string,
    age: number,
}

type Employee = {
    name: string,
    department: string,
}

//we can intersect the two types to create a new type
type ManagerOfPeople = Human & Employee;

function greetThePerson(person: ManagerOfPeople){
    console.log("Hello " + person.name);
    console.log("You are in the " + person.department + " department");
}


greetThePerson({
    name: "david",
    age: 66 ,
    department: "HR"
})

console.log("-------------------------------------------------");


interface OnlineCustomer {
    name: string,
    age: number,
    card: number
}

type OfflineCustomer = {
    name: string,
    age: number,
    cash: number
}


//we can use the union operator to create a new type
type Customer = OnlineCustomer | OfflineCustomer;

function greetTheCustomer(customer : Customer){
    console.log("Hello " + customer.name);
    console.log("You are " + customer.age + " years old");
    if("card" in customer){
        console.log("You have a card " + customer.card);
    }

    if("cash" in customer){
        console.log("You have cash " + customer.cash);
    }
}

greetTheCustomer({
    name: "john",
    age: 22,
    card: 1234567890
})

console.log("-------------------------------------------------");

greetTheCustomer({
    name: "david",
    age: 88,
    cash: 33
})
