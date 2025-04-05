type User = {
  name: string;
  email: string;
  isActive: boolean;
};

// type Mystring = string 
// this is allowed but it is not much used

function createUser(user: User){}

createUser({name:"",email:"", isActive:true})

export {};
