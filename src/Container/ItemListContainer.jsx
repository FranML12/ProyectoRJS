import './style.css';
import { useState, useEffect } from 'react';
import Items from './Items';
import {getFirestore, collection, getDocs} from 'firebase/firestore';
const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const componentLoad = async () => {
        try {
            let response = await fetch('../data.json');
            const db = getFirestore();
            const items = collection(db,'items');
            getDocs(items).then((snapshot) => {
                const docs = snapshot.docs.map((doc) => ({
                    id:doc.id,
                    ...doc.data()
                }))
                setProductos(docs);
            })
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
        <Items items={productos} key="products" />
    </>
}
export default ItemListContainer;