import React from 'react'; // Importe la bibliothèque React
import ReactDOM from 'react-dom/client'; // Importe les outils de rendu de React pour le DOM
import './index.css'; // Importe les styles CSS globaux de l'application
import './i18n'; // Importe la configuration i18n
import App from './App'; // Importe le composant principal de l'application

// Crée une racine React pour l'application, attachée à l'élément HTML avec l'ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rend le composant principal de l'application dans la racine React
root.render(
  // React.StrictMode active des vérifications supplémentaires et des avertissements pour le développement
  <React.StrictMode>
    <App /> {/* Le composant principal de l'application */}
  </React.StrictMode>
);
