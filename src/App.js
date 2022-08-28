import {useEffect, useState} from 'react';
import './App.css';
import Saludo from './components/Saludo';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const [counter, setCounter] = useState(0)
  const [products, setProducts] = useState([])

  useEffect( () => {
    
    console.log('Promesa en mounting');

    const getProducts = new Promise( (resolve, reject) => {
      const rand = Math.random()
      console.log( rand );
      
      if ( rand > 0.5 ) {
        resolve( ['mouse', 'teclado', 'cpu']  )
      } else {
        reject( 'Promesa rechazada' )
      }
    })
    
    getProducts
      .then( data => {
        console.log( data );
        setProducts( data )
      })
      .catch( err => { console.log( err ); })
      .finally( () => { console.log('finally siempre sucede'); })

/*     return () => {
      console.log('Efecto al desmontaje');
    } */
  }, [])

  useEffect ( () => {
    console.log('Efecto al montaje y combio en el counter');
    // No usar setCounter() acá -> Genera loop infinito
  }, [counter])

  const handleClick = () => {
    setCounter(counter + 1);
    console.log('Hiciste click');
  }
  const handleClick1 = () => {
    setCounter(counter - 1);
    console.log('Hiciste click');
  }

  console.log('Hubo render');

  return (   
    
  <div className="container">
    <NavBar/>
    <strong>Contador: {counter}</strong>
    <button onClick={handleClick}>Click+</button>
    <button onClick={handleClick1}>Click-</button>
    {products.map( p => <li> {p} </li>)}
    <Saludo name='Juan' lastName='Perez'/>
    <ItemListContainer greeting={"Saludos"}/>
  </div>
  );
}

export default App;
