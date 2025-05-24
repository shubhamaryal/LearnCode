document.title="DOMMMMMMM";
document.body.style.backgroundColor ="grey";

const username = "Shubham";

const title = document.getElementById("title");

title.textContent += username === "" ? `Guest` : username;