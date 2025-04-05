function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;

      if (dogWalked) {
        resolve("You walked the dog");
      } else {
        reject("You didnt walk the dog");
      }
    }, 1000);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleanedKitchen = true;
      
      if (cleanedKitchen) {
        resolve("You cleaned the kitchen");
      } else {
        reject("You didnt clean the kitchen");
      }
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tookTrash = true;

      if (tookTrash) {
        resolve("You took the trash out");
      } else {
        reject("You didnt took the trash out");
      }
    }, 1000);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("You finished all the work.");
  })
  .catch((error) => console.error(error));
