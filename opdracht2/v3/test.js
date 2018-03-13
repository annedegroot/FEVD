var knop1 = document.querySelector('.button1');
var knop2 = document.querySelector('.button2');
var knop3 = document.querySelector('.button3');

var afb1 = document.querySelector('#img1');
var afb2 = document.querySelector('#img2');
var afb3 = document.querySelector('#img3');


var afbeeldingenslider = document.querySelector('.images');
/*
function highlight2(elem) {
    var li = document.getElementsByTagName('li')
    for (i = 0; i < li.length; i++) {
        li[i].classList.remove('active2');
    }
    elem.classList.add('active2');
}
*/

knop1.addEventListener('click',function(){
 //console.log("hallloooo daar ");
    knop1.classList.add("active2");
    knop2.classList.remove("active2");
    knop3.classList.remove("active2");

    afb1.classList.add("slide1");
    afb2.classList.add("slide1");
    afb3.classList.add("slide1");

    afb1.classList.remove("slide2");
    afb2.classList.remove("slide2");
    afb3.classList.remove("slide2");

    afb1.classList.remove("slide3");
    afb2.classList.remove("slide3");
    afb3.classList.remove("slide3");

});
knop2.addEventListener('click',function(){
 //console.log("hallloooo daar ");
    knop1.classList.remove("active2");
    knop2.classList.add("active2");
    knop3.classList.remove("active2");

    afb1.classList.remove("slide1");
    afb2.classList.remove("slide1");
    afb3.classList.remove("slide1");

    afb1.classList.add("slide2");
    afb2.classList.add("slide2");
    afb3.classList.add("slide2");

    afb1.classList.remove("slide3");
    afb2.classList.remove("slide3");
    afb3.classList.remove("slide3");


});
knop3.addEventListener('click',function(){
 //console.log("hallloooo daar ");
    knop1.classList.remove("active2");
    knop2.classList.remove("active2");
    knop3.classList.add("active2");

    afb1.classList.remove("slide1");
    afb2.classList.remove("slide1");
    afb3.classList.remove("slide1");

    afb1.classList.remove("slide2");
    afb2.classList.remove("slide2");
    afb3.classList.remove("slide2");

    afb1.classList.add("slide3");
    afb2.classList.add("slide3");
    afb3.classList.add("slide3");


});



var keypress1 = function () {
    if (event.keyCode == 39) {
        afb1.classList.toggle('keypress1');
        afb2.classList.toggle('keypress1');
        afb3.classList.toggle('keypress1');
    }
}

document.addEventListener('keydown', keypress1);


var keypress2 = function () {
    if (event.keyCode == 39) {
        afb1.classList.toggle('keypress2');
        afb2.classList.toggle('keypress2');
        afb3.classList.toggle('keypress2');
    }
}

document.addEventListener('keydown', keypress2);



