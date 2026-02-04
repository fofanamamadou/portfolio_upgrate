# Guide du Thème et du Style

Ce document explique le fonctionnement du système de theming (thème clair/sombre) et de stylisation du projet. L'objectif est d'utiliser une approche moderne, maintenable et facile à comprendre.

## 1. Gestion des Thèmes (Clair & Sombre)

Le système de thème est conçu pour offrir une expérience utilisateur flexible, en respectant les préférences du système tout en donnant le contrôle à l'utilisateur.

### Comportement par Défaut

À la première visite, l'application **détecte automatiquement le thème préféré du système d'exploitation** de l'utilisateur (via la requête media CSS `prefers-color-scheme`). Si le système est en mode sombre, le thème sombre sera appliqué ; sinon, le thème clair sera utilisé par défaut.

### Sélecteur Manuel

Un bouton situé dans l'en-tête (header), représenté par une **icône de soleil ou de lune**, permet à l'utilisateur de basculer manuellement entre le thème clair et le thème sombre.

### Mémorisation du Choix

Une fois que l'utilisateur clique sur ce bouton, son choix **prend le dessus sur la préférence système** et est sauvegardé dans le `localStorage` du navigateur. Ainsi, lors de ses prochaines visites, l'application se souviendra de son choix et l'appliquera, quelle que soit la configuration de son système d'exploitation.

## 2. Système de Variables CSS

Toute la gestion des couleurs, des fonds et des bordures repose sur les **variables CSS (Custom Properties)**. Cela permet de centraliser la définition des styles et de les rendre dynamiques en fonction du thème.

### Fichier Principal

La source de vérité pour toutes les variables de thème est le fichier : `src/index.css`.

### Structure des Variables

1.  **Thème Clair (Défaut)** : Les variables pour le thème clair sont définies à la racine du document dans le sélecteur `:root`. Elles servent de base pour toute l'application.

2.  **Thème Sombre (Dynamique)** : Les variables du thème sombre sont définies à deux endroits pour assurer la logique souhaitée :
    *   `body.dark-theme { ... }` : Ce bloc s'applique lorsque l'utilisateur choisit manuellement le thème sombre. La classe `.dark-theme` est alors ajoutée au `<body>` par JavaScript.
    *   `@media (prefers-color-scheme: dark) { body:not(.light-theme) { ... } }` : Ce bloc s'applique si le système d'exploitation est en mode sombre **ET** que l'utilisateur n'a pas forcé le thème clair manuellement (via la classe `.light-theme`).

### Exemples de Variables Clés

-   `--background-color` : La couleur de fond principale de la page.
-   `--text-color` : La couleur du texte par défaut.
-   `--primary-color` : La couleur d'accentuation (liens, boutons, icônes actives).
-   `--card-background-color` : La couleur de fond pour les éléments surélevés comme les cartes.
-   `--border-color` : La couleur des bordures.
-   `--header-background` : La couleur de fond spécifique à l'en-tête.

## 3. Comment Utiliser les Variables

Pour garantir la cohérence visuelle et la compatibilité avec les thèmes, **tous les nouveaux composants doivent utiliser ces variables** pour définir leurs couleurs.

**Exemple d'utilisation dans un fichier CSS :**

```css
.mon-nouveau-composant {
  background-color: var(--card-background-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 16px;
}
```

## 4. Logique d'Application (React)

La logique qui orchestre le changement de thème est située dans le composant principal `src/App.js`.

-   Un état React (`useState`) conserve le thème actuel (`'system'`, `'light'`, ou `'dark'`).
-   Un effet de bord (`useEffect`) se charge de :
    1.  Lire la valeur du thème depuis le `localStorage` au chargement.
    2.  Ajouter/retirer les classes `.light-theme` ou `.dark-theme` sur l'élément `<body>` lorsque l'état du thème change.
    3.  Mettre à jour la valeur dans le `localStorage` pour la mémoriser.
