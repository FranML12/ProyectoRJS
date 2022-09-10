import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../ItemCount/ItemCount';
const Render = () => {
    return <>{}
        <div className='ms-auto'>
            <Link to="/cart" className='color'><FontAwesomeIcon icon={faCartShopping} className="fa-2x mt-3 me-3" /></Link>
        </div>
    </>
}
export default Render;