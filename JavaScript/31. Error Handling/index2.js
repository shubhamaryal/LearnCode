try{
    const diviend= Number(window.prompt("Enter a dividend: "));
    const divisor= Number(window.prompt("Enter a divisor: "));

    if (divisor==0){
        throw new Error("The number cannot be divided by zero.");
    }

    if (isNaN(diviend) || isNaN(divisor)){
        throw new Error("Values must be a number.");
    }

    const result= (diviend/divisor);
    console.log(result);
}

catch(error){
    console.error(error);
}

console.log("error");