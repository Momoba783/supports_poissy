# Javascript les bases.

## Où écrire notre code JavaScript?
On va pouvoir placer du code JavaScript à trois endroits différents :
Du JavaScript dans l’élément head d’une page HTML
Dans ce cas, il faudra placer le JavaScript à l’intérieur d’un élément script.
On placera généralement l’élément script à la fin de notre élément head.

```html
<Doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Les boucles</title>
    <script>
        alert("hello");
    </script>
</head>
<body>
```

Du JavaScript dans l’élément body d’une page HTML
Dans ce cas là également, nous utiliserons un élément script et préférerons le placer à la fin de notre page.

```html
<Doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Les boucles</title>
</head>
<body>
    <script>
        alert("hello");
    </script>
</body>
```
Notez que lorsqu’on écrit du JavaScript dans un fichier HTML, que ce soit dans l’élément head, le body ou les deux, on peut utiliser autant d’éléments script que l’on veut. Cependant, pour des raisons évidentes de performance et de clarté, on essaie souvent de placer tout notre code JavaScript dans un même élément script. Si vous choisissez d’écrire plusieurs scripts dans une même page HTML, ceux-ci serons lus linéairement, c’est-à-dire dans leur ordre d’écriture.

Finalement, on peut écrire notre code JavaScript dans un fichier séparé portant l’extension « .js ».
C’est très souvent la méthode recommandée dans le cas de gros projets car elle permet une meilleure maintenabilité du code grâce à la séparation des langages, et car on va pouvoir réutiliser un même code JavaScript dans plusieurs fichiers HTML.
Dans ce cas, nous allons devoir lier nos fichiers HTML et JavaScript en utilisant à nouveau un élément script et son attribut src.
En valeur de l’attribut src, nous allons indiquer le chemin relatif du fichier .js par rapport au fichier .html. Si nos deux fichiers sont dans le même dossier, par exemple, il suffira d’indiquer le nom du fichier JavaScript.

```html
<Doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Les boucles</title>
    <script src="script.js"></script>
</head>
```

## Synthaxe et commentaire

Au niveau de la syntaxe générale du JavaScript, retenez bien que chaque instruction en JavaScript doit être terminée par un point virgule.
Indenter en JavaScript
L’indentation correspond au fait de décaler certaines lignes de code par rapport à d’autres. Cela est généralement utilisé pour rendre son code plus lisible et donc plus simple à comprendre.
Pour savoir quand indenter, il suffit de penser en terme de hiérarchie comme on le faisait déjà en HTML.
Une bonne pratique est d'effectuer un retrait vers la droite équivalent à une tabulation à chaque fois qu'on écrit une nouvelle ligne de code à l'intérieur d'une instruction JavaScript. Nous aurons l'occasion d'illustrer cela plus tard.
Les commentaires en JavaScript
Comme pour l’immense majorité des langages de programmation, on va également pouvoir commenter en JavaScript.
Commenter, c’est laisser des messages ou des indications au sein de son code qui servent à expliquer le code en question.
Ces indications ne seront pas lues par le navigateur et seront donc invisibles pour les visiteurs (sauf s’ils affichent le code source de la page).
Commenter va donc servir aux développeurs à se repérer plus facilement dans un script, à le lire et à le comprendre plus vite.
Cela peut être utile à la fois pour vous même si vous travaillez sur des projets complexes ou pour d’autres développeurs si vous êtes amené à distribuer votre code un jour ou l’autre.
En JavaScript, il existe deux types de commentaires qui vont s’écrire différemment:
les commentaires mono-ligne

```js
// Je suis un commentaire mono-ligne
```

les commentaires multi-lignes.

```js
/*
je suis
un commentaire
multi-ligne
*/
```

Notez que la syntaxe des commentaires multi-lignes peut être utilisée pour écrire un commentaire mono-ligne. Vous pouvez donc vous contenter de n’utiliser que cette syntaxe.

## Les Variables
Une variable JavaScript est un conteneur servant à stocker temporairement une information, comme un nombre ou une chaîne de caractères (c’est-à-dire un texte) par exemple. Comme son nom l’indique, le propre d’une variable est de pouvoir varier, c’est-à-dire de pouvoir stocker différentes valeurs dans le temps, en « écrasant » sa valeur précédente. En JavaScript, on déclare une variable avec le mot clef « var » suivi du nom de notre variable. Chaque nouvelle variable doit avoir un nom unique qu’on appelle également en anglais « identifier ».

Le nom des variables en JavaScript
On doit observer différentes règles lorsque l’on nomme une variable en JavaScript :

    - Le nom des variables doit commencer par une lettre ;
    - Le nom ne peut contenir que des lettres (non accentuées), des chiffres ou les signes « _ » et « $ » ;
    -Le nom des variables est sensible à la casse (« a » est différent de « A ») ;
    -Le JavaScript possède des mots « réservés » qu’on ne peut utiliser pour créer une variable. Par exemple, le mot « var » est un mot réservé.

Déclarer une variable en JavaScript
Il existe différentes façons de déclarer une variable en JavaScript. On va pouvoir:

```js
// Déclarer une variable et lui assigner une valeur immédiatement ;
var x = 25;
// Déclarer une variable sans lui assigner de valeur et lui assigner une valeur plus tard ;
var y;
y = "toto";
// Déclarer plusieurs variables en même temps.
var z = 1, a = true, b = "sam";
```

Deux remarques importantes : les types de valeurs et le signe « = »
Revenons au code ci-dessus afin de faire deux remarques essentielles pour la suite et pour votre compréhension du JavaScript. La première concerne les valeurs stockées par les variables. Vous pouvez remarquer que selon le type de valeur stockée (texte, nombre ou booléen), nous allons déclarer nos variables de façon sensiblement différente (utilisation ou non de guillemets ou d’apostrophes).

