<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>.md en .html</title>
    <link rel="stylesheet" type="text/css" href="html_css_exercices.css">
</head>

	<body>
		
		<section>
			<!-- Début de ma page -->
			<h1>Sommaire</h1>
			<hr>
			<h2>Principes de base</h2>
			<hr>
			<ul>
				<li>
					On travaile <strong><em>toujours</em></strong> 
					dans un <strong>raçine</strong> 
					répertoire qui se nomme <strong>htdocs/</strong>
					<strong><em>,et</em></strong>
					qui se situe dans votre explorateur de fichiers ici : _c/:xampp
				</li>
			</ul>
			<a href="#exo1">Exercice 1</a> <br><br>
			<a href="#exo2">Exercice 2</a> <br><br>
			<a href="#exo3">Exercice 3</a> <br><br>
			<a href="#exo4">Exercice 4</a> <br><br>
			<hr>

			<!-- Début exercie 1 -->
			<h3 id="exo1">Exo 1</h3>
			<p>Produire un document en html de ce que vous avez compris sur le cours de la journée d'hier sur l'introduction au langage HTML :</p>
			<!-- Liste non ordonée -->
			<ul>
				<li>qu’est-ce que le html,</li>
				<li>ce que vous en déduisez et ce que vous comprenez de son fonctionnement</li>
			</ul>
			<h5>Pour cela :</h5>

			<!-- Liste ordonée -->
			<ol>
				<li>Créer un répertoire EXOS dans votre dossier en local HTML-CSS.</li>
				<li>Éffectuer une mise à jour (ou MAJ) en ligne sur votre répertoire GitHub en fin de journée afin d’avoir une trace avec le dossier correspondant.</li>
			</ol>
			<!-- Fin exercice 1 -->

			<!-- Début exercice 2 -->
			<hr>
			<h3 id="exo2">Exo 2</h3>
			<p>Réaliser un fichier HTML qui aura cette apparence :</p>
			<p>Bonjour, bonne année <strong>2017</strong>, bonne santé et surtout  : <em>Meilleurs voeux !</em> </p>
			<hr>
			<!-- Fin exercice 2 -->


			<!-- Début exercice 3 -->
			<h3 id="exo3">Exo 3</h3>
			<p>Réaliser un fichier HTML qui aura l’apparence suivante :</p>

			<h1>Mon repas de Noël </h1>
			<hr>
			<p>J'ai eu de la chance d'avoir un repas de Noël <em>exellent,</em>puisqu’il était composé des plats suivants :</p>

			<ul>
				<li>Du foie gras sur des toasts grillés <em>(ça j’adore)</em></li>
				<li>Du saumon rose</li>
				<li>De la pintade avec une purée</li>
				<li>Une bûche glacée</li>
			</ul>
			
			<p>Et le tout arrosé de <strong>Champagne !</strong></p>
			<p>Après, j'ai pu déballer tous mes cadeaux :</p>

			<ol>
				<li>Mamie Lulu : des <strong>DVD</strong></li>
				<li>Mamie Elisabeth : des <em>CD</em></li>
				<li>Tonton Hugues : des <strong><em>livres</em></strong></li>
			</ol>
			<!-- Fin exercice 3 -->
			<hr>

			<!-- Début exercice 4 -->
			<h3 id="exo4">Exo 4</h3>
			<p>Réaliser un fichier HTML nommé "exo_04.html" dans lequel il faudra obtenir l'affichage suivant avec le navigateur : <br><br>

			N’oubliez pas de lire aussi le contenu, il fait partie des informations de base que tout développeur intégrateur web maîtrise. Les liens sont accessibles dans Le repo GitHub de Ma6Tvacoder.</p>

			<h1>HTML - Exo 4</h1>
			<hr>
			<ol>
				<li>HTML: HyperText Markup Language<br><br>
					<ul>
						<li>c'est la structure de la page html où on organise les titres, paragraphes, listes, tableaux...</li>
					</ul><br><br>
				</li>
				<li>CSS: Cascading Style Sheet<br><br>
					<ul>
						<li>C'est la mise en forme, le design, l'apparence (les couleurs, les tailles, les positionnements sur la page)</li>
					</ul><br><br>
				</li>
				<li>Terminologie<br><br>
					<ul>
						<li>Eléments : ils définissent la structure et le contenu des objets au sein d'une page. Les plus couramment utilisés sont les niveaux de titre (h1 à h6) et les paragraphes (avec la balise p)</li><br>
						<li>Balises : elles sont reconnaissables car elles sont encadrées d'un chevron ouvrant et d'un chevron fermant. L'ouverture d'une balise détermine le début d'un élément. Sa fermeture détermine sa fin. Le contenu qui est inséré entre une balise ouvrante et fermante représente le contenu de cet élément. Par exemple, un lien html sera encadré d'une balise A ouvrante et fermante. Il existe aussi des balises auto-fermantes (aussi dites orphelines).</li><br>
						<li>Attributs : ce sont des propriétés utilisées pour fournir des informations complémentaires sur un élément. Les attributs les plus communs incluent l'attribut ID (qui identifie un élément), l'attribut CLASS (qui classifie un élément), l'attribut SRC (qui spécifie la source d'un contenu qui peut être imbriqué) et l'attribut HREF (qui contient un lien hypertexte vers une ressource liée). Les attributs sont définis au sein de la balise ouvrant après le nom de l'élément :</li><br>
					</ul>
					<a href="https://github.com"></a>
				</li>
				<li>Structure
					<ul>
						<li>un fichier HTML est un fichier de texte brut (non mis en forme) enregistré avec l'extension _.html_.</li>
						<li>tous les fichiers html ont une structure de base qui implique de déclarer les éléments suivants :</li>
					</ul>
					<div class="doc">
				   		&lt;!DOCTYPE html><br/>
				        &lt;html><br />
				        &lt;head></head><br />
				        &lt;body>				        	
				        &lt;/body><br />	
				        &lt;/html><br />
				     </div>
				    <ul>
				    	<li><strong>!DOCTYPE html</strong>informe le navigateur web que le document est de type html et qu'il s'agit (ici) de la dernière version du langage</li><br>
				    	<li>à l'intérieur de l'élément <em>html</em> la balise **head** identifie le début du document et inclut les métadonnées (informations sur la page). Le contenu à l'intérieur de la balise head n'est pas affiché par le navigateur puisqu'il donne des informations sur la page (- liens vers des fichiers externes, utilisation du langage html, titre de la page).</li><br>
				    	<li>tout ce qui s'affichera dans le navigateur est inclus à l'intérieur de la balise <strong>body</strong>.</li><br>
				    	<li>quand un élément est placé au sein d'un autre (ou imbriqué) il est important d'<strong>indenter</strong>cet élément en le décalant vers la droite à l'aide de la tabulation pour conserver une structure bien organisée et lisible pour tout le monde.</li><br>
				    	<li>les balises en paires comportent une balise ouvrante et une balise fermante indiquant pour chacune le début et la fin de l'élément correspondant.</li><br>
				    	<li>les balises auto-fermantes correspondent à des éléments ponctuels dans une page html, pas besoin de fournir une information de fin (insérer une image ou un lien par exemple). Les plus courantes :</li><br>
				    </ul>
				    <div class="doc">
				    	&lt;br/><br/>
				        &lt;img/><br />
				        &lt;meta/><br />
				        &lt;input/><br>				        	
				        &lt;/hr><br />	
				        &lt;/link><br />
				    </div>		     
				</li>
				<br>
				<li>Le W3C - La validation du code</li>							
			</ol>
			<p>Le <strong>World Wide Web Consortium</strong>, abrégé par le sigle **W3C**, est un organisme de standardisation à but non lucratif, fondé en octobre 1994 chargé de promouvoir la compatibilité des technologies du <a href="https://fr.wikipedia.org/wiki/World_Wide_Web"> World Wide Web</a> telles que <a href="https://fr.wikipedia.org/wiki/World_Wide_Web"> HTML5 </a>, <a href="https://fr.wikipedia.org/wiki/HTML5"> HTML</a>, <a href="https://fr.wikipedia.org/wiki/Hypertext_Markup_Language"> CSS </a>, <a href="https://fr.wikipedia.org/wiki/Portable_Network_Graphics"> PNG </a>, <a href="https://fr.wikipedia.org/wiki/Portable_Network_Graphics">SVG</a> </p>
			<p><a href="http://www.w3.org">W3C ou le World Wide Web Consortiul</a>, est un organisme international qui développe des <a href="http://www.w3.org/standards/">standard </a>pour le Web afin que les gens puissent communiquer efficacement à travers Internet, autour de formats ouverts garantissant une meilleure interopérabilité (c'est-à-dire une meilleure compréhension des systèmes hétérogènes à travers des données et langages standardisés).
			</p>
			<p>Le consortium existe depuis 1994 et est dirigé par l'inventeur du Web, Tim Berners-Lee.</p>
			<p>Il est composé d'une équipe fixe et des membres (dont plusieurs centaines d'entreprises partenaires). Les membres délèguent des ingénieurs au sein du W3C et participent ainsi à l'élaboration des spécifications techniques pour les technologies du Web. De nombreux membres actifs font partie des équipes de développement des navigateurs (Microsoft, Mozilla, Apple, Opera, Google, etc).
			</p>

			<!-- Fin exercice 4 -->

		</section>
	</body>


    
</html>