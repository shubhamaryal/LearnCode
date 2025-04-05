/*
    static - keyword that defines properties or methods that belong to a class itself rather
            than the objects created from that class (class owns anything static, not the
            objects)

    yo vneko sidai class ma belong grxa kunai specific object ma belong grdaina
*/

class mathUtil{
    static PI= 3.14159;

    static getDiameter(radius){     // class vitra function lekhna prdaina 
        return radius*2;
    }

    static getCircumference(radius){     // class vitra function lekhna prdaina 
        return 2*this.PI*radius;
    }
}

const radius =5;
console.log(mathUtil.PI);
console.log(mathUtil.getDiameter(radius));
console.log(mathUtil.getCircumference(radius));

// --------

class User{
    static userCount = 0;

    constructor(username){
        this.username=username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} online rn.`);
    }

    sayHi(){
        console.log(`Hey, I'm ${this.username}`);
    }
}

const user1 = new User("Shubham");
user1.sayHi();
const user2 = new User("ABC");
user2.sayHi();

console.log(user1.username);
console.log(user2.username);
console.log(User.userCount)

User.getUserCount();