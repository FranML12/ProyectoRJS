import './App.css';
import Saludo from './components/Saludo';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ProductsApp from './components/Products/ProductsApp';

function App() {

  return (   
  <>
    <NavBar/>
    <body>
      <header>
      </header>
      <div class="container">
        <Saludo name='Juan' lastName='Perez'/>
        <ItemListContainer greeting={"Saludos"}/>
      </div>
      <div class="container">
        <ProductsApp/>
      </div>
    </body>
    
{/*     <div class="ProductsContainer">
      <ProductsApp/>
    </div> */}
  </>
  );
}

export default App;
