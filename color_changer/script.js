var container = document.querySelector("#container");
// var crimson = document.querySelector("#crimson");
// var yellow = document.querySelector("#yellow");
// var lightblue = document.querySelector("#lightblue");
// var grey = document.querySelector("#grey");
// var teal = document.querySelector("#teal");
var colors = document.querySelectorAll(".colors")


colors.forEach(function (color) {
    color.addEventListener("click", function(e) {
        if(e.target.id === "crimson") {
            container.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "yellow") {
            container.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "lightblue") {
            container.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "grey") {
            container.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "teal") {
            container.style.backgroundColor = e.target.id;
        }
    });
});
// crimson.addEventListener("click", changeBackground("crimson"));
// yellow.addEventListener("click", changeBackground("yellow"));
// lightblue.addEventListener("click", changeBackground("lightblue"));
// grey.addEventListener("click", changeBackground("grey"));
// teal.addEventListener("click", changeBackground("teal"));


// yellow.addEventListener("click", changeBackground("yellow"));
// crimson.addEventListener("click", changeBackground("crimson"));

// function changeBackground(name) {
//     container.style.backgroundColor = name;
// }