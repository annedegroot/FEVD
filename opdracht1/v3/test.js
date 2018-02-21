var paars = document.querySelector('.purple');

var paarseplaatjes = document.querySelector('.purple-images');

var blauweplaatjes = document.querySelector('.blue-images');

var groeneplaatjes = document.querySelector('.green-images');

var rodeplaatjes = document.querySelector('.red-images')

var paarseknop = function() {
    paarseplaatjes.classList.toggle('paarseknop');
    blauweplaatjes.classList.toggle('paarseknop');
    groeneplaatjes.classList.toggle('paarseknop');
}

paars.addEventListener('click', paarseknop);

var groen =  document.querySelector('.green');



var groeneknop = function() {
    groeneplaatjes.classList.toggle('groeneknop');
    paarseplaatjes.classList.toggle('groeneknop')

}

groen.addEventListener('click', groeneknop);


var rood = document.querySelector('.red');

var rodeknop = function() {
    groeneplaatjes.classList.toggle('rodeknop');
    rodeplaatjes.classList.toggle('rodeknop');
}

rood.addEventListener('click', rodeknop);

