const form = document.querySelector("#form");
const container = document.querySelector("#container");

form.addEventListener("submit", function(e){
    e.preventDefault();
    btn.addEventListener("click", function(){
        
        const bmi = document.querySelector("#bmi");
        const btn = document.querySelector("#btn");
        var height = parseInt(document.querySelector("#height").value);
        var weight = parseInt(document.querySelector("#weight").value);
    
        const result = weight/((height*height)/10000);
        if(height === "" || weight === '' || isNaN(height) || isNaN(weight)) {
            alert("Enter a valid number");
        }else {
            if(result < 18.6) {
                bmi.innerHTML = `Your bmi is ${result.toFixed(2)}`;
                container.style.backgroundColor = "#FEF250";
                bmi.style.color = "blue";
            }else if(result > 24.9) {
                bmi.innerHTML = `Your bmi is ${result.toFixed(2)}`;
                container.style.backgroundColor = "#ff3f3f";
                bmi.style.color = "white";
            }else {
                bmi.innerHTML = `Your bmi is ${result.toFixed(2)}`;
                container.style.backgroundColor = "#25FF92";
                bmi.style.color = "white";
            }
        }
    });
});