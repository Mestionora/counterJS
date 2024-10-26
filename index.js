const increase = document.getElementById("increaseBtn");
const decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
let count = 0;

increase.onclick = function(){
    count++;
    labelContainer.textContent = count;
}

decrease.onclick = function(){
    count--;
    labelContainer.textContent = count;
}

reset.onclick = function(){
    count = 0;
    labelContainer.textContent = count;
}