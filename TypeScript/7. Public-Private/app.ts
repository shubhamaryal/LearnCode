class User {
  public email: string;
  name: string;
  // readonly city: string = "ktm";
  private readonly city: string = "ktm";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
    // this.city  // this is accessible cuz it is inside class
  }
}

const shubham = new User("s@gmail.com", "Shubham");

// shubham.city; // Error: Cannot access private property

/* Shortcut way of defining the class and constructor */

class User1 {
  readonly city1: string = "Butwal";
  constructor(public email1: string, public name1: string) {}
}

const shubham1 = new User1("s@gmail.comm", "Shubhamm");

export {};
