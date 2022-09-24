import { useParams } from 'react-router-dom';
import Item from '../Components/Item/Item.jsx';
const Items = ({ items }) => {
    const { idCategoria } = useParams();
    if (idCategoria !== undefined) {
        return (
            <div className='container container-fluid bg-dark text-center'>
                <div className="row">
                    {items.map(item => {
                        return (
                            item.category === idCategoria && <Item item={item} key={item.id} />
                        )
                    })}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='container container-fluid bg-dark text-center'>
                <div className="row">
                    {items.map((productos) => {
                        return (
                            <Item item={productos} key={productos.id} />
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Items; 