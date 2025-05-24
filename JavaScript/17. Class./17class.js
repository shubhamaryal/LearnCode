/*
    class = (ES6 feature) provides a more structured and cleaner way to work with objects
            compared to traditional structure functions ex. static keyword, encapsulation,
            inheritance.
*/

class Clothes{
    constructor(name, price){
        this.name= name;
        this.price = price;
    }

    info(){  // class ma function banaudda function keyword lekhnu prdaina
        console.log(`Name: ${this.name}`);
        console.log(`Price: Rs. ${this.price}`);
    }
    total(tax){
        return (this.price*tax)+this.price;
    }
}

const tax = 13/100;

const product1= new Clothes("Shirt",1000);
const product2= new Clothes("Pant",2500);

const totalPrice1 = product1.total(tax);
const totalPrice2 = product2.total(tax);


product1.info();
console.log(`The total price with tax : Rs. ${totalPrice1.toFixed(2)}`);
product2.info();
console.log(`The total price with tax : Rs. ${totalPrice2.toFixed(2)}`);