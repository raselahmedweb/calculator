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
        btnEqual.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
          btnEqual.style.background = ""; 
        },150);
    }
    if(event.key === "1"){
        event.preventDefault();
        btn1.click();
        btn1.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
          btn1.style.background = ""; 
        },150);
    }
    if(event.key === "2"){
        event.preventDefault();
        btn2.click();
        btn2.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
          btn2.style.background = ""; 
        },150);
    }
    if(event.key === "3"){
        event.preventDefault();
        btn3.click();
        btn3.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
          btn3.style.background = ""; 
        },150);
    }
    if(event.key === "4"){
        event.preventDefault();
        btn4.click();
        btn4.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
          btn4.style.background = ""; 
        },150);
    }
    if(event.key === "5"){
        event.preventDefault();
        btn5.click();
        btn5.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
          btn5.style.background = ""; 
        },150);
    }
    if(event.key === "6"){
        event.preventDefault();
        btn6.click();
        btn6.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
          btn6.style.background = ""; 
        },150);
    }
    if(event.key === "7"){
        event.preventDefault();
        btn7.click();
        btn7.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
          btn7.style.background = ""; 
        },150);
    }
    if(event.key === "8"){
        event.preventDefault();
        btn8.click();
        btn8.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
          btn8.style.background = ""; 
        },150);
    }
    if(event.key === "9"){
        event.preventDefault();
        btn9.click();
        btn9.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
          btn9.style.background = ""; 
        },150);
    }
    if(event.key === "0"){
        event.preventDefault();
        btn0.click();
        btn0.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
          btn0.style.background = ""; 
        },150);
    }
    if(event.key === "+"){
        event.preventDefault();
        btnPlus.click();
        btnPlus.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
          btnPlus.style.background = ""; 
        },150);
    }
    if(event.key === "-"){
        event.preventDefault();
        btnMinus.click();
        btnMinus.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
            btnMinus.style.background = ""; 
        },150);
    }
    if(event.key === "/"){
        event.preventDefault();
        btnDevide.click();
        btnDevide.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
            btnDevide.style.background = ""; 
        },150);
    }
    if(event.key === "*"){
        event.preventDefault();
        btnMultiply.click();
        btnMultiply.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
          btnMultiply.style.background = ""; 
        },150);
    }
    if(event.key === '.'){
        event.preventDefault();
        btnDot.click();
        btnDot.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
          btnDot.style.background = ""; 
        },150);
    }
    if(event.key === '%'){
        event.preventDefault();
        btnModulus.click();
        btnModulus.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
          btnModulus.style.background = ""; 
        },150);
    }
    
   
});


document.addEventListener("keydown", function(event){
    if(event.key === "Backspace"){
        event.preventDefault();
        btnDlt.click();
        btnDlt.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
          btnDlt.style.background = ""; 
        },150);
    }
    if(event.key === "Escape"){
        event.preventDefault();
        btnClear.click();
        btnClear.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
          btnClear.style.background = ""; 
        },150);
    }
    if(event.key === "Delete"){
        event.preventDefault();
        btnClear.click();
        btnClear.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
          btnClear.style.background = ""; 
        },150);
    }

    if(event.key === "*" && event.shiftKey){
        event.preventDefault();
        btnExpo.click();
        btnExpo.style.background = "linear-gradient(to bottom, rgb(196, 152, 196), rgb(179, 122, 133))";

        setTimeout(function() {
          btnExpo.style.background = ""; 
        },150);
    }
});




/*






const sliderContainer = document.querySelector(".sliderImage");
const imageSlider = document.querySelector(".images");

let position = 0;

function slideImage() {
    position -= 400; 

    if (position < -((imageSlider.children.length - 1) * 400)) {
      position = 0;
    }

    imageSlider.style.transform = translateX(${position}px);
  }

  setInterval(slideImage, 3000);

  clearInterval(slideImage, 5000) */