import './style.css';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../Context/CartContext';
const ItemDetail = ({ item }) => {
    const { addProducts, products, findIndexToAddQuantity  } = useCartContext();
    const { id, nameS, price, imageS, stock, initial } = item;
    const onAdd = (id, quantity, nameS, imageS, price) => {
        addProducts(id, quantity, nameS, imageS, price);
    }
    let findIndex = 0; 
    findIndex = findIndexToAddQuantity(item, findIndex);
    if (products[findIndex]) {
        return (
            <div className='col-lg-12 col-md-12 col-sm-12 productDetail'>
                <div className='col-lg-6 col-md-12 col-sm-12 img'>
                    <img src={products[findIndex].imageS.replaceAll('./', '../')} alt={products[findIndex].nameS} data-id={products[findIndex].imageS} className="ms-auto me-auto card-img bg-dark" />
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <h4 className='text-danger'>{products[findIndex].nameS}</h4>
                    <p className='text-danger'>${products[findIndex].price}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati unde qui illum adipisci, molestiae corporis illo nobis nisi, veritatis dolor eius odit laudantium ipsum tempora maxime aliquid tenetur sit distinctio praesentium maiores repellat. Reiciendis hic soluta possimus eveniet quia corporis mollitia, ratione accusamus minus non atque veritatis odit similique.</p>
                    <ItemCount stock={stock - products[findIndex].quantity} initial={initial} onAdd={onAdd} id={products[findIndex].id} nameS={products[findIndex].nameS} imageS={products[findIndex].imageS} price={products[findIndex].price} />
                </div>
            </div>
        )
    }
    else {

        return (
            <div className='col-lg-12 col-md-12 col-sm-12 productDetail'>
                <div className='col-lg-6 col-md-12 col-sm-12 img'>
                    <img src={imageS.replaceAll('./', '../')} alt={nameS} data-id={imageS} className="ms-auto me-auto card-img bg-dark" />
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                    <h4 className='text-danger'>{nameS}</h4>
                    <p className='text-danger'>${price}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati unde qui illum adipisci, molestiae corporis illo nobis nisi, veritatis dolor eius odit laudantium ipsum tempora maxime aliquid tenetur sit distinctio praesentium maiores repellat. Reiciendis hic soluta possimus eveniet quia corporis mollitia, ratione accusamus minus non atque veritatis odit similique.</p>
                    <ItemCount stock={stock} initial={initial} onAdd={onAdd} id={id} nameS={nameS} imageS={imageS} price={price} />
                </div>
            </div>
        )
    }
}
export default ItemDetail;