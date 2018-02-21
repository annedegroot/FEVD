var paars = document.querySelector('.purple');

var blauweplaatjes = document.querySelector('.blue-images');

var paarseplaatjes = document.querySelector('.purple-images');


var paarseknop = function(event) {
    blauweplaatjes.classList.toggle('paarseknop')
    paarseplaatjes.classList.toggle('paarseknop')
}

paars.addEventListener('click', paarseknop);



