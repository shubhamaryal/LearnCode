const score: Array<number> = [];
const names: Array<string> = [];

function IdentityOne(val: boolean | number): boolean | number {
  return val;
}

function IdentityTwo(val: any): any {
  return val;
}

function IdentityThree<Type>(val: Type): Type {
  return val;
}

// IdentityThree("shubham")
// IdentityThree(1)
// IdentityThree(true)

function IdentityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

IdentityFour<Bottle>({ brand: "red", type: 1 });
