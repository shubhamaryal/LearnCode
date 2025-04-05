const fruits = [
                 {name:"mango", color: "yellow",calories:76},
                 {name:"apple", color: "red",calories:53},
                 {name:"orange", color: "orange",calories:176},
               ]
/* big bracket denoted aray and {} ma chai object haru huney vyo */

console.log(fruits[1].name); 
console.log(fruits[0].color); /* yesari kun array ko k print grni vnera print
                                grna milxa */


/* sabai array method like push, pop, etc.... haru use grna milxa */

// eg:
fruits.push({name:"banana", color:"yellow",calories:233});

console.log(fruits); /* yesma chai banana ni last ma add vyera print hunxa,
                        similarly aru method ni use grna milxa */


// USING ARRAY METHODS

/* For Each */

fruits.forEach(a=>(console.log(a.name))); /* used forEach here ani paxi 
                                                forEach ley elements ligxa
                                                suru ko argument ma so abc
                                                ma elemet gyera basni vyo 
                                                sabai */

/* Map */

const newArray = fruits.map(b=>b.color.toUpperCase());
console.log(newArray);

/* Filter */

const lowCal = fruits.filter(c=> c.calories<100);
console.log(lowCal);

/* Reduce */

const highestCal = fruits.reduce((first,second)=>
    first.calories > second.calories ? first : second);
console.log(highestCal);