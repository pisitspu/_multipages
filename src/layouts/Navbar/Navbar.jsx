import { act } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ tab, setTab, products, cart, setToken }) {
    return (
        <div className="navbar-container">



            <Link to={'/home'}>

                <button className={'btn ' +
                    (tab === 'home' ? 'btn-outline-primary ' : ' btn-primary')}
                    onClick={() => setTab('home')}
                >Home</button>

            </Link>

            <Link to={'/calculator'}>

                <button className={'btn ' +
                    (tab === 'calculator' ? 'btn-outline-primary ' : ' btn-primary')}
                    onClick={() => setTab('calculator')}
                >Calculator</button>

            </Link>

            <Link to={'/components'}>

                <button className={'btn ' +
                    (tab === 'components' ? 'btn-outline-primary ' : ' btn-primary')}
                    onClick={() => setTab('components')}
                >components</button>

            </Link>


            <Link to={'/todo'}>

                <button className={'btn ' +
                    (tab === 'todo' ? 'btn-outline-primary ' : ' btn-primary')}
                    onClick={() => setTab('todo')}
                >Todo</button>

            </Link>

            <Link to={'/products'}>

                <button className={'btn ' +
                    (tab === 'products' ? 'btn-outline-primary ' : ' btn-primary')}
                    onClick={() => setTab('products')}
                >products({products.length})
                </button>

            </Link>

            <Link to={'/cart'}>

                <button className={'btn ' +
                    (tab === 'cart' ? ' position-relative btn-outline-primary ' : ' btn-primary')}
                    onClick={() => setTab('cart')}
                >Cart
                    {(cart.length > 0) && (

                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cart.length < 100 ? cart.length : '99+'}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    )
                    }
                </button>

            </Link>

            <button className='btn btn-outline-danger' style={{ marginLeft: '1rem' }} onClick={() => 
                {setToken('')}}>
                Logout
            </button>

        </div>
    );
}

export default Navbar;