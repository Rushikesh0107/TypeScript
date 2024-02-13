function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

//when you dont know the type of the parameter while initializing the function, you can use generic type

//you can define the type while calling the function

let elm = getFirstElement<number>([1,2,3,4]) //type : number
let elm1 = getFirstElement<string>(["a","b","c","d"])  //type: string
let elm2 = getFirstElement<boolean>([true,false,true,false]) //type: boolean

console.log(typeof elm);
console.log(typeof elm1);
console.log(typeof elm2);
