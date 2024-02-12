interface User {
    firstName: string;
    lastName: string;
    age: number;
    email?: string;
}

function isLeagel (user: User): boolean {
    if(user.age < 18) return false;
    else return true;
}

const greet = (user: User) : void => {
    console.log("Hello " + user.firstName);
}

const user = {
    firstName: 'John',
    lastName: "david",
    age: 88
}

console.log(isLeagel(user));
greet(user);

