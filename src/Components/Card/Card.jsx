import { Link } from 'react-router-dom';
import './card.css';
const Card = ({ item }) => {
    const { id, name, price, imageS, stock} = item;
    return (
        <div className='col-lg-4 col-md-6 col-sm-12' key={name}>
            <img src={imageS.replaceAll('./','../')} alt={name} key={imageS} className="ms-auto me-auto card-img bg-dark" />
            <h2 className="text-white" key={name}>{name}</h2>
            <p className='text-danger' key={price}>${price}</p>
            <Link to={`/detail/${id}`} key={id} data-id={id} className="detalle">Ir a detalle de producto
            </Link>
            <p key={stock} className="text-light mt-2">Stock: {stock}</p>
        </div>
    )
}
export default Card;