La deuxième remarque concerne le signe « = » (signe égal).
Faites très attention à la signification de ce signe en JavaScript et en programmation en général, car ce n’est pas le égal mathématique que vous connaissez. En effet, en JavaScript, le signe égal est un opérateur d'affectation et non pas d’égalité. Cela veut dire que ce signe va nous servir à affecter (ou assigner) une valeur à une variable, mais non pas que la variable est égale à sa valeur. Ainsi, on va pouvoir affecter différentes valeurs à une même variable dans le temps, chose qu’il est strictement impossible de faire avec un égal mathématique.

## Les types de valeurs

Les types de valeurs des variables
Les variables en JavaScript peuvent stocker différents types de valeurs.
Par simplification, on parlera souvent (à tort) de « types de variables » au lieu de parler de « types de valeurs stockées par les variables ».
Les types de valeurs vont avoir une influence sur notre code, puisqu’on ne stockera pas de la même façon un chiffre ou une chaîne de caractères (un texte) par exemple dans une variable.
Nous ne pourrons pas non plus effectuer les mêmes opérations sur les variables selon le type de valeurs qu’elles stockent.
Dans cette partie, nous allons faire un tour d’horizon des types de valeurs les plus courants que peuvent stocker nos variables en JavaScript.

- Le type de valeurs Number
    Le type de valeurs Number va représenter tout nombre ou chiffre, qu’il soit positif, négatif, entier ou à virgule.
    Pour affecter une valeur de type Number à une variable, on n’utilise ni guillemet ni apostrophe.
    Faites attention : lorsque nous codons nous utilisons toujours des notations anglo-saxonnes, ce qui signifie qu’il faut remplacer nos virgules par des points pour les nombres décimaux.

```js
var t = 10;
var f = 1.2;
var h = -6;
```

- Le type de valeurs String
    Le type de valeurs String va représenter les chaînes de caractères, c’est-à-dire les textes.
    Si l’on veut stocker une chaîne de caractères dans une variable, il faut entourer notre chaîne par des apostrophes ou des guillemets.
    Ce sont justement ces apostrophes ou guillemets qui vont indiquer au JavaScript que l’on stocke une valeur de type String.

```js
var r = 'sam';
var d = "qwe";
```

Au niveau des apostrophes / guillemets, vous pouvez choisir les uns ou les autres selon votre préférence. Cependant, si la valeur stockée contient elle même des apostrophes ou des guillemets, il faudra les échapper au moyen d’un antislash selon ce que vous aurez choisi pour entourer la valeur comme ceci:

```js
var q = "Je vis dans le \"92\"";
var u = 'L\'école de ma ville';
```

Une nouvelle fois, comprenez bien que c’est le fait de mettre des guillemets ou des apostrophes qui va faire qu’une valeur va être considérée comme une valeur de type String. Ainsi, même un nombre sera considéré comme étant de type String, c’est-à-dire comme une chaîne de caractères si on l’entoure de guillemets ou d’apostrophes. Faites bien attention à cela, car ça va avoir une grande influence sur les manipulations que l’on va pouvoir faire sur telle ou telle variable !

- Le type de valeurs Boolean
    Une variable en JavaScript peut encore stocker une valer de type Boolean, c’est-à-dire un booléen. Un booléen, en algèbre, est une valeur binaire (soit 0, soit 1). En informatique, un booléen va être soit la valeur true (vrai), soit la valeur false (faux).
    Ce type de valeur peut sembler plus compliqué à appréhender à première vue. Pas d’inquiétude, nous allons souvent l’utiliser par la suite car il va nous être très utile pour effectuer des tests et vérifier si une condition est vérifiée (true) ou non (false).
    Une nouvelle fois, faites bien attention : pour qu’une variable stocke bien un booléen, il faut lui faire stocker la valeur true ou false, sans guillemets ou apostrophes.
    Si vous rajoutez des guillemets ou des apostrophes, la variables stockera alors la chaîne de caractères true ou la chaîne de caractères false.

- Autres valeurs stockées en JavaScript
    Les variables en JavaScript peuvent stocker bien d’autres valeurs n'étant pas de type String, Number ou Boolean. Parmi les autres valeurs remarquables, on peut citer la valeur « null », qui correspond à la non connaissance à priori de la valeur ainsi que la valeur « undefined » qui correspond au fait de ne pas avoir défini de valeur pour notre variable. Une variable peut encore contenir la valeur « NaN » qui signifie « Not a Number » (« n’est pas un nombre » en Français).

```js
var n = null;
var u = undefined;
var nan = NaN;
```

- Changer le type d’une valeur stockée dans une variable
    Notez que vous pouvez tout à fait affecter une nouvelle valeur d’un autre type à une variable JavaScript. La nouvelle valeur écrasera l’ancienne, tout simplement.

```js
var x = 4;
x = "quatre";
```

- Tester le type de valeur d’une variable
    Pour tester le type de la valeur que contient une variable, on utilise généralement la fonction typeof(). Nous étudierons les fonctions en détail plus tard dans ce cours.
    Attention cependant, cette fonction renvoie parfois des résultats contestables sur certaines valeurs.
    Voyons immédiatement un exemple d’utilisation de typeof() ensemble. Pour afficher le résultat de typeof(), nous allons l’utiliser avec une instruction alert().
    Le script ci-dessous affichera tous les résultats au sein d’une même instruction alert(). Pour faire cela, j’utilise ce qu’on appelle la concaténation (avec les « + ») et la notation \n qui sert à créer un retour à la ligne en JavaScript.

```js
var text = "Bonjour";
alert(typeof(text));