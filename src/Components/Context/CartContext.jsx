import { useEffect } from 'react';
import { useContext } from 'react';
import { createContext, useState } from 'react';
const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);
export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const addProducts = (id, quantity, nameS, imageS, price) => {
        let findIndex = products.findIndex(searchProduct => {
            return searchProduct.id === id;
        })
        findIndex === -1 && setProducts([...products, { id: id, quantity: quantity, nameS: nameS, imageS: imageS, price: price }])
        if (findIndex >= 0){
            products[findIndex].quantity = products[findIndex].quantity+quantity;
        }
    }
    useEffect(()=> {
        console.log(products);
    },[products])
    const removeProducts = (id) => {
        products.splice(products.findIndex((i) => i.id === id), 1)
        setProducts([...products])
    }
    const findIndexToAddQuantity = (item, findIndex) => {
        findIndex = products.findIndex(product => {
            if (product.id === item.id){
                return item.id;
            }
        })
        return findIndex;
    }
    const clearProducts = () => {
        setProducts([]);
    }
    const getProducts = (setCartProducts) => {
        setCartProducts(...products);
        return products;
    }
    const getTotalPrice = () => {
        return products.reduce((add, i) => (add += i.price * i.quantity), 0)
    }
    const getTotalQuantity = () => {
        return products.reduce((add,i) => (add+=i.quantity), 0)
    }
    return (
        <CartContext.Provider value={{ addProducts, removeProducts, clearProducts, getProducts, products, getTotalPrice, getTotalQuantity, findIndexToAddQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;