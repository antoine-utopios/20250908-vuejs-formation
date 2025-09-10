# Exercice Vue.js #3 - TodoList avec Pnia

## Objectifs 

Appréhender le fonctionnement de Pinia dans l'écosystème Vue.js

## Sujet 

Réaliser une application web de type SPA (Single Page Application) via l'utilisation de Vue.js en Typescript. 

Cette application doit avoir, en plus du composant de base `App.vue`: 

* Un composant servant à la création de nouvelles Todos. Il devra émettre, via l'appui sur un bouton dans un formulaire, une nouvelle todo qui sera récupérable par le composant parent. 
* Un composant d'affichage de la Todo. Ce composant devra permettre de standardiser l'affichage d'un objet de ce type et aura comme fonctionnalité le fait de supprimer / changer le statut d'un todo. Il devra pour cela réceptionner l'objet todo en tant que prop et emettre des évènements afin d'informer le parent d'une suppression / d'un changement de statut. 

Un objet todo sera constitué d'un ID, d'un descriptif et d'un statut de complétion (à faire, fait par exemple).

Pour gérer les données de l'application et les manipuler, il faudra mettre en place un store. 
* Ce store aura une clé de type 'todos' et contiendra l'ensemble des TodoItems. 
* Lors du passage des informations de la todo à l'enfant, seule l'ID de l'entité sera envoyée.
* Pour extraire ensuite les données manquantes, il faudra, dans le composant enfant, aller piocher dans le store les informations voulues. 