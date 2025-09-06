# Mon Portfolio

Bienvenue sur le dépôt de mon portfolio personnel ! Ce site web est conçu pour présenter mes projets, mes compétences et mon parcours professionnel de manière interactive et esthétique.

## Fonctionnalités

*   **Design Moderne et Épuré :** Interface professionnelle avec une typographie soignée (Inter) et une palette de couleurs harmonieuse.
*   **Effet "Glassmorphism" :** L'en-tête et les cartes utilisent un effet de verre dépoli pour un look moderne et une meilleure hiérarchie visuelle.
*   **Thème Sombre/Clair Automatique :** L'interface s'adapte aux préférences de votre système d'exploitation.
*   **Micro-interactions :** Des effets de survol subtils sur les cartes de projet et les compétences pour une expérience utilisateur plus dynamique.
*   **Compétences Visuelles :** Une grille de compétences avec des icônes pour une identification rapide et esthétique des technologies maîtrisées.
*   **Entièrement Responsive :** Le design s'adapte parfaitement à toutes les tailles d'écran.
*   **Navigation Fluide :** Un menu "sticky" qui surligne la section active lors du défilement (scrollspy).

## Technologies Utilisées

*   **Frontend :**
    *   [React](https://react.dev/) : Bibliothèque JavaScript pour la construction d'interfaces utilisateur.
    *   [Ant Design](https://ant.design/) : Bibliothèque de composants UI pour une interface élégante et réactive.
    *   [react-icons](https://react-icons.github.io/react-icons/) : Pour l'intégration d'icônes de haute qualité.
    *   [react-tsparticles](https://www.npmjs.com/package/react-tsparticles) : Pour l'arrière-plan animé et interactif.
*   **Outils de Développement :**
    *   [Node.js](https://nodejs.org/) & [npm](https://www.npmjs.com/) : Environnement d'exécution JavaScript et gestionnaire de paquets.
    *   [Create React App](https://create-react-app.dev/) (`react-scripts`) : Configuration rapide de l'environnement de développement React.

## Démarrage Rapide

Suivez ces étapes pour lancer le projet en local sur votre machine.

### Prérequis

Assurez-vous d'avoir [Node.js](https://nodejs.org/en/download/) et [npm](https://www.npmjs.com/get-npm) installés sur votre système.

### Installation

1.  Clonez ce dépôt :
    ```bash
    git clone https://github.com/votre_utilisateur/votre_portfolio.git
    ```
2.  Naviguez vers le répertoire du projet :
    ```bash
    cd votre_portfolio
    ```
3.  Installez les dépendances :
    ```bash
    npm install
    ```

### Lancement de l'application

Pour démarrer le serveur de développement :

```bash
npm start
```

L'application sera accessible dans votre navigateur à l'adresse `http://localhost:3000`.

## Configuration du Formulaire de Contact

Pour que le formulaire de contact fonctionne, vous devez le lier à votre compte [EmailJS](https://www.emailjs.com/).

1.  **Configurez votre compte EmailJS** :
    *   Connectez votre service d'email (ex: Gmail).
    *   Créez un nouveau modèle d'email. Vous pouvez copier le code qui se trouve dans le fichier `EMAIL_TEMPLATE.html` (à la racine du projet) et le coller dans la section "Content (HTML)" de votre modèle sur le site d'EmailJS.
    *   Notez votre **Service ID**, **Template ID**, et **Public Key**.

2.  **Créez un fichier `.env`** à la racine du projet.

3.  **Ajoutez vos clés EmailJS** dans ce fichier comme suit :

    ```env
    REACT_APP_EMAILJS_SERVICE_ID=VOTRE_SERVICE_ID
    REACT_APP_EMAILJS_TEMPLATE_ID=VOTRE_TEMPLATE_ID
    REACT_APP_EMAILJS_PUBLIC_KEY=VOTRE_PUBLIC_KEY
    ```

4.  **Redémarrez votre serveur** (`npm start`) après avoir modifié le fichier `.env` pour que les changements soient pris en compte.


## Structure du Projet

```
.
├── public/                 # Fichiers statiques (index.html, images, etc.)
├── src/                    # Code source de l'application React
│   ├── components/         # Composants React réutilisables
│   │   ├── About.js        # Section "À propos de moi"
│   │   ├── Contact.js      # Section "Contact"
│   │   ├── ProjectCard.js  # Carte individuelle de projet
│   │   ├── ProjectList.js  # Liste des projets
│   │   ├── ProjectModal.js # Modale de détails de projet
│   │   └── Skills.js       # Section "Compétences"
│   ├── data/               # Données statiques (ex: projets.json)
│   │   └── projects.json
│   ├── App.js              # Composant principal de l'application
│   ├── App.css             # Styles globaux de l'application
│   ├── index.js            # Point d'entrée de l'application
│   └── index.css           # Styles de base et variables de thème
├── package.json            # Métadonnées du projet et dépendances
├── package-lock.json       # Verrouillage des versions des dépendances
└── README.md               # Ce fichier
```


## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails. (Si vous avez un fichier LICENSE, sinon, vous pouvez l'omettre ou choisir une autre licence).

## Contact

Pour toute question ou collaboration, n'hésitez pas à me contacter :

*   **Mamadou FOFANA**
*   **Email :** madoufof94@gmail.com
*   **LinkedIn :** https://www.linkedin.com/in/mamadou-fofana-76706429a/
*   **GitHub :** https://github.com/fofanamamadou