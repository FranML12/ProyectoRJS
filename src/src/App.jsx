import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Container/ItemDetailContainer';
import ItemListContainer from './Container/ItemListContainer';
import Cart from './Container/Cart'
import { CartProvider } from './Components/Context/CartContext';
function App() {
  return <>
    <div className="App">
    <CartProvider>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:idProducto" element={<ItemDetailContainer />} />  
            <Route path="/categorias/:idCategoria" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />        
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>

  </>;
}
export default App;
