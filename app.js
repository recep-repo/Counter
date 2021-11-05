
const number = document.querySelector(".counter");
const buttons = document.querySelectorAll(".btn");
let count = 0;


buttons.forEach(function(btn){
    btn.addEventListener("click", function(e) {
        const classin = e.currentTarget.classList;
        if(classin==("btn decrease")){
            count--;
        }else if (classin.contains("increase")){
            count++;
        }else{
            count = 0
        }
        if(count<0){
            number.style.color = "red";
        }else if(count>0){
            number.style.color = "green";
        }else {
            number.style.color = "white";
        }
       
        number.innerHTML = count;

    } )
})