<h1>REACT AUTO CLOSE MODAL</h1>

react-auto-close-modal est un composant React léger qui affiche une modale se fermant automatiquement
après un certain délai sans avoir besoin d'un bouton de fermeture. Il est simple, personnalisable 
et s'intègre facilement dans n'importe quel projet React.

<h2>FONCTIONNALITES</h2>

Facile à intégrer dans n'importe quel projet React
Se ferme automatiquement après un délai spécifié
Supporte tout type de contenu dans la modale
Aucun bouton de fermeture nécessaire, se ferme automatiquement après un délai
Installation
Vous pouvez installer le package via npm ou yarn :
```
npm install react-auto-close-modal
```
Ou avec yarn :
```
yarn add react-auto-close-modal
```
<h2>UTILISATION</h2>

Voici un exemple rapide d'utilisation du composant AutoCloseModal dans votre application React.

Exemple de base
```javascript
import React, { useState } from 'react';
import AutoCloseModal from 'react-auto-close-modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Ouvrir la Modale</button>
      <AutoCloseModal isOpen={isModalOpen} onClose={closeModal} autoCloseTime={5000}>
        <h2>Titre de la Modale</h2>
        <p>Cette modale se fermera automatiquement après 5 secondes.</p>
      </AutoCloseModal>
    </div>
  );
};

export default App;
```


<h2>PROPS</h2>

Le composant AutoCloseModal accepte les props suivantes :

| Prop            | Type      | Requis   | Description                                                                 |
| :-------------- | :-------- | :------: | --------------------------------------------------------------------------- |
| `isOpen`        | `boolean` | Oui      | Contrôle la visibilité de la modale.                                        |
| `onClose`       | `function`| Oui      | Fonction appelée lorsque la modale se ferme automatiquement.                |
| `autoCloseTime` | `number`  | Non      | Temps en millisecondes avant la fermeture automatique (par défaut : `3000`). |
| `children`      | `node`    | Oui      | Contenu à afficher dans la modale.                                          |



<h2>PERSONNALISATION DU DELAI DE FERMETURE</h2>

Vous pouvez personnaliser la durée d'affichage de la modale en modifiant la prop autoCloseTime (en millisecondes).
```jsx
<AutoCloseModal isOpen={isModalOpen} onClose={closeModal} autoCloseTime={8000}>
  <h2>Modale avec durée personnalisée</h2>
  <p>Cette modale se fermera automatiquement après 8 secondes.</p>
</AutoCloseModal>
```
<h2>PERSONNALISATION DU STYLE</h2>

Pour personnaliser le style de la modale, vous pouvez soit remplacer les styles par défaut, soit modifier le fichier CSS fourni dans AutoCloseModal.css.
```css
/* Exemple de styles personnalisés */
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  padding: 30px;
  border-radius: 10px;
}
```
Styles par défaut

La modale inclut par défaut quelques styles simples pour convenir à la plupart des besoins, notamment un fond d’écran sombre et une boîte blanche pour le contenu de la modale avec une animation de fondu en entrée.

<h2>DEVELOPPEMENT</h2>

Pour développer localement ou contribuer :

1. Clonez le dépôt
2. Exécutez npm install pour installer les dépendances
3. Modifiez le code dans AutoCloseModal.js et testez-le avec votre application exemple

<h2>AUTEUR</h2>
Buil Laura

-----------------------------------------------------------------------------------------------------

<h2>EN</h2>

<h1>react-auto-close-modal</h1>

react-auto-close-modal is a lightweight React component that renders a modal that automatically closes after a specified time without the need for a close button. It's simple, customizable, and works well with any React project.

<h2>Features</h2>
Easy to integrate into any React project
Automatically closes after a specified duration
Supports any content inside the modal
No close button required, closes after timeout

<h2>Installation</h2>

You can install the package via npm or yarn:

```
npm install react-auto-close-modal
```
Or with yarn:
```
yarn add react-auto-close-modal
```
<h2>Usage</h2>
Here’s a quick example of how to use the AutoCloseModal component in your React application.

Basic Example
```javascript
import React, { useState } from 'react';
import AutoCloseModal from 'react-auto-close-modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <AutoCloseModal isOpen={isModalOpen} onClose={closeModal} autoCloseTime={5000}>
        <h2>Modal Title</h2>
        <p>This modal will automatically close after 5 seconds.</p>
      </AutoCloseModal>
    </div>
  );
};

export default App;
```

<h2>Props</h2>
The AutoCloseModal component accepts the following props:

| Prop            | Type      | Requiered   | Description                                                                 |
| --------------- | --------- | -------- | --------------------------------------------------------------------------- |
| `isOpen`        | `boolean` | Yes      | Controls the visibility of the modal.                                       |
| `onClose`       | `function`| Yes      | Function that will be called when the modal closes automatically.                |
| `autoCloseTime` | `number`  | No      | Time in milliseconds before the modal closes automatically (default: 3000). |
| `children`      | `node`    | Yes      | Content to display inside the modal.                                         |




<h2>Customizing Close Time</h2>
You can customize how long the modal stays open by adjusting the autoCloseTime prop (in milliseconds).
```jsx
<AutoCloseModal isOpen={isModalOpen} onClose={closeModal} autoCloseTime={8000}>
  <h2>Custom Duration Modal</h2>
  <p>This modal will automatically close after 8 seconds.</p>
</AutoCloseModal>
```

<h2>Styling</h2>
To customize the styling of the modal, you can either override the default styles or modify the CSS provided in AutoCloseModal.css.
```css
/* Example of custom styles */
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  padding: 30px;
  border-radius: 10px;
}
```
Default Styles
The modal comes with some basic default styles for convenience, including a dark overlay and a white modal content box with a fade-in animation.

<h2>Development</h2>
To develop locally or contribute:

1. Clone the repo
2. Run npm install to install the dependencies
3. Modify the code in AutoCloseModal.js and test with your example app