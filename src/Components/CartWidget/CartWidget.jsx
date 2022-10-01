import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import '../ItemCount/ItemCount';
const CartWidget = () => {
    const { getTotalQuantity } = useCartContext();
    return <>
        <div className='ms-auto'>
            <Link to="/cart" className='color'><FontAwesomeIcon icon={faCartShopping} className="fa-2x mt-3 me-3" />{getTotalQuantity()}</Link>        
        </div>
    </>
}
export default CartWidget;