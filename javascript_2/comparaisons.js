//alert("coucou");

// L'opérateur de comparaison == signifie 'égal à'
//il permet de vérifier que les VALEURS de 2 variables sont identiques 
var nb1 = 123;
var nb2 = "123";
console.log(nb1 == nb2); //retourne TRUE

// L'opérateur de comparaison == signifie ' strictement égal à'
//il permet de vérifier la VALEUR et le TYPE 
console.log(nb1 === nb2); // retourne FALSE

// L'opérateur de comparaison != signifie 'différent de... en VALEUR'
console.log(nb1 != nb2); // retourne FALSE

// L'opérateur de comparaison !== signifie 'différent de... en VALEUR et en TYPE'
console.log(nb1 !== nb2); // retourne TRUE


// EXERCICE
// J'arrive sur un espace sécurisé au moyen du prénom et de l'âge. Je dois saisir mon prénom et mon age pour etre authentifié sur le site (les infos sont en base de données, ici dans mes variables prenom et age)
// en cas d'échec une alerte m'informe du probleme. si tout va bien un message de bienvenue m'accueille.

// var prenom = "Momo";
// var age = 32;
// var mdp = prenom + age;
//    mdp=prompt("Veuillez entrez votre mot de passe:");

//    if(mdp == "Sonia"+ 27){
//        alert("Bienvenue");
//    }else{
//        alert("bye");
//    }

   var prenom, monAge;
   prenom ="Momo";
   monAge = 32;
   //1 -- Demander son prénom à l'utilisateur avec un prompt
   var prenomLogin = prompt("Quel est votre prénom ?");
   //2 -- Je vérifie si le prénom saisi (prenomLogin) correspond à celui en base de données (prenom)
   if(prenomLogin === prenom){
       //2a. si tout est ok, je continue la vérification avec l'âge
       //2a1. Demande a mon utilisateur son âge via un PROMPT

       var ageLogin = parseInt(prompt("votre age ?"));
       if (ageLogin === monAge){
           alert("bienvenue" + " " + prenomLogin)
       } else {
           //2a2. Si les Ages ne correspondent pas, je lance une ALERT.
        alert("Erreur d'âge");       
    }
   }else {
       //2b. Sinon les prénoms ne correspondent pas je lance une alert.
       alert("attention, prénom non reconnu");
   }


   var prenom, monAge;
   prenom = "Sandra";
   monAge = 999;
   mdp = "bibi";
 
   var prenomLogin = prompt("Quel est votre prénom ?");
   if ( prenomLogin === prenom){
       var ageLogin = parseInt(prompt("Votre âge ?"));
       if(ageLogin === monAge) {
           var mpdLogin = prompt("Le mot de passe ?");
           if(mpdLogin === mdp){
               alert("Bienvenue" + " " + prenomLogin);
           }else{
               alert("pb de mot de passe !");
           }
       }else{
           alert("Erreur d'âge");
       }
   }else{
       alert("Attention, Prénom non reconnu");
   }


   //// FIN ////
