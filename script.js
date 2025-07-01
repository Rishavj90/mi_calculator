let display = document.getElementById(`display`);
document.getElementById(`zeroBtn`).onclick = function(){
    display.value = display.value + `0`;
};
document.getElementById(`oneBtn`).onclick = function(){
    display.value = display.value + `1`;
};
document.getElementById(`twoBtn`).onclick = function(){
    display.value = display.value + `2`;
};
document.getElementById(`threeBtn`).onclick = function(){
    display.value = display.value + `3`;
};
document.getElementById(`fourBtn`).onclick = function(){
    display.value = display.value + `4`;
};
document.getElementById(`fiveBtn`).onclick = function(){
    display.value = display.value + `5`;
};
document.getElementById(`sixBtn`).onclick = function(){
    display.value = display.value + `6`;
};
document.getElementById(`sevenBtn`).onclick = function(){
    display.value = display.value + `7`;
};
document.getElementById(`eightBtn`).onclick = function(){
    display.value = display.value + `8`;
};
document.getElementById(`nineBtn`).onclick = function(){
    display.value = display.value + `9`;
};
document.getElementById(`decimalBtn`).onclick = function(){
    display.value = display.value + `.`;
};

document.getElementById(`plus`).onclick = function(){
    display.value = display.value + `+`;
};
document.getElementById(`minus`).onclick = function(){
    display.value = display.value + `-`;
};
document.getElementById(`multiply`).onclick = function(){
    display.value = display.value + `*`;
};
document.getElementById(`divide`).onclick = function(){
    display.value = display.value + `/`;
};

document.getElementById(`clear`).onclick = function(){
    let str = display.value;
    if(str.length > 0){
        str = str.slice(0,str.length - 1);
        display.value = str; 
    }
};
document.getElementById(`Aclear`).onclick = function(){
    display.value = "";
}

document.getElementById(`equal1`).onclick = calculate;
document.getElementById(`equal2`).onclick = calculate;


function calculate() {
    try {
        let ans = new Function('return ' + display.value)();
        display.value = ans;
    } catch(error) {
        window.alert("Invalid input");
        display.value = "";
    }
}