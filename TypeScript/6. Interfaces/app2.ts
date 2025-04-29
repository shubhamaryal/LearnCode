interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   getCoupon(couponName: string, value: number): number;
}

interface User {
  githubId: string;
}

const shubham: User = {
  dbId: 1,
  email: "s@gmail.com",
  userId: 341,
  githubId: "shubham",
};

export {};