const counter = document.querySelector(".counter");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

decrease.addEventListener('click', () =>{
    counter.innerHTML = Number(counter.innerHTML) -1 ;
});

reset.addEventListener('click', () => {
    counter.innerHTML = 0;
});

increase.addEventListener('click', () => {
    counter.innerHTML = Number(counter.innerHTML) + 1 ;
});