function addTwo(num) {
    // return num + 2
    return 'hi'; // to avoid this there is a better way of writing function
}
var value = addTwo(5);
function loginUser(name, email, isPaid) { }
loginUser("Shubham", "shubham@gmail.com", true);
// if we are not passing any variable, then we should declare it as false
var signUp = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
signUp("Shubham", "shubham@gmail.com");
