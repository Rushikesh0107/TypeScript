function createUser():{name: string, Phone: number}{
    return {name: "rushikesh", Phone: 6969}
}

console.log(createUser().name);

function newUser({name, Phone, email} : {name: string, Phone: number, email: string}) {
    console.log(`${name} + ${Phone} + ${email}`);
}
let data = {name:  "Rushikesh", Phone: 5544, email:"rushikesh@gmail.com"}

newUser(data)

// newUser({name: "rushikesh", Phone: 5565, email: "php@gmail.com"}) cannot use an extra parameter 
//But youo can use it by first passing it in a variable and and the variable as a parameter




export{}
