import './style.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../Components/ItemDetail/ItemDetail";
const getCard = async (setProductos) => {
    try {
        let response = await fetch('../data.json');
        let data = await response.json();
        setProductos(data);
    } catch (e) {
        console.log(e);
    }
}

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    useEffect(() => {                   
        setTimeout(() => {
            getCard(setProducto);
        }, 2000)
    }, [producto]);
    const { idProducto } = useParams();
    if (producto.length === 0){
        return <p>Loading...</p>
    }
    return <>
        <div className="container mt-3">
            <div className="row">
                {producto.map(item => {
                    return (
                        item.id === parseInt(idProducto) && <CardDetail item={item} key={item} />
                    )
                })}
            </div>
        </div>
    </>
}
export default ItemDetailContainer; 