let changing = document.getElementById("c1");
let changingc2 = document.getElementById ("c2");
let changingc3 = document.getElementById ( "c3");

function changingColor(){
    console.log("running");
    changing.style.background = "red";
    changingc2.style.background = "grey";
    changingc3.style.background = "grey";
}
function changingColor1(){
    changing.style.background = "grey";
    changingc2.style.background = "yellow";
    changingc3.style.background = "grey";
}
function changingColor2(){
    changing.style.background = "grey";
    changingc2.style.background = "grey";
    changingc3.style.background = "green";
}