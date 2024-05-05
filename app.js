const dis = document.querySelector(".display");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btn0 = document.querySelector("#btn0");
const btnClear = document.querySelector("#btnClear");
const btnDot = document.querySelector("#btnDot");

btn1.addEventListener("click", function () {
    const currentValue = dis.innerHTML;
    if (currentValue.length !== 16) {
        dis.innerHTML += "1";
    }
    if (currentValue.length > 10) {
        dis.style.fontSize = "30px";
    } else {
        dis.style.fontSize = "38px";
    }
});
btn2.addEventListener("click", function () {
    const currentValue = dis.innerHTML;
    if (currentValue.length !== 16) {
        dis.innerHTML += "2";
    }
    if (currentValue.length > 10) {
        dis.style.fontSize = "30px";
    } else {
        dis.style.fontSize = "38px";
    }
});
btn3.addEventListener("click", function () {
    const currentValue = dis.innerHTML;
    if (currentValue.length !== 16) {
        dis.innerHTML += "3";
    }
    if (currentValue.length > 10) {
        dis.style.fontSize = "30px";
    } else {
        dis.style.fontSize = "38px";
    }
});
btn4.addEventListener("click", function () {
    const currentValue = dis.innerHTML;
    if (currentValue.length !== 16) {
        dis.innerHTML += "4";
    }
    if (currentValue.length > 10) {
        dis.style.fontSize = "30px";
    } else {
        dis.style.fontSize = "38px";
    }
});
btn5.addEventListener("click", function () {
    const currentValue = dis.innerHTML;
    if (currentValue.length !== 16) {
        dis.innerHTML += "5";
    }
    if (currentValue.length > 10) {
        dis.style.fontSize = "30px";
    } else {
        dis.style.fontSize = "38px";
    }
});
btn6.addEventListener("click", function () {
    const currentValue = dis.innerHTML;
    if (currentValue.length !== 16) {
        dis.innerHTML += "6";
    }
    if (currentValue.length > 10) {
        dis.style.fontSize = "30px";
    } else {
        dis.style.fontSize = "38px";
    }
});
btn7.addEventListener("click", function () {
    const currentValue = dis.innerHTML;
    if (currentValue.length !== 16) {
        dis.innerHTML += "7";
    }
    if (currentValue.length > 10) {
        dis.style.fontSize = "30px";
    } else {
        dis.style.fontSize = "38px";
    }
});
btn8.addEventListener("click", function () {
    const currentValue = dis.innerHTML;
    if (currentValue.length !== 16) {
        dis.innerHTML += "8";
    }
    if (currentValue.length > 10) {
        dis.style.fontSize = "30px";
    } else {
        dis.style.fontSize = "38px";
    }
});

btn9.addEventListener("click", function () {
    const currentValue = dis.innerHTML;
    if (currentValue.length !== 16) {
        dis.innerHTML += "9";
    }
    if (currentValue.length > 10) {
        dis.style.fontSize = "30px";
    } else {
        dis.style.fontSize = "38px";
    }
});
btn0.addEventListener("click", function () {
    const currentValue = dis.innerHTML;
    if (currentValue.length !== 16) {
        dis.innerHTML += "0";
    }
    if (currentValue.length > 10) {
        dis.style.fontSize = "30px";
    } else {
        dis.style.fontSize = "38px";
    }
});
btnDot.addEventListener("click", function () {
    const currentValue = dis.innerHTML;
    if (!currentValue.includes(".")) {
        dis.innerHTML += ".";
    }
    if (!currentValue.length) {
        dis.innerHTML = "0.";
    }
});
btnClear.addEventListener("click", function () {
    const currentValue = dis.innerHTML;
    dis.innerHTML = "";
    calcType.value = "";
    firstNum.value = "";
});
const calcType = document.querySelector("#calcType");
const btnDevide = document.querySelector("#btnDevide");
const btnMultiply = document.querySelector("#btnMultiply");
const btnMinus = document.querySelector("#btnMinus");
const btnPlus = document.querySelector("#btnPlus");
const btnModulus = document.querySelector("#btnModulus");
const btnExpo = document.querySelector("#btnExpo");
const btnEqual = document.querySelector("#btnEqual");
const firstNum = document.querySelector("#firstNum");

