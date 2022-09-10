import './style.css';
import { useState, useEffect } from 'react';
import Cards from './Cards';
const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const componentLoad = async () => {
        try {
            let response = await fetch('../data.json');
            let data = await response.json();
            setProductos(data);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        setTimeout(() => {
            componentLoad();
        }, 2000)
    }, [productos])
    if (productos.length === 0){
        return <p>Loading...</p>
    }
    return <>
        <Cards items={productos} key="products" />
    </>
}
export default ItemListContainer;