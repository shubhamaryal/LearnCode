interface Userr {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrial: () => string;
  // startTrial(): string;
}

const shubhamm: Userr = {
  dbId: 1,
  email: "shubham@gmail.com",
  userId: 341,
  // startTrial: () => {
  //   return "trial started";
  // },
};

shubhamm.email = "s@gmail.com";
