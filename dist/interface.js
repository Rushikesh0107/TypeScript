"use strict";
//these are the basic diffrence between interface and type
//interface can be implemented by a class 
//while the type can not be implemented by a class
// interface can be extended by another interface
// while type can not be extended by another type
// interface can be used to describe a function
// while type can not be used to describe a function
// interface can be used to describe an array
// while type can not be used to describe an array
// interface can be used to describe an object
// while type can not be used to describe an object
// interface can be used to describe a class
// while type can not be used to describe a class
// interface can be used to describe a constructor
// while type can not be used to describe a constructor
// interface can be used to describe a property
// while type can not be used to describe a property
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name} the Manager`);
        console.log(`you are too old brodhaa ${this.age}`);
    }
}
const e = new Manager("john", 66);
e.greet("hello");
