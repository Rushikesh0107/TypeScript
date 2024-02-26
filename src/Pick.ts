type User = {
    username: string;
    age: number;
    email: string;
    password: string;
}

// type UpdatedUser = {
//     username?: string;
//     age?: number;
//     email?: string;
//     password?: string;
// }

type UpdatedUser = Pick<User, "username" | "password">; // here i can pick specific variables from the parent type
//drawback of this is that i have to update both username and password at the same time
//therefore we use partials

type UpdateUserOptional = Partial<UpdatedUser>; // here i can update the username and password separately

//Basically
//type UpdatedUserOptinal = {
    //username?: string;
    //password?: string;
//}

// const user: UpdatedUser = {
//     username: "John",
    //this will throw an error as password field is  missing
// }

const user : UpdateUserOptional = {
    username:  "John"
} //this will not throw an error as password field is optional

export const updateUser = (UpdateUserProps : UpdateUserOptional) => {
    console.log(UpdateUserProps);
    
}