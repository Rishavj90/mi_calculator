var btn = document.querySelectorAll(".buttons");

var num_input = document.querySelectorAll(".num_input");
num_input.forEach(function(a){
    a.addEventListener("click", function(){
        a.style.backgroundColor = "rgb(239, 251, 215);"
    })
})
btn.forEach(function(i){
    i.addEventListener("click", function(){
        num_input.value += b.innerText;
    })
})

var operator_btn = document.querySelectorAll(".operator_buttons");
var operator_input = document.querySelector(".operator_input");
for(let i = 0; i <operator_btn.length; i++){
    operator_btn[i].addEventListener("click", function(){
        operator_input.value = operator_btn[i].innerText;
    })
}