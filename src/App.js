import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (   
  <div className="container">
    <NavBar/>
    <Saludo name='Juan' lastName='Perez'/>
    <ItemListContainer greeting={"Saludos"}/>
  </div>
  );
}

export default App;
