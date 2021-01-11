//First slide animation background transition ....
var tops = document.querySelectorAll('.top');
var bottoms = document.querySelectorAll('.bottom');
var i = .5;
var j = 1;
if(tops && bottoms ) {
    tops.forEach(element => {
        element.style.animation = "topit 1s ease  " + i + "s forwards";
        i = i + .5;
    });
    bottoms.forEach(element => {
        element.style.animation = "bottomit ease .5s " + j + "s forwards";
        j = j + .5;
    });
}
