function fun1(fun2){
    setTimeout(()=> {console.log("Task 1");
                      fun2()}, 3000);
}

function fun2(){
    console.log("Task 2");
    console.log("Task 3");
}

fun1(fun2);

// this is the process of handling asynchronous



/* 
    asynchronous code background ma run hunxa ani aru lai rokdaina ani aru chai
    execute hudai grxa, like timeout use grda aru hunxa execute but tyo 
    timeout use greko ley aru lai rokdaina

    tara tyo asychronous code hos ani aru hos vnne xa vne chai we have methods
    to handle it
*/

/*
    setTimeout(()=> console.log("Task1"),3000);

    console.log("task2");
    console.log("task3");
*/

/*
    above is the example of it, mathi ko comment vitra ko program ma chai task 2
    ra 3 agadi hunxa then task 1 hunxa, 1 ley 2 ra 3 lai rokdaina afu backgrouund
    ma run vairako hunxa
*/
 
