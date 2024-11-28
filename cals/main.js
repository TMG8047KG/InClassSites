
function one(){
    let input = document.getElementById("num").value;
    input += 1;
    update(input);
}
function two(){
    let input = document.getElementById("num").value;
    input += 2;
    update(input);
}
function three(){
    let input = document.getElementById("num").value;
    input += 3;
    update(input);
}
function four(){
    let input = document.getElementById("num").value;
    input += 4;
    update(input);
}
function five(){
    let input = document.getElementById("num").value;
    input += 5;
    update(input);
}
function six(){
    let input = document.getElementById("num").value;
    input += 6;
    update(input);
}
function seven(){
    let input = document.getElementById("num").value;
    input += 7;
    update(input);
}
function eight(){
    let input = document.getElementById("num").value;
    input += 8;
    update(input);
}
function nine(){
    let input = document.getElementById("num").value;
    input += 9;
    update(input);
}
function zero(){
    let input = document.getElementById("num").value;
    input += 0;
    update(input);
}

let type = "none";
let num = 0;

function plus(){
    let input = document.getElementById("num").value;
    num = num + parseInt(input);
    type = "plus"
    input = "";
    update(input);
}

function minus(){
    let input = document.getElementById("num").value;
    num = parseInt(input) - num ;
    type = "minus"
    input = "";
    update(input);
}

function multi(){
    let input = document.getElementById("num").value;
    num = num * parseInt(input);
    type = "multi"
    input = "";
    update(input);
}

function divide(){
    let input = document.getElementById("num").value;
    num = parseInt(input) / num;
    type = "divide"
    input = "";
    update(input);
}

function deleteFromExistence(){
    document.getElementById("num").value = "";
    num=0;
    type="none";
}

function update(value){
    document.getElementById("num").value = value;
}

function equal(){
    let value = parseInt(document.getElementById("num").value);
    switch(type){
        case "plus": document.getElementById("num").value = value+num;
        case "minus": document.getElementById("num").value = num-value;
        case "multi": document.getElementById("num").value = num*value;
        case "divide": document.getElementById("num").value = num/value;
        // case "none": document.getElementById("num").value = num;
    }
    type = "none";
    num = 0;
}

