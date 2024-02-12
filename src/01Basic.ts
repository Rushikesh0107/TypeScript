let userId: number = 56;
console.log(userId);

let marks = 99.9846454
console.log(marks.toFixed(3));
//theres no need to add:number as typescript is smart enough to find its number as it is immediately assigned

let hero: string;  //hero will take only string variable as input

function getHero(){
    return "thor"
}

hero = getHero();
console.log(hero);

function getUser(name: string, email: string, password: number){
    return email;
}

console.log(getUser("rushikesh", "12", 223));





