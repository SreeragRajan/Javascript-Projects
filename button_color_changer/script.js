const buttons = document.getElementsByTagName("button");

function buttonColorChange(color) {

    var btnColor = color.value;
   
    if (color.value === "random") {
        const choices = ["btn-primary", "btn-success", "btn-danger", "btn-warning"];
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove(buttons[i].classList[1]);
            buttons[i].classList.add(choices[Math.floor(Math.random()*4)]);
        }
        
    }
    if(color.value === "reset") {
        buttons[0].style.backgroundColor = "#0D6EFD"
        buttons[1].style.backgroundColor = "#DC3545";
        buttons[2].style.backgroundColor = "#ffc107";
        buttons[3].style.backgroundColor = "#198754";
    }else{
        for(let i = 0; i < buttons.length; i++) {  
            buttons[i].style.backgroundColor = `${btnColor}`;
        }
    }
    
}