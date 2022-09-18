import './style.css';
import ItemCount from '../ItemCount/ItemCount';
const ItemDetail = ({ item }) => {
    const onAdd = (quantityProduct) => {
        alert(`Se agregaron ${quantityProduct} productos al carrito`);
    }
    const { id, nameS, price, imageS, stock, initial } = item;
    return (
        <div className='col-lg-12 col-md-12 col-sm-12 productDetail' key={id}>
            <div className='col-lg-6 col-md-12 col-sm-12 img'>
                <img src={imageS.replaceAll('./', '../')} alt={nameS} key={imageS} data-id={imageS} className="ms-auto me-auto card-img bg-dark" />
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
                <h4 className='text-danger'>{nameS}</h4>
                <p className='text-danger' key={price}>${price}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati unde qui illum adipisci, molestiae corporis illo nobis nisi, veritatis dolor eius odit laudantium ipsum tempora maxime aliquid tenetur sit distinctio praesentium maiores repellat. Reiciendis hic soluta possimus eveniet quia corporis mollitia, ratione accusamus minus non atque veritatis odit similique.</p> 
                <ItemCount stock={stock} initial={initial} onAdd={onAdd} /> 
            </div>
        </div>
    )
} 
export default ItemDetail;