type User = {
    name: string;
    age: number;
}

// type UserRecord = {
//     [key: string] : User
// } instead of this we can use Record

type UserRecord = Record<string, User>; //this is same as the above type
//it basically stores the ke value pairs of the user type


const user : UserRecord = {
    "john" : {
        name: "John",
        age: 20
    },
    "ram": {
        name: "Ram",
        age: 25
    },
    "penny": {
        name: "Penny",
        age: 99
    }
}

///=================Map====================
  
  // Initialize an empty Map
  const usersMap = new Map<string, User>();
  
  // Add users to the map using .set
  usersMap.set('abc123', { age: 123, name: 'John Doe' });
  usersMap.set('xyz789', { age: 22, name: 'Jane Doe' });
  
  // Accessing a value using .get
  console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }



