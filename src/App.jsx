import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/NavBar/NavBar';
import CardDetailContainer from './Container/CardDetailContainer';
import ItemListContainer from './Container/ItemListContainer';
function App() {
  return <>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:idProducto" element={<CardDetailContainer />} />
          <Route path="/categorias/:idCategoria" element={<ItemListContainer />}/>
          <Route path="/cart" element={<CardDetailContainer />} />
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </div>

  </>;
}
export default App;
