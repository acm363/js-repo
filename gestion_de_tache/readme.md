Pour installer les fichiers nécessaires qui permettront de lancer l'application :

- récupérez le dépôt qui contient les fichiers sources en clonant le dépôt git via ssh(par exemple)  via le lien : git@gitlab-etu.fil.univ-lille1.fr:atchedji/atchedji-colle-douchet-guennineche-js.git

- une fois le dépôt cloné sur votre répertoire local, ouvrez un terminal et placez-vous dans le sous-répertoire *'projet-react'* contenu dans le répertoire du dépôt cloné

- installez les modules indispensables à la mise en place de l'application via la commande : 
    ```sh
    npm install
    ```
    Vous devez bien évidemment disposer de [node.js](https://nodejs.org/fr/download/) *(lien cliquable)* installé sur votre machine.

- exécutez la commande :
    ```sh
    npm run build
    ```
    Cette commande vous permet de créer le dossier *dist* et de construire un premier bundle.
- dans le dossier *dist* créé, ouvrez le fichier *index.html* dans un navigateur pour lancer l'application.


**NB : Le projet a été totalement fait.**
