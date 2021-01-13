//First slide animation background transition ....
var tops = document.querySelectorAll('.top');
var bottoms = document.querySelectorAll('.bottom');
var i = .5;
var j = 1;
if (tops && bottoms) {
    tops.forEach(element => {
        element.style.animation = "topit 1s ease  " + i + "s forwards";
        i = i + .5;
    });
    bottoms.forEach(element => {
        element.style.animation = "bottomit ease .5s " + j + "s forwards";
        j = j + .5;
    });
}


var Linguistic = document.querySelector(".con-TY .ling");
var Logical = document.querySelector(".con-TY .log");

const s4 = document.getElementById("s4");
const s10 = document.getElementById("s10");

s4.addEventListener("keyup",e => {
    if (e.isComposing || e.keyCode === 49 && Linguistic.classList.contains('not')) {
        Linguistic.classList.remove("not");
        Linguistic.style.transform = "translateX(0)";
        Linguistic.style.opacity = "1";
    }
    if (e.isComposing || e.keyCode === 70 && document.querySelector(".item.n")) {
        document.querySelector(".item.n").style.transform = "translateX(0)"
        document.querySelector(".item.n").style.opacity = "1"
        document.querySelector(".item.n").classList.remove("n")
    }

    if (e.isComposing || e.keyCode === 50 && Logical.classList.contains("not")) {
        Logical.classList.remove("not");
        Logical.style.transform = "translateX(0)";
        Logical.style.opacity = "1";
    }
    if (e.isComposing || e.keyCode === 70 && document.querySelector(".item.b") && !Logical.classList.contains("not")) {
        document.querySelector(".item.b").style.transform = "translateX(0)"
        document.querySelector(".item.b").style.opacity = "1"
        document.querySelector(".item.b").classList.remove("b")
    }
})
s10.addEventListener("keyup",e => {
    if (e.isComposing || e.keyCode === 13 && document.querySelector(".fg.nt90")) {
        document.querySelector(".fg.nt90").style.opacity = "1";
        document.querySelector(".fg.nt90").classList.remove("nt90")
    }
})



