# Technologies Utilisées et Leur Rôle dans le Projet

Ce document détaille les principales technologies, bibliothèques et concepts utilisés dans ce projet de portfolio, ainsi que leur objectif et leur mise en œuvre.

---

## 1. React

*   **Objectif :** React est la bibliothèque JavaScript fondamentale utilisée pour construire l'interface utilisateur de cette application web monopage (SPA). Elle permet une approche déclarative et basée sur les composants pour le développement UI.
*   **Utilisation dans le projet :**
    *   L'ensemble de l'interface est structuré en composants React (ex: `App`, `About`, `Skills`, `ProjectCard`).
    *   Utilisation des Hooks (`useState`, `useEffect`, `useCallback`) pour la gestion de l'état local des composants, les effets secondaires et l'optimisation des performances.
    *   JSX est utilisé pour décrire la structure de l'UI.

---

## 2. Ant Design (`antd`)

*   **Objectif :** Ant Design est une bibliothèque de composants UI de haute qualité, conçue pour les applications d'entreprise. Elle fournit un ensemble riche de composants pré-stylés et réactifs, accélérant le développement et assurant une cohérence visuelle.
*   **Utilisation dans le projet :**
    *   **Mise en page :** Composants `Layout` (Header, Content, Footer) pour la structure globale du site.
    *   **Navigation :** `Menu` pour la navigation principale (horizontale et verticale dans le tiroir), `Drawer` pour le menu mobile, `Button` pour les actions.
    *   **Affichage de données :** `Card` pour les projets, `Tag` pour les technologies, `Typography` (Title, Paragraph) pour le texte, `Avatar` pour l'image de profil.
    *   **Formulaires :** `Form`, `Input`, `TextArea` pour la section contact.
    *   **Modales :** `Modal` pour afficher les détails des projets.
    *   **Thématisation :** Les styles d'Ant Design sont surchargés et adaptés via des variables CSS pour supporter les thèmes clair et sombre.

---

## 3. react-tsparticles & tsparticles

*   **Objectif :** Ces bibliothèques sont utilisées pour créer l'arrière-plan animé du site, offrant un effet de particules interactif et visuellement attrayant.
*   **Utilisation dans le projet :**
    *   Le composant `Particles` est intégré dans `App.js`.
    *   Il est configuré pour afficher un réseau de particules subtil, réagissant au survol de la souris.
    *   L'initialisation du moteur de particules est gérée via `useEffect` pour s'assurer qu'il est prêt avant le rendu.

---

## 4. @ant-design/icons

*   **Objectif :** Fournit une collection d'icônes vectorielles de haute qualité, spécifiquement conçues pour être utilisées avec Ant Design.
*   **Utilisation dans le projet :**
    *   Icônes de navigation et de menu (`MenuOutlined`, `CodeOutlined`, `ProjectOutlined`).
    *   Icônes de changement de thème (`SunOutlined`, `MoonOutlined`).
    *   Icônes de profil (`UserOutlined`).
    *   Icônes de liens sociaux (`LinkedinOutlined`, `GithubOutlined`, `MailOutlined`).

---

## 5. react-scripts

*   **Objectif :** Fait partie de l'écosystème Create React App. Il fournit un ensemble de scripts préconfigurés pour le développement, la construction (build) et le test des applications React, sans nécessiter de configuration complexe de Webpack ou Babel.
*   **Utilisation dans le projet :**
    *   `npm start` : Lance le serveur de développement local.
    *   `npm build` : Crée une version optimisée pour la production.

---

## 6. Variables CSS (`var()`)

*   **Objectif :** Permettent de définir des valeurs réutilisables (comme les couleurs) dans les feuilles de style. Elles sont cruciales pour la mise en œuvre d'un système de thématisation dynamique.
*   **Utilisation dans le projet :**
    *   Le fichier `src/index.css` définit des palettes de couleurs pour les thèmes clair (par défaut dans `:root`) et sombre.
    *   La logique du thème sombre est appliquée si le corps de la page a la classe `.dark-theme` (choix manuel de l'utilisateur) ou via la media query `@media (prefers-color-scheme: dark)` (préférence système), à condition que le thème clair ne soit pas forcé manuellement.
    *   Toutes les couleurs des composants consomment ces variables pour assurer une cohérence visuelle et une adaptation automatique au thème.

---

## 7. `backdrop-filter` (Propriété CSS)

*   **Objectif :** Crée des effets graphiques sur la zone située derrière un élément, permettant notamment l'effet "verre dépoli" (glassmorphism).
*   **Utilisation dans le projet :**
    *   Appliqué aux arrière-plans des sections de contenu (`.site-layout-content`), des cartes de projet (`.ant-card`), des modales (`.ant-modal-content`) et du tiroir de navigation (`.ant-drawer-content-wrapper`).
    *   Combiné avec des couleurs de fond semi-transparentes pour laisser transparaître l'arrière-plan animé tout en maintenant la lisibilité du contenu.

---
