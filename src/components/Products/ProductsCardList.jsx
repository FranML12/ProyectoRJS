import React from "react"
import ProductsCard from "./ProductsCard"

const ProductsCardlist = ({products}) => {
  return (
    <div>
      {products.length ? (
        products.map( (p) => <ProductsCard key={p.id} {...p}/>) 
        
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  )
}
      
export default ProductsCardlist