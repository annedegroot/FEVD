var paars = document.querySelector('.purple');

var blauw = document.querySelector('.blue');

var groen =  document.querySelector('.green');

var rood = document.querySelector('.red');

var oranje =  document.querySelector('.orange');

var geel = document.querySelector('.yellow');

var paarseplaatjes = document.querySelector('.purple-images');

var blauweplaatjes = document.querySelector('.blue-images');

var groeneplaatjes = document.querySelector('.green-images');

var rodeplaatjes = document.querySelector('.red-images');

var oranjeplaatjes = document.querySelector('.orange-images');

var geleplaatjes = document.querySelector('.yellow-images');

var alles = document.querySelector('.all-images');


//BLAUWE KNOP

var blauweknop = function(){
    blauweplaatjes.classList.toggle('blauweknop');
    alles.classList.toggle('blauweknop');
}

blauw.addEventListener('click', blauweknop);



//PAARSE KNOP

var paarseknop = function() {
    paarseplaatjes.classList.toggle('paarseknop');
    blauweplaatjes.classList.toggle('paarseknop');
    groeneplaatjes.classList.toggle('paarseknop');
    rodeplaatjes.classList.toggle('paarseknop');
    oranjeplaatjes.classList.toggle('paarseknop');
    geleplaatjes.classList.toggle('paarseknop');
    alles.classList.toggle('paarseknop');
    paars.classList.toggle('paarseknop');

}

paars.addEventListener('click', paarseknop);




//GROENE KNOP

var groeneknop = function() {
    groeneplaatjes.classList.toggle('groeneknop');

    paarseplaatjes.classList.toggle('groeneknop');
    blauweplaatjes.classList.toggle('groeneknop');
    rodeplaatjes.classList.toggle('groeneknop');
    oranjeplaatjes.classList.toggle('groeneknop');
    geleplaatjes.classList.toggle('groeneknop');
    alles.classList.toggle('groeneknop');
}

groen.addEventListener('click', groeneknop);


//RODE KNOP

var rodeknop = function() {
    groeneplaatjes.classList.toggle('rodeknop');
    rodeplaatjes.classList.toggle('rodeknop');
    blauweplaatjes.classList.toggle('rodeknop');
    paarseplaatjes.classList.toggle('rodeknop');
    oranjeplaatjes.classList.toggle('rodeknop');
    geleplaatjes.classList.toggle('rodeknop');
    alles.classList.toggle('rodeknop');
}

rood.addEventListener('click', rodeknop);


//ORANJE KNOP

var oranjeknop = function(){
    rodeplaatjes.classList.toggle('oranjeknop');
    oranjeplaatjes.classList.toggle('oranjeknop');
    geleplaatjes.classList.toggle('oranjeknop');
    groeneplaatjes.classList.toggle('oranjeknop');
    paarseplaatjes.classList.toggle('oranjeknop');
    blauweplaatjes.classList.toggle('oranjeknop');
    alles.classList.toggle('oranjeknop');
}

oranje.addEventListener('click', oranjeknop);


//GELE KNOP

var geleknop = function(){
    oranjeplaatjes.classList.toggle('geleknop');
    geleplaatjes.classList.toggle('geleknop');
    rodeplaatjes.classList.toggle('geleknop');
    groeneplaatjes.classList.toggle('geleknop');
    paarseplaatjes.classList.toggle('geleknop');
    blauweplaatjes.classList.toggle('geleknop');
    alles.classList.toggle('geleknop');
}

geel.addEventListener('click', geleknop);

