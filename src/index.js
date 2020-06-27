// //sin react
// //Creo un elemento
// const element = document.createElement('h1');
// // Al elemento H1 le asigno un atributo 
// element.innerText='Hello, React';
// //donde quiero mostar Hello React
// const container = document.getElementById('app');
// //Invocamos a la variable que queremos mostrar.
// container.appendChild(element);




//Utilizando react

import React from 'react';
import ReactDOM from 'react-dom';


//Con creacteElement
const name = 'Marco';

const element = React.createElement(
    'div',
    {name},
    React.createElement('h1', {}, 'Hola soy, esto es con React'),
    React.createElement('p', {}, 'Esto es un parraofn con react')
)

const container = document.getElementById('app');
ReactDOM.render(element, container);





// const jsx = (
//      <div>
//         <h1>Hola esto es un Titulo H1 con jsx</h1>
//         <p>Esto es un parrafo en jsx</p>
//     </div>
//    ); 
// const container= document.getElementById('app');
// ReactDOM.render(jsx, container);


// //Creo un elemento con el contenido
// const element = <h1>Hello, React con React</h1>
// const conteiner= document.getElementById('app');
// //ReactDOM-> trae dos elementos(lo que trae, y donde)
// ReactDOM.render(element, conteiner);