// alert("hi");

// On selectionne l'élement textarea et l'element p#counterBlock
var textarea = document.querySelector('#tweetContent');
var blockCount = document.getElementById('counterBlock');

function count(){
    //la fonction calcule la longueur de la chaine de caractère contenue dans le textarea
    var count= 140 - textarea.value.length;
    //et affiche cette valeur dans la balise p#counterBlock grace à innerHTML
    blockCount.innerHTML = count;

    //si le count descend sous 0 on ajoute la class red à la balise p#counterBlock
    if(count < 0){
        blockCount.classList.add("red");
    }
    else if(count >= 0){
        blockCount.classList.remove("red");
    }
    else {}
}

//On pose un écouteur d'évenement keyup sur le textarea
//on déclenche la fonction count quand l'évenement se produit et au chargement de la page
textarea.addEventListener('keyup', count);
count();+