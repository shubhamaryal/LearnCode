class User {
  protected _courseCount = 1;

  readonly city1: string = "Butwal";
  constructor(public email1: string, public name1: string) {}

  private deleteToken() {
    console.log("Token Deleted");
  }

  // getter
  get getAppleEmail(): string {
    return `apple.${this.email1}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // setter shouldnt have any return type else there will be error
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("course should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}



const shubham1 = new User("s@gmail.comm", "Shubhamm");

export {};
