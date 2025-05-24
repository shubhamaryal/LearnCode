// .reduce() = reduce the elements of an array to a single valuee

const price =[20, 25, 40, 60];

const total= price.reduce(sum);

console.log(total);

function sum(a,b){    // (a,b) = [ accuulator, element ] [ previuous , next]
    return a+b;
}

// -----

const grade= [75, 44, 90, 88 , 54];

const highest = grade.reduce(max);
const lowest = grade.reduce(min);

console.log(highest);
console.log(lowest);

function max(accuulator,element){
    return Math.max(accuulator,element);
}

function min(accuulator,element){
    return Math.min(accuulator,element);
}