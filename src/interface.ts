interface Person {
    name: string,
    age: number,
    greet(phrase: string) : void
}

//these are the basic diffrence between interface and type

//interface can be implemented by a class 
//while the type can not be implemented by a class

// interface can be extended by another interface
// while type can not be extended by another type

// interface can be used to describe a function
// while type can not be used to describe a function



class Manager implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name
        this.age =  age
    }


    greet(phrase: string): void {
        console.log(`${phrase} ${this.name} the Manager`);
        console.log(`you are too old brodhaa ${this.age}`);
    }
}

const e = new Manager("john", 66)

e.greet("hello")