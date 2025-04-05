function closer(){ //a a closer fun. with name closer
    const a = "IT IS PRIVATE"; 

    function inner(){ // a inner fun. inside closure
        console.log(a);
    }

    inner();
}

closer();


console.log(`------------------------------`);


function createCounter(){
    let count=0;
    function increase(){
        count++;
        console.log(`1. Count is increase by ${count}`);
    }
    return increase; 
}

const counter = createCounter(); 

counter();
counter();


console.log(`------------------------------`);


function createCounter2(){
    let count2=0;
    function increase2(){
        count2++;
        console.log(`2. Count is increase by ${count2}`);
    }
    return {increase2}; 
}

const counter2 = createCounter2(); // without this closure cant be set

counter2.increase2();
counter2.increase2();


/*
    Program 1 (createCounter): The function returns the increase function 
    directly. This means the counter variable holds a reference to the increase 
    function, and you can call it directly using counter().

    Program 2 (createCounter2): The function returns an object with a method 
    increase2. This means counter2 is an object, and to call the increase2 
    function, you must use counter2.increase2().


    In Program 1, counter is a function, so you can call it directly like 
    counter().

    In Program 2, counter2 is an object, not a function. To execute the 
    counting logic, you need to call the method increase2 within that 
    object, like counter2.increase2().
*/

console.log(`------------------------------`);

function createCounter3(){
    let count3=0;

    function increase3(){
        count3++;
        console.log(`3. Count is increase by ${count3}`);
    }

    function getValue(){ /* sabai data haru private huxna so yesari data
                            chaiyo vne pathauna prxa navye value access grna
                            mildaina */
        console.log(`The current value is ${count3}`);
    }

    return {increase3,getValue}; 
}

const counter3 = createCounter3();

counter3.increase3();
counter3.increase3();

counter3.getValue(); 

console.log(`------------------------------`);

function createScoreManager() {
    let score = 0; 

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore() {
        return score;
    }

    return {increaseScore,decreaseScore,getScore};
}

const scoreManager = createScoreManager();

scoreManager.increaseScore(5);  
scoreManager.increaseScore(6);  
scoreManager.decreaseScore(3);

console.log(`Total Score: ${scoreManager.getScore()}pts`);

