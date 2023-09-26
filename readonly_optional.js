//connot change the _id anywhere
//?
function newUser(user) {
    return user;
}
console.log(newUser({
    _id: "135",
    email: "ruhsikesh@gmail.com",
    password: "adsa3adsd",
    isPaid: true,
}));
