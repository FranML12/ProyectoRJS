import { useEffect, useState } from "react"
import ProductsCardlist from "./ProductsCardList"
import ProductsJson from "../Products.json"

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);

    const getProducts = (data, time) => 
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (data) {
            resolve(data);
          } else {
            reject("Error");
          }
        }, time);
      });
    
    useEffect(() => {
      getProducts(ProductsJson, 3000)
      .then((res) =>{
        setProducts(res)
      }).catch((err) => console.log(err, ": no se encuentra el producto"));
    }, []);

  return (
    <div>
      <div>Productos</div>
      <ProductsCardlist products={products}/>
    </div>
  )
}

export default ProductsContainer