interface Userr {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrial: () => string;
  // startTrial(): string;
  getCoupon(couponName: string, value: number): number;
  // here the value that it is getting is string & number and the return type is number
}

const shubhamm: Userr = {
  dbId: 1,
  email: "shubham@gmail.com",
  userId: 341,
  // startTrial: () => {
  //   return "trial started";
  // },
  getCoupon: (name: "shubham", off: 10) => {
    return 10;
  },
};

shubhamm.email = "s@gmail.com";

export {};