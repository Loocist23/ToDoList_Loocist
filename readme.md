# ToDo List Application

## Description

Cette application ToDo List permet aux utilisateurs de créer, afficher, modifier et supprimer des tâches à faire. Elle supporte également le basculement entre les thèmes clair et sombre.

## Fonctionnalités

- Ajout de tâches avec titre, description et date d'échéance.
- Visualisation de toutes les tâches ajoutées.
- Modification et suppression de tâches existantes.
- Marquage des tâches comme complétées.
- Support des thèmes clair et sombre.

## Technologies Utilisées

- React Native pour le développement multiplateforme (iOS et Android).
- AsyncStorage pour la persistance des données localement sur l'appareil.
- Context API pour la gestion globale de l'état.

## Installation

Pour installer et lancer le projet sur votre machine locale, suivez ces étapes :

1. Clonez le dépôt :

```
git clone https://github.com/Loocist23/ToDoList_Loocist.git
```

## Installez les dépendances :

```
cd your-project-directory
npm install
```

## Lancez l'application :
### Pour iOS :
```
npx react-native run-ios
```

### Pour Android :
```
npx react-native run-android
```

## Utilisation
### Ajouter une tâche

- Appuyez sur le bouton "Add a new todo".
- Remplissez les champs "Title", "Description" et sélectionnez une "Due Date".
- Appuyez sur "Add" pour enregistrer la tâche.
- Modifier/Supprimer une tâche
- Appuyez sur une tâche pour ouvrir les détails.
- Pour modifier, changez les informations et appuyez sur "Save".
- Pour supprimer, appuyez sur "Delete".


### Changer le thème
- Allez dans l'onglet "Settings".
- Utilisez le commutateur pour basculer entre les thèmes clair et sombre.

## Contribution
Si vous souhaitez contribuer à ce projet, n'hésitez pas à forker le dépôt et à soumettre des pull requests.

## Licence
MIT