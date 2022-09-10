import { useState } from "react";
import { Link } from "react-router-dom";
import './index.css';
const ButtonNumber = ({ stock, initial, onAdd }) => {
    const [valor, setValor] = useState(parseInt(initial));
    const [initialS, setInitialS] = useState(parseInt(initial));
    const [stockS, setStock] = useState(parseInt(stock));
    const [cambio, setCambio] = useState(false);
    if (cambio === false) {
        return <>
            <div className="button">
                <label htmlFor="" className="label">Cantidad {stockS}<button onClick={() => {
                    if (valor <= stockS && valor > 0) {
                        setValor(valor - 1);
                        setInitialS(valor - 1);
                    }
                }
                }>-</button><i>{initialS}</i> <button onClick={() => {
                    if (valor < stockS && valor >= 0) {
                        setValor(valor + 1);
                        setInitialS(valor + 1);
                    }
                }}>+</button></label>
                <button className="buttonSecondary" onClick={(e) => {
                    if (valor <= stockS && valor > 0) {
                        onAdd(valor);
                        setStock(stockS - valor);
                        setCambio(true);
                    }
                }}>Agregar al carrito</button>
            </div>
        </>
    }
    else{
        return(
            <div>
                <Link to="/cart" className="finCompra">Finalizar compra</Link>
            </div>
        )
    }
}
export default ButtonNumber;