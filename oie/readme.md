#### Noms et Prénoms : ATCHEDJI Churchill et GUENNINECHE Amel

###### Date de création du projet : 08/11/2020

Ce TP(Travaux Pratiques) a but la réalisation du __*jeu de l'oie*__.

L'objectif visé est de se familiariser aves les notions de collections, de polymorphisme,etc en POO.

Une brève description des règles du jeu est repris ci-dessus : 

*Le jeu se présente sous la forme d’un plateau constitué de cases numérotées à partir de 1, plus une position de départ,qui peut être considérée comme une 64ème case numérotée 0.  Pour gagner et finir la partie, il faut qu’un joueur arrive exactement sur la dernière case. Les différents joueurs, en nombre quelconque, jouent chacun leur tour.  Selon la case où il se trouve un joueur a ou non le droit de quitter cette case.  Si ce n’est pas le cas, il passe son tour.  S’il est autorisé à jouer, il lance 2 dés à 6 faces et avance son pion d’un nombre de cases  ́egal à la somme des dés pour arriver sur sa case destination.  Si son lancer de dés lui fait « dépasser » la dernière case, il revient en arrière du nombre de cases en excès.  Par exemple,un joueur situé sur la case 57 fait 9 aux dés, il avance jusque la case 63 en dépensant 6 points et recule ensuite des 3 points restants pour arriver sur la case 60.*

Le jeu a été conçu de manière à permettre a l'utilisateur de personnaliser son plateau de jeu qui dans le cas classique contient 64 cases.

Le jeu se trouve dans le dossier __*oie*__ consititué des sous-dossiers : src, classes, test et docs et d'autres fichiers fournis.

Dans le dossier src on dispose de deux paquetages *game* et *util* dont le contenu est présenté via la commande *tree* depuis un terminal.

```sh
acm@LAPTOP-ATCHE:/mnt/d/myfiles/cours_licence_2/POO/fichiers_tp/tp_local/oie/src$ tree
.
├── game
│   ├── Game.java    
│   ├── GameMain.java
│   └── Player.java
└── util
    ├── boards
    │   ├── Board.java
    │   └── ClassicalBoard.java
    └── cells
        ├── Cell.java
        ├── DepartCell.java
        ├── GooseCell.java
        ├── TeleportingCell.java
        ├── TrapCell.java
        └── WaitCell.java
```

La classe main(principale) nommée *GameMain* permet de jouer le jeu en lui même en entrant le nombre de joueurs.

Comme c'est le cas déjà pour les TP précédents on vérifiera les indispensables à la compilation, à l'exécution des fichiers *.java* et à la génération de la documentation du TP.

Tout d'abord il faut récupérer le TP via git :

> * depuis votre poste de travail placer vous dans un répertoire courant,
> * ouvrer votre terminal dans ce répertoire ou depuis votre terminal accéder à votre répertoire courant,
> * vérifier si vous disposez du logiciel de gestion de version git en entrant dans le terminal la commande : __*git --version*__ ,une version de git devrait donc s'afficher si c'est le cas, sinon se référer à ce __lien : [installer git](https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git)__ pour installer git sur votre machine afin de récupérer git,

> *aperçu:*
```sh
PS D:/myfiles/cours_licence_2/POO/fichiers_tp/tp_local/oie> git --version
git version 2.29.2.windows.3
``` 
 
