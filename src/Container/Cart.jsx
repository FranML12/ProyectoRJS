import { useCartContext } from "../Components/Context/CartContext";
import './style.css';
import Swal from "sweetalert2";
const Cart = () => {
    const { products, getTotalPrice, getTotalQuantity, removeProducts, clearProducts } = useCartContext();
    console.log(products);
    if (products.length === 0) {
        return (
            <div className="text-center">
                <p>No hay productos</p>
            </div>
        )
    }
    else {
        let endPrice = getTotalPrice();
        let totalQuantity = getTotalQuantity();
        return (
            <div className="container">
                <div className="row">
                    {products.map(item => {
                        return <>
                            <div className="d-flex" key={`container${item.id}`}>
                                <img src={item.imageS} alt={item.imageS} className="imgCart col-3 mt-auto mb-auto" key={item.imageS} />
                                <h3 key={item.nameS} className="col-3 mt-auto mb-auto">{item.nameS}</h3>
                                <h5 key={item.price} className="col-3 mt-auto mb-auto">${item.price}</h5>
                                <input type="submit" value="Quitar" className="col-3 inputQuitar mt-auto mb-auto" onClick={(e) => {
                                    e.preventDefault();
                                    removeProducts(item.id);
                                }}key={item.id}/>
                            </div>
                        </>
                    })}
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <p>Precio total: ${endPrice}</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <p className="ms-auto">Cantidad total: {(totalQuantity === 1 ? <>un producto</> : <>{totalQuantity} productos</>)}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="text-center col-6">
                        <input type="button" value="Vaciar carrito" className="inputQuitar2" onClick={clearProducts} />
                    </div>
                    <div className="text-center col-6">
                        <input type="button" value="Comprar" className="comprarProductos" onClick={() => {
                            clearProducts();
                            Swal.fire({
                                icon: 'success',
                                title: 'Compra',
                                text:"Se ha realizado con éxito"
                              })
                        }}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;