function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogWalked=true;

            if(dogWalked){
                resolve("You walked the dog");
            }
            else{
                reject("You didnt walk the dog");
            }
            
        },1000);
    });
}

function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cleanedKitchen= true;

            if(cleanedKitchen){
                resolve("You cleaned the kitchen");
            }
            else{
                reject("You didnt clean the kitchen");
            }
        },2500);
    });
}

function takeOutTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const tookTrash=true;
            
            if(tookTrash){
                resolve("You took the trash out");
            }
            else{
                reject("You didnt took the trash out")
            }
        },1000);
    });
}

async function doChores(){
    try{
        const walkDogTask = await walkDog();
        console.log(walkDogTask);
        const cleanKitchenTask = await cleanKitchen();
        console.log(cleanKitchenTask);
        const takeOutTrashTask = await takeOutTrash();
        console.log(takeOutTrashTask);
    }
    catch(error){
        console.error(error);
    }
}

doChores();