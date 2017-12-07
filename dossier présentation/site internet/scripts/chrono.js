var Affiche=document.querySelector(".chrono");

function Rebours() {

var date1 = new Date();

var date2 = new Date ("Nov 24 00:00:00 2017");

var sec = (date2 - date1) / 1000;

var n = 24 * 3600;

if (sec > 0) {

j = Math.floor (sec / n);

h = Math.floor ((sec - (j * n)) / 3600);

mn = Math.floor ((sec - ((j * n + h * 3600))) / 60);

sec = Math.floor (sec - ((j * n + h * 3600 + mn * 60)));

Affiche.innerHTML =  j +"j "+ h +" : "+ mn +" : "+ sec;

window.status = "Temps restant : " + j +" j "+ h +" h "+ mn +" min "+ sec + " s ";

}

tRebours=setTimeout ("Rebours();", 1000);

}

Rebours();

