var knop1 = document.querySelector('.button1');
var knop2 = document.querySelector('.button2');
var knop3 = document.querySelector('.button3');

var afb1 = document.querySelector('#img1');
var afb2 = document.querySelector('#img2');
var afb3 = document.querySelector('#img3');


var right = document.querySelector('.right-button');
var left = document.querySelector('.left-button');


var counter = 1;

right.addEventListener('click', function () {
    //console.log("hallloooo daar ");
    counter++;
    console.log("right counter=" + counter)
    beweeg();
});

left.addEventListener('click', function () {
    //console.log("hallloooo daar ");
    counter--;
    console.log("left counter=" + counter)
    beweeg();

});

function beweeg() {
    if (counter == 1) {
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

    } else if (counter == 2) {

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

    } else if (counter == 3) {
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

    }
}

knop1.addEventListener('click', function () {
    //console.log("hallloooo daar ");
    counter = 1;
    beweeg();

});
knop2.addEventListener('click', function () {
    //console.log("hallloooo daar ");
    counter = 2;
    beweeg();


});
knop3.addEventListener('click', function () {
    //console.log("hallloooo daar ");
    counter = 3;
    beweeg();


});



var keypressright = function () {
    if (event.keyCode == 39) {
        counter++;
        beweeg();
    }
}

document.addEventListener('keydown', keypressright);


var keypressleft = function () {
    if (event.keyCode == 37) {
        counter--;
        beweeg();
    }
}

document.addEventListener('keydown', keypressleft);
