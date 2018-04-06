var section = document.querySelector('.import-movies');

var requestURL = 'http://dennistel.nl/movies';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.addEventListener('load', function () {
    console.log("request  load: ", request.response);
    var loadMovies = request.response;
    showMovies(loadMovies);
});



function showMovies(jsonObj) {
    var allefilms = jsonObj;

    console.log("hoeveel films: " + allefilms.length);
    for (var i = 0; i < allefilms.length; i++) {
        console.log("welke film?: " + i);
        console.log("title: " + allefilms[i].title);
        console.log("plot: " + allefilms[i].simple_plot);
        console.log("img: " + allefilms[i].cover);

        var myArticle = document.createElement('article');

        var titel = document.createElement('h1');
        var cover = document.createElement('img');
        var shorttext = document.createElement('p');


        var myDiv = document.createElement('div');

        var plot = document.createElement('p');



        cover.src = allefilms[i].cover;
        titel.textContent = allefilms[i].title;
        shorttext.textContent = allefilms[i].simple_plot;
        plot.textContent = allefilms[i].plot;

        myArticle.appendChild(cover);
        myArticle.appendChild(titel);
        myArticle.appendChild(shorttext);

        myDiv.appendChild(plot);


        section.appendChild(myArticle);
        section.appendChild(myDiv);







        }




    }

