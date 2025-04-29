interface DataBase {
  connection: string;
  username: string;
  password: string;
}

function anyFunction<T, U extends DataBase>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anyFunction(3, { connection: "test", username: "test", password: "test" });

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCarT(product: T) {
    this.cart.push(product);
  }
}

export {};
