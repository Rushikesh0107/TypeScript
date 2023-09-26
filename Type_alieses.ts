type User = {
    name: string;
    email: string;
    isPaid: boolean;
}

function createUser(user: User): User{
    return {name: "", email: "", isPaid: true};
}

console.log(createUser({name: "", email: "", isPaid: true}));

export {}