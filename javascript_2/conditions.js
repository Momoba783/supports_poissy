// STRUCTURE DE BASE IF

if(true) {/*par défaut la condition à verifier le IF vérifie si elle est vraie*/
    /*..... VOTRE CONDITION .....*/
}

var nb1 = 10;

if(nb1 < 50){
    console.log("nb1 est bien inférieur à 50");
}

if (true){
    /* ... code si VRAI ... */
} else {
    /* ... code si FAUX ... */
}

if (nb1 > 50){
    console.log("nb1 est bien supérieur à 50");
} else {
    console.log("nb1 n'est pas supérieur à 50");
}

/* EXERCICE
On utilise le IF pour vérifier l'âge de l'internaute.
=> s'il est majeur je lui souhaite la bienvenue 
=> s'il est mineur je [1] lui signale et [2] le revoie vers un autre site*/

var MajoriteFR = 18;

var age = parseInt(prompt("Indiquez votre âge"));

if (MajoriteFR >= 18){
   alert("bienvenue l'ami !");
} 

else {
    alert("Eh c'est pas de ton âge ! va plutot ici ");
    document.location.href = "http://www.lamaisondemickey.fr"

}