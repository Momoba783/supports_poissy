//alert("chapo");

// LES BOUCLES

// -- La boucle FOR 

// for (3 arguments){
//     //code//
// }

/*
1.initialise un compteur à partir de combien je compte (par défaut le compteur est la variable "i")
2. la condition à vérifier qui doit donc être VRAIE (TRUE)
3. le 'pas' d'incrementation (combien j'ajoute à chaque tour, généralement 1 donc i++)
*/

for (var i = 1; i <= 10; i += 2){
    document.write("<p>Instruction éxecutée : " + i + "</p>");
}


// -- La boucle WHILE (tant que)
// très utilisée qd on ne connait pas le nombre de tours de la boucle à l'avance
var j = 1;
while (j <= 10){
    document.write("<hr/> <p>Instruction éxécutée : " + j + "</p>"); j++;
}


// 1000 euros sur mon compte, chaque fois j'ajoute 50 euros
// combien de temps pour arriver a 2000 euros

var monCompte = 1000;
var temps = 0;
while(monCompte < 2000){
    monCompte += 50;
    temps++;
}
document.write("<h3>Sous sur mon compte : " + monCompte + "</h3>");
document.write("<h3>Jusqu'à 2000€, il me faut : " + temps + " mois</h3>");


//avce la boucle FOR

var tps = 0;
for (var mesSous = 1000; mesSous < 2000; mesSous += 50) {
    document.write("<h3>Le mois suivant j'ai " + mesSous + "</h3>"); tps++;
}

document.write("<h3>Il aura fallu " + tps + " mois.</h3>");