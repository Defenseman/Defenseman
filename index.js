//Accept user input--------------------------

let username;

document.getElementById('buttonSubmit').onclick = function (){
    username = document.getElementById('usernameInput').value;
    document.getElementById('myH3').textContent = `Hello dear ${username}`;
}

//Type conversion--------------------------

let x = "";
let y = "";
let z = "";

x = Boolean(x);
y = Boolean(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

//constance in JS--------------------------

const pi = 3.14159;
let radius;
let circumference;

document.getElementById("buttonSubmit_1").onclick = function (){
    radius = document.getElementById("inputRadius").value;
    radius = Number(radius);
    circumference = pi * 2 * radius;
    document.getElementById("my_H3").textContent = `Radius:  ${circumference} cm`;
}

//Counter program--------------------------

const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const mainText = document.getElementById("mainText");
let count = 0;

document.getElementById("increaseBtn").onclick = function (){
    count ++;
    document.getElementById("mainText").textContent = count;
}
document.getElementById("decreaseBtn").onclick = function (){
    count -= 1;
    document.getElementById("mainText").textContent = count;
}
document.getElementById("resetBtn").onclick = function (){
    count = 0;
    document.getElementById("mainText").textContent = count;
}

//Math.objects--------------------------

let g = -3.49;
let v = 99;
let b = 3.01;

//g = Math.round(g)
//v = Math.floor(v)
//b = Math.ceil(b)
//g = Math.trunc(g)

//v = Math.sqrt(v);
//b = Math.pow(g, b);

//b = Math.log(b)
//g = Math.tan(g);
//v = Math.sin(v);
//b = Math.cos(b);

//g = Math.abs(g);
//v = Math.sign(v)

//g = Math.min(g, v, b)
//g = Math.max(g, v, b)
//let min = Math.min(g, v, b)
//let max = Math.max(g, v, b)

//console.log(min, max, min, max);

//Random number generator--------------------------

const randomLabel1 = document.getElementById('randomLabel1')
const randomLabel2 = document.getElementById('randomLabel2')
const randomLabel3 = document.getElementById('randomLabel3')
const randomBtn = document.getElementById('randomBtn')
const min1 = 1;
const max1 = 6;
let randomNum1;
let randomNum2;
let randomNum3;

randomBtn.onclick = function () {
    randomNum1 =  Math.floor(Math.random() * max1) + min1;
    randomNum2 = Math.floor(Math.random() * max1) + min1;
    randomNum3 = Math.floor(Math.random() * max1) + min1;
    randomLabel1.textContent = randomNum1;
    randomLabel2.textContent = randomNum2;
    randomLabel3.textContent = randomNum3;
}

//If statement--------------------------

const inputOld = document.getElementById('inputOld');
const btnOld = document.getElementById('btnOld');
const resultMsg = document.getElementById('resultMsg');

let age;


btnOld.onclick = function () {
    age = inputOld.value;
    age = Number(age);
    if(age >= 100){
        resultMsg.textContent = `You are TOO OLD to enter this website`;
    }else if(age < 0){
        resultMsg.textContent = `You can't be below 0`;
    }else if(age >= 18){
        resultMsg.textContent = `You are old enough to enter this website`;
    }else if(age === 0){
        resultMsg.textContent = `You can't enter this website. You were just born`;
    }else {
        resultMsg.textContent = `You must be 18+ years old`;
    }
}

//Checked property--------------------------
    const checkboxInput = document.getElementById('checkboxInput');
    const idVisa = document.getElementById('idVisa');
    const idMastercard = document.getElementById('idMastercard');
    const idPaypal = document.getElementById('idPaypal');
    const submitCardsBtn = document.getElementById('submitCardsBtn');
    let resultOfCheckboxInput = document.getElementById('resultOfCheckboxInput');
    let resultOfRadioButtons = document.getElementById('resultOfRadioButtons');

    submitCardsBtn.onclick = function(){
        if(checkboxInput.checked) {
            resultOfCheckboxInput.textContent = `You are Subscribed!`;
        } else{
            resultOfCheckboxInput.textContent = `You are NOT Subscribed!`;
        }
        if(idVisa.checked) {
            resultOfRadioButtons.textContent = `Your paying method is VISA!`;
        }else if (idMastercard.checked) {
            resultOfRadioButtons.textContent = `Your paying method is MASTERCARD!`;
        }else if (idPaypal.checked) {
            resultOfRadioButtons.textContent = `Your paying method is PAYPAL!`;
        }else {
            resultOfRadioButtons.textContent = `You must select a payment type!`
        }
    }

//Ternary operator--------------------------
let age_1 = 17;
let access = age_1 >= 18 ? `You are entered` : `You are NOT old enough`;
console.log(access);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 23 : 0;
console.log(`Your total prise including discount: $${purchaseAmount - purchaseAmount * (discount / 100)}`);

//Switches--------------------------