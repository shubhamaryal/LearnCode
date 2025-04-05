type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  ccDetail?: number;
};

let myUser: User = {
  _id: "1",
  name: "shubham",
  email: "s@s.com",
  isActive: false,
};


type cardNumber = {
    cardnumber : string
}

type cardDate = {
    cardDate : string
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}

myUser.email = "shubham@gmail.com";
// myUser._id = "2" // error