import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductsCard = ({title, img, id, price, description, stock}) => {
  const [counter, setCounter] = useState(0)

  useEffect ( () => {
    console.log('Efecto al montaje y combio en el counter');
    // No usar setCounter() acá -> Genera loop infinito
  }, [counter])

  const handleClick = () => {
    if (stock === counter){
      setCounter(stock);
    } else {
      setCounter(counter + 1);
      console.log('Hiciste click');
    }
  }
  const handleClick1 = () => {
    if (counter === 0) {
      setCounter(0);
      console.log('Hiciste click');
    }else{
      setCounter(counter - 1);
      console.log('Hiciste click');
    }
  }

  console.log('Hubo render');
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <h5>ID: {id} Price: {price}</h5>
            <h6>Stock: {stock}</h6>
            <p>Acerca del producto: {description}</p>
          </Card.Text>
          <Button onClick={handleClick} variant="primary">Add to cart</Button>
          <Button onClick={handleClick1} variant="primary">Remove</Button>
        </Card.Body>
      </Card>
      <div>
        <strong>Contador: {counter}</strong>
      </div>
    </> 
  );
}

export default ProductsCard