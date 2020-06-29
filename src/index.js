import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge'
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
const container = document.getElementById('app');
ReactDOM.render(<Badge/>, container);

















//Con Jsx contenedores
// const jsx = (
//      <div>
//         <h1>Hola esto es un Titulo H1 con jsx</h1>
//         <p>Esto es un parrafo en jsx</p>
//     </div>
//    ); 
// const container= document.getElementById('app');
// ReactDOM.render(jsx, container);


// //Con React 
// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hola soy, esto es con React y estoy trabajando con git'),
//     React.createElement('p', {}, 'Esto es un parrafo  con react')
// )

// const container = document.getElementById('app');
// ReactDOM.render(element, container);











// const name = 'Marco Serrate';
// //voy a crear un elemento que tenga una funcion sumar 
// const sum=()=> 3+ 3;
// //En jsx si vamos a escribir expresiones, entonces abrimos las {}
// const jsx = <h1>Hola esto es una funcion {sum()}, realizado por {name}</h1>;
// //donde mostramos el docuemnto
// const conteiner = document.getElementById('app');
// //Impresion
// ReactDOM.render(jsx, conteiner);




//Con React
// const name = 'Marco';
// const element =  React.createElement('h1', {}, `Hello ${name}`);
// const container = document.getElementById('app');
// ReactDOM.render(element, container);












// const jsx = <h1>Hello React Jsx</h1>; 

// const element = React.createElement(
//      'a',
//      {href: 'https://platzi.com'},
//      'Haz clic en el link de jsx TB');






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










// //Con creacteElement
// const name = 'Marco';

// const element = React.createElement(
//     'div',
//     {name},
//     React.createElement('h1', {}, 'Hola soy, esto es con React'),
//     React.createElement('p', {}, 'Esto es un parraofn con react')
// )

// const container = document.getElementById('app');
// ReactDOM.render(element, container);





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