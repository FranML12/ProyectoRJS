import { useParams } from 'react-router-dom';
import Card from '../Components/Card/Card.jsx';
const Cards = ({ items }) => {
    const { idCategoria } = useParams();
    if (idCategoria !== undefined) {
        return (
            <div className='container container-fluid bg-dark text-center'>
                <div className="row">
                    {items.map(item => {
                        return (
                            item.category === idCategoria && <Card item={item} key={item.id} />
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
                            <Card item={productos} key={productos.id} />
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default Cards;  //