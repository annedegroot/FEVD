



   function highlight2(elem) {
    var li = document.getElementsByTagName('li')
    for (i = 0; i < li.length; i++) {
        li[i].classList.remove('active2');
    }
    elem.classList.add('active2');
}


//Bron: https://stackoverflow.com/questions/26959219/javascript-onclick-addclass

var knop1 = document.querySelector('.button1');
var knop2 = document.querySelector('.button2');
var knop3 = document.querySelector('.button3');

var afb1 = document.querySelector('#img1');
var afb2 = document.querySelector('#img2');
var afb3 = document.querySelector('#img3');

var afbeeldingenslider = document.querySelector('.images');

var slide2 = function(){
    afb1.classList.toggle('slide2');
    afb2.classList.toggle('slide2');
    afb3.classList.toggle('slide2');

}

knop2.addEventListener('click', slide2);

var slide3 = function(){
    afb1.classList.toggle('slide3');
    afb2.classList.toggle('slide3');
    afb3.classList.toggle('slide3');

}

knop3.addEventListener('click', slide3);



var slide1 = function(){
    afb1.classList.toggle('slide1');
    afb2.classList.toggle('slide1');
    afb3.classList.toggle('slide1');

}

knop1.addEventListener('click', slide1);


