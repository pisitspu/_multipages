import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cart.css';

function Cart({ cart, setCart }) {
    return (
        <div className='cart-container'>
            <div className='cart-items-container'>

                {cart.map((item) => {
                    return (
                        <Card style={{ width: '18rem' }} key={item.id}>
                            <Card.Img variant="top" src={item.thumbnailUrl} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <b>$ {item.price.toFixed(2)}</b>
                                </Card.Text>
                                <Button variant="outline-danger" onClick={() =>
                                    setCart(cart.filter((c) => c.id !== item.id))
                                }>
                                    Remove from cart
                                </Button>
                            </Card.Body>
                        </Card>
                    );
                })}

            </div>
            <h4> <b> Items: {cart.length} items - Total Price $ {cart.reduce((prev, item) =>
                prev + item.price, 0).toFixed(2)}</b>
            </h4>
            <button className='btn btn-warning' >Checkout &nbsp;<span className='bi bi-wallet'></span></button>
        </div>
    );
}

export default Cart;
