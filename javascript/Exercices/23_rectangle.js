'use strict'; // Mode strict du JavaScript
/* en mode 'USE STRICT' vous ne pouvez pas utiliser des variables non déclarées.

/*********1 - VARIABLES**********/

// Recherche du bouton et du rectangle dans l'arbre DOM.

var bouton = document.getElementById('toggle-rectangle');
var rectangle = document.querySelector('.rectangle');

/***********2 - FONCTIONS*********/

/*1.fonction au click sur le bouton*/

/*La methode .toggle() va ajouter ou supprimer la class CSS (tel un interrupteur).*/

function surClicBouton() {
    rectangle.classList.toggle('hide');
}

/*2. fonction au double clic sur le rectangle */

function auDoubleClicRectangle() {
    rectangle.classList.toggle('good');
}

/*3. A l'entrée du survol du rectangle */
// La méthode .add() va ajouter la class CSS.

function auSurvolSourisRectangle() {
    rectangle.classList.add('important');
}

/*4. A la sortie du survol de la souris */
// La methode .remove() va ajouter la class CSS.

function aSortieSourisRectangle() {
    rectangle.classList.remove('good');
    rectangle.classList.remove('important');
}

/***************3 - ECOUTEUR D'EVENEMENT************/
/**************1er parametre: l'evenement***********/
/*******2nd parametre: la fonction à executer*******/


/*1. Installation d'un gestionnaire d'évènement au clic sur le bouton*/

bouton.addEventListener('click', surClicBouton);

/*2. Installation d'un gestionnaire d'evenement au doucle clic sur le rectangle */

rectangle.addEventListener('dblclick', auDoubleClicRectangle);

/*3. Installation d'un gestionnaire d'évènement au survol sur le rectangle*/

rectangle.addEventListener('mouseover', auSurvolSourisRectangle);

 /*4. Installation d'un gestionnaire d'évènement à la sortie du survol de la souris */

 rectangle.addEventListener('mouseout', aSortieSourisRectangle);