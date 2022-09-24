import { Link } from 'react-router-dom';
import './index.css';
const Item = ({ item }) => {
    const { id, name, price, imageS, stock} = item;
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <img src={imageS.replaceAll('./','../')} alt={name} className="ms-auto me-auto card-img bg-dark" />
            <h2 className="text-white">{name}</h2>
            <p className='text-danger'>${price}</p>
            <Link to={`/item/${id}`} data-id={id} className="detalle">Ir a detalle de producto
            </Link>
            <p className="text-light mt-2">Stock: {stock}</p>
        </div>
    )
}
export default Item;