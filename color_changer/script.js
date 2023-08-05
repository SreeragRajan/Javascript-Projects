var container = document.querySelector("#container");
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
