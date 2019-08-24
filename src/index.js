import React from 'react';
import { render } from 'react-dom';

// 1. Créer un composant React

const MonPremierComposant = function(){
    return <div>salut lol</div>;
};

//2. Afficher le composant dans la page
const zoneDeTravail = document.querySelector('#root');
render(<MonPremierComposant />, zoneDeTravail);