btnDevide.addEventListener("click", function () {
    const currentValue = dis.innerHTML;
    firstNum.value = currentValue;
    if (currentValue) {
        calcType.value = "/";
        dis.innerHTML = "";
    }
});
btnMultiply.addEventListener("click", function () {
    const currentValue = dis.innerHTML;
    firstNum.value = currentValue;
    if (currentValue) {
        calcType.value = "x";
        dis.innerHTML = "";
    }
});
btnMinus.addEventListener("click", function () {
    const currentValue = dis.innerHTML;
    firstNum.value = currentValue;
    if (currentValue) {
        calcType.value = "-";
        dis.innerHTML = "";
    }
});
btnPlus.addEventListener("click", function () {
    const currentValue = dis.innerHTML;
    firstNum.value = currentValue;
    if (currentValue) {
        calcType.value = "+";
        dis.innerHTML = "";
    }
});
btnModulus.addEventListener("click", function () {
    const currentValue = dis.innerHTML;
    firstNum.value = currentValue;
    if (currentValue) {
        calcType.value = "%";
        dis.innerHTML = "";
    }
});
btnExpo.addEventListener("click", function () {
    const currentValue = dis.innerHTML;
    firstNum.value = currentValue;
    if (currentValue) {
        calcType.value = "**";
        dis.innerHTML = "";
    }
});
btnEqual.addEventListener("click", function (plus) {
    const firstNum = document.querySelector("#firstNum");
    const scndNum = document.querySelector(".display");
    if (calcType.value === "+") {
        let result = Number(firstNum.value) + Number(scndNum.innerHTML);
        dis.innerHTML = result % 1 === 0 ? result.toFixed(0) : result.toFixed(2);
        var jogfol = dis.innerHTML;
        if (jogfol.length > 20) {
            dis.innerHTML = "Error";
        }
    }
    if (calcType.value === "-") {
        let result = Number(firstNum.value) - Number(scndNum.innerHTML);
        dis.innerHTML = result % 1 === 0 ? result.toFixed(0) : result.toFixed(2);
        var biyogfol = dis.innerHTML;
        if (biyogfol.length > 20) {
            dis.innerHTML = "Error";
        }
    }
    if (calcType.value === "/") {
        let result = Number(firstNum.value) / Number(scndNum.innerHTML);
        dis.innerHTML = result % 1 === 0 ? result.toFixed(0) : result.toFixed(2);
        var vagfol = dis.innerHTML;
        if (vagfol.length > 20) {
            dis.innerHTML = "Error";
        }
    }
    if (calcType.value === "x") {
        let result = Number(firstNum.value) * Number(scndNum.innerHTML);
        dis.innerHTML = result % 1 === 0 ? result.toFixed(0) : result.toFixed(2);
        var gonfol = dis.innerHTML;
        if (gonfol.length > 20) {
            dis.innerHTML = "Error";
        }
    }
    if (calcType.value === "**") {
        let result = Number(firstNum.value) ** Number(scndNum.innerHTML);
        dis.innerHTML = result % 1 === 0 ? result.toFixed(0) : result.toFixed(2);
        var squar = dis.innerHTML;
        if (squar.length > 20) {
            dis.innerHTML = "Error";
        }
    }
    if (calcType.value === "%") {
        let result = Number(firstNum.value) % Number(scndNum.innerHTML);
        dis.innerHTML = result % 1 === 0 ? result.toFixed(0) : result.toFixed(2);
        var vagsesh = dis.innerHTML;
        if (vagsesh.length > 20) {
            dis.innerHTML = "Error";
        }
    }
    const currentValue = dis.innerHTML;
    if (currentValue.length > 10) {
        dis.style.fontSize = "30px";
    } else {
        dis.style.fontSize = "38px";
    }
    calcType.value = "";
    firstNum.value = "";
});

const btnDlt = document.querySelector("#btnDlt");
btnDlt.addEventListener("click", function () {
    const currentValue = dis.innerHTML;
    if (currentValue.length > 0) {
        const updateValue = currentValue.slice(0, -1);
        dis.innerHTML = updateValue;
    }
});

document.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        event.preventDefault();
        btnEqual.click();
    }
    if(event.key === "1"){
        event.preventDefault();
        btn1.click();
    }
    if(event.key === "2"){
        event.preventDefault();
        btn2.click();
    }
    if(event.key === "3"){
        event.preventDefault();
        btn3.click();
    }
    if(event.key === "4"){
        event.preventDefault();
        btn4.click();
    }
    if(event.key === "5"){
        event.preventDefault();
        btn5.click();
    }
    if(event.key === "6"){
        event.preventDefault();
        btn6.click();
    }
    if(event.key === "7"){
        event.preventDefault();
        btn7.click();
    }
    if(event.key === "8"){
        event.preventDefault();
        btn8.click();
    }
    if(event.key === "9"){
        event.preventDefault();
        btn9.click();
    }
    if(event.key === "0"){
        event.preventDefault();
        btn0.click();
    }
    if(event.key === "+"){
        event.preventDefault();
        btnPlus.click();
    }
    if(event.key === "-"){
        event.preventDefault();
        btnMinus.click();
    }
    if(event.key === "/"){
        event.preventDefault();
        btnDevide.click();
    }
    if(event.key === "*"){
        event.preventDefault();
        btnMultiply.click();
    }
    if(event.key === '.'){
        event.preventDefault();
        btnDot.click();
    }
    if(event.key === '%'){
        event.preventDefault();
        btnModulus.click();
    }
    
   
});


document.addEventListener("keydown", function(event){
    if(event.key === "Backspace"){
        event.preventDefault();
        btnDlt.click();
    }
    if(event.key === "Escape"){
        event.preventDefault();
        btnClear.click();
    }
    if(event.key === "Delete"){
        event.preventDefault();
        btnClear.click();
    }

    if(event.key === "*" && event.shiftKey){
        event.preventDefault();
        btnExpo.click();
    }
});

        //document.quyerySelectorAll("button").style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

       // setTimeout(function() {
        //  btnExpo.style.background = ""; 
      //  },150);
