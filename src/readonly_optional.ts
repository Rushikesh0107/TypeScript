type User1 = {
    _id: string,
    email: string,
    password: string,
    isPaid: boolean
    creditCardNUmber?: number
}

//connot change the _id anywhere
//?

function newUser(user: User1){
    return user;
}

console.log(newUser({
    _id: "135",
    email: "ruhsikesh@gmail.com",
    password:"adsa3adsd",
    isPaid: true,
}));

type cardNumber = {
    cardNum: number
}

type cardDate = {
    date: string
}

type CVV = {
    cvvNumber: number
}

type cardDetails = cardNumber & cardDate & CVV;