> * récupérer ensuite le projet sur le dépôt distant via la commande : 
```sh
.../~ git clone git@gitlab-etu.fil.univ-lille1.fr:atchedji/atchedji-guennineche-poo.git
``` 
> pour cloner via *HTTPS* ou via la commande 
```sh
.../~ git clone git@gitlab-etu.fil.univ-lille1.fr:atchedji/atchedji-guennineche-poo.git
```
> pour cloner via *SSH*  *( se référer au __lien : [accéder en SSH à un depôt git](https://www.youtube.com/watch?v=qixAZdj-I4I)__ pour lier son gitlab à sa machine via SSH)*
> * placer vous ensuite dans le dossier *oie* via le terminal (cd atchedji-guennineche-poo/oie selon votre répertoire courant ).

***Vous avez la possibilité de générer la documentation du TP afin de prendre en main toutes les classes, paquetages et méthodes qui ont été utilisées ou construites pour la mise en œuvre.***

Depuis vote répertoire oie :
* vérifier que vous disposez de la version 8 de java ou d'une version ultérieure en exécutant :
```sh
.../oie> javac -version
```
*Voici un aperçu*
```sh
PS D:/myfiles/cours_licence_2/POO/fichiers_tp/atchedji-guennineche-poo/oie> javac -version
javac 1.8.0_261
```
**sinon** se référer au lien  __[oracle](https://www.oracle.com/java/technologies/javase-downloads.html)__ pour installer java sur votre système(version postérieure ou égale à 8)

* ensuite placez-vous dans le sous-répertoire /src (__*cd src*__) puis exécuter les commandes suivantes:
```sh
.../oie/src> javadoc -d ../docs -subpackages game
../oie/src> javadoc -d ../docs -subpackages util
```
Ainsi vous générez la documentation du TP.


* Vous pouvez consulter le contenu du sous-dossier */docs* dans le répertoire */oie* et particulièrement le fichier *index.html* que vous pouvrez ouvrir dans un navigateur pour consulter une documentation détaillée de chaque paqueatage du TP  ainsi  classes, méthodes et attributs utilisés.


__Ensuite il faudra compiler les classes du projet.__
Pour compiler tous les fichiers __.java__ du TP, placez-vous dans le répertoire */src* puis exécuter la commande suivante depuis votre terminal :
```sh
.../oie/src> javac game/*.java  util/boards/*.java  util/cells/*.java  -d ../classes
```

Pour seulement compiler le fichier *main* du TP, toujours depuis votre répertoire */src* exécuter la commande suivante depuis votre terminal : 
```sh
.../oie/src> javac game/GameMain.java -d ../classes
```

__Passons ensuite à l'exécution de la classe main du projet.__

Nous allons simuler une partie ou vous préciserez le nombre de joueurs de la partie.

Placez-vous dans le sous-dossier */classes* et éxécuter le programme avec la commande :
```sh
.../oie/classes> java game.GameMain nbrJoueur
```
**nbrJoueur** est un entier compris entre 1 et 26 (26 pour raisons de nommages des joueurs (cf fichier GameMain.java pour plus de précisions))

Voici une trace d'une partie entre trois joueurs lancée via la commande :
```sh
.../oie/classes> java game.GameMain 3 
```
```sh
A is in cell 0, A throws 4 and reaches cell 4   
B is in cell 0, B throws 2 and reaches cell 2
C is in cell 0, C throws 6 and reaches cell 6 (teleport to 12 )  and jumps to cell 12
A is in cell 4, A throws 8 and reaches cell 12   cell is busy, C is sent to cell 4
B is in cell 2, B throws 8 and reaches cell 10
C is in cell 4, C throws 7 and reaches cell 11
A is in cell 12, A throws 7 and reaches cell 19 cannot play
B is in cell 10, B throws 7 and reaches cell 17
C is in cell 11, C throws 5 and reaches cell 16
A is in cell 19, A cannot play
B is in cell 17, B throws 9 and reaches cell 26
C is in cell 16, C throws 6 and reaches cell 22
A is in cell 19, A cannot play
B is in cell 26, B throws 8 and reaches cell 34
C is in cell 22, C throws 8 and reaches cell 30
A is in cell 19, A throws 12 and reaches cell 31
B is in cell 34, B throws 4 and reaches cell 38
C is in cell 30, C throws 9 and reaches cell 39
A is in cell 31, A throws 7 and reaches cell 38
B is in cell 38, B throws 6 and reaches cell 44
C is in cell 39, C throws 7 and reaches cell 46
A is in cell 38, A throws 12 and reaches cell 50
B is in cell 44, B throws 6 and reaches cell 50   cell is busy, A is sent to cell 44
C is in cell 46, C throws 6 and reaches cell 52
A is in cell 44, A throws 9 and reaches cell 53
B is in cell 50, B throws 12 and reaches cell 62
C is in cell 52, C throws 4 and reaches cell 56
A is in cell 53, A throws 7 and reaches cell 60
B is in cell 62, B throws 8 and reaches cell 56
C is in cell 56, C throws 3 and reaches cell 59
A is in cell 60, A throws 8 and reaches cell 58 (teleport to 1 )  and jumps to cell 1
B is in cell 56, B throws 7 and reaches cell 63
B has won.
```

__Des tests sont fournis dans le projet (sous-dossier */test* ) afin de tester le code écrit et vérifier sa validité pour la réalisation du TP.__

__*Un test est réussi et donc passé avec succès par le code qu'il évalue, quand toutes les assertions qu'il contient sont vérifiées.*__
Cela reviendrait à avoir de manière graphique après l'exécution d'un fichier de test **une barre verte**.

Avant de pouvoir exécuter les tests correspondant à une classe __il faut compiler le fichier de cette classe dans le sous-dossier /src__ et ensuite il faut compiler le fichier de test depuis le répertoire racine */oie* en exécutant la commande :
```sh
.../oie> javac -classpath test4poo.jar test/*.java   
```
Pour exécuter à présent les tests, toujours depuis votre répertoire racine */oie*, exécuter la commande :
```sh
.../oie> java -jar test4poo.jar TestMethodsOfGame
```
Alors une fenêtre s'ouvre montrant une barre verte qui signifie que tous les tests ont été passés avec succès.


__Une archive java permet de regrouper les classes d'un programme pour une utilisation et une diffusion plus faciles. Une telle archive s'appelle jar (Java ARchive) et fonctionne sensiblement ou opère comme la commande tar.__

Pour créer une archive exécutable pour ce TP (jar exécutable) c'est à dire une archive où la méthode *main* GameMain est définie :
 placez-vous dans le sous-répertoire */classes* et éxécuter la commande :
```sh
../oie/classes> jar cvfm ../oie.jar ../manifest-oie game util 
```

* pour exécuter le programme à présent, placez-vous dans le répertoire racine (*/oie*) et exécuter la commande : 
```sh
.../oie> java -jar oie.jar nbrJoueur
```


Voici un aperçu des commandes à entrer :
```sh
../oie/classes> jar cvfm ../oie.jar ../manifest-oie game util 
../oie> java -jar oie.jar 2

A is in cell 0, A throws 6 and reaches cell 6 (teleport to 12 )  and jumps to cell 12  
B is in cell 0, B throws 12 and reaches cell 12   cell is busy, A is sent to cell 0
A is in cell 0, A throws 2 and reaches cell 2
B is in cell 12, B throws 10 and reaches cell 22
A is in cell 2, A throws 6 and reaches cell 8
B is in cell 22, B throws 8 and reaches cell 30
A is in cell 8, A throws 7 and reaches cell 15
B is in cell 30, B throws 7 and reaches cell 37
A is in cell 15, A throws 8 and reaches cell 23
B is in cell 37, B throws 6 and reaches cell 43
A is in cell 23, A throws 8 and reaches cell 31   
B is in cell 43, B throws 8 and reaches cell 51
A is in cell 31, A throws 6 and reaches cell 37
B is in cell 51, B throws 7 and reaches cell 58 (teleport to 1 )  and jumps to cell 1
A is in cell 37, A throws 3 and reaches cell 40
B is in cell 1, B throws 3 and reaches cell 4
A is in cell 40, A throws 8 and reaches cell 48
B is in cell 4, B throws 9 and reaches cell 13
A is in cell 48, A throws 10 and reaches cell 58 (teleport to 1 )  and jumps to cell 1
B is in cell 13, B throws 4 and reaches cell 17
A is in cell 1, A throws 9 and reaches cell 10
B is in cell 17, B throws 7 and reaches cell 24
A is in cell 10, A throws 7 and reaches cell 17
B is in cell 24, B throws 6 and reaches cell 30
A is in cell 17, A throws 8 and reaches cell 25
B is in cell 30, B throws 7 and reaches cell 37
A is in cell 25, A throws 5 and reaches cell 30
B is in cell 37, B throws 7 and reaches cell 44
A is in cell 30, A throws 10 and reaches cell 40
B is in cell 44, B throws 3 and reaches cell 47
A is in cell 40, A throws 6 and reaches cell 46
B is in cell 47, B throws 10 and reaches cell 57
A is in cell 46, A throws 9 and reaches cell 55
B is in cell 57, B throws 7 and reaches cell 62
A is in cell 55, A throws 12 and reaches cell 59
B is in cell 62, B throws 7 and reaches cell 57
A is in cell 59, A throws 9 and reaches cell 58 (teleport to 1 )  and jumps to cell 1
B is in cell 57, B throws 7 and reaches cell 62
A is in cell 1, A throws 9 and reaches cell 10
B is in cell 62, B throws 2 and reaches cell 62
A is in cell 10, A throws 11 and reaches cell 21
B is in cell 62, B throws 5 and reaches cell 59
A is in cell 21, A throws 3 and reaches cell 24
B is in cell 59, B throws 5 and reaches cell 62
A is in cell 24, A throws 10 and reaches cell 34
B is in cell 62, B throws 2 and reaches cell 62
A is in cell 34, A throws 6 and reaches cell 40
B is in cell 62, B throws 6 and reaches cell 58 (teleport to 1 )  and jumps to cell 1
A is in cell 40, A throws 6 and reaches cell 46
B is in cell 1, B throws 7 and reaches cell 8
A is in cell 46, A throws 6 and reaches cell 52
B is in cell 8, B throws 7 and reaches cell 15
A is in cell 52, A throws 11 and reaches cell 63
A has won.
```
NB : Pour éviter une partie infinie les cases pièges ont été désactivées. Toutefois elles peuvent être activées dans le code de *ClassicalBoard.java* en décommentant les lignes 37 et 38. Cela n'aura aucun impact sur les autres codes sauf lors d'une partie ou deux joueurs peuvent se retrouver au sein d'une case piège.

Voici par exemple la trace d'une partie entre 3 joueurs obtenue en activant les cases pièges dans le jeu:

```sh
A is in cell 0, A throws 8 and reaches cell 8   
B is in cell 0, B throws 5 and reaches cell 5   
C is in cell 0, C throws 7 and reaches cell 7   
A is in cell 8, A throws 9 and reaches cell 17   
B is in cell 5, B throws 6 and reaches cell 11   
C is in cell 7, C throws 7 and reaches cell 14   
A is in cell 17, A throws 2 and reaches cell 19 cannot play 
B is in cell 11, B throws 7 and reaches cell 18 (Goose Cell)  and jumps to cell 25  
C is in cell 14, C throws 5 and reaches cell 19 cannot play cell is busy, A is sent to cell 14
A is in cell 14, A throws 10 and reaches cell 24   
B is in cell 25, B throws 11 and reaches cell 36 (Goose Cell)  and jumps to cell 47  
C is in cell 19, C cannot play
A is in cell 24, A throws 8 and reaches cell 32   
B is in cell 47, B throws 5 and reaches cell 52 (trap)  
C is in cell 19, C cannot play
A is in cell 32, A throws 7 and reaches cell 39   
B is in cell 52, B cannot play
C is in cell 19, C throws 5 and reaches cell 24   
A is in cell 39, A throws 8 and reaches cell 47   
B is in cell 52, B cannot play
C is in cell 24, C throws 10 and reaches cell 34   
A is in cell 47, A throws 11 and reaches cell 58 (teleport to 1 )  and jumps to cell 1        
B is in cell 52, B cannot play
C is in cell 34, C throws 10 and reaches cell 44   
A is in cell 1, A throws 8 and reaches cell 9 (Goose Cell)  and jumps to cell 17  
B is in cell 52, B cannot play
C is in cell 44, C throws 7 and reaches cell 51
A is in cell 17, A throws 4 and reaches cell 21
B is in cell 52, B cannot play
C is in cell 51, C throws 6 and reaches cell 57
A is in cell 21, A throws 11 and reaches cell 32
B is in cell 52, B cannot play
C is in cell 57, C throws 12 and reaches cell 57
A is in cell 32, A throws 7 and reaches cell 39
B is in cell 52, B cannot play
C is in cell 57, C throws 6 and reaches cell 63
C has won.
```

























