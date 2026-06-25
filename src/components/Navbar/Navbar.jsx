import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

export default function Navbar() {
    const cartItems = useSelector((state) => state.cart.items);
    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="navbar">
            <div className="navbar__brand">
                <Link to="/" className="navbar__logo-link">
                    <span className="navbar__title">
                        Pizzeria
                    </span>
                    <img src="./src/assets/images/logo.png" alt="Pizzeria Logo" className="navbar__logo-img"/>
                </Link>
            </div>

            <ul className="navbar__links">
                <li>
                    <Link to="/order-pizza" className="navbar__link">
                        Order Pizza
                    </Link>
                </li>

                <li>
                    <Link to="/build-pizza" className="navbar__link">
                        Build Your Pizza
                    </Link>
                </li>
            </ul>

            <div className="navbar__cart">  
                <Link to="/cart" className="navbar__cart-btn">
                    <span className="navbar__cart-icon">
                        🛒
                    </span>

                    <span className="navbar__cart-text">
                        Shopping Cart
                    </span>

                    {totalCount > 0 && (<span className="navbar__cart-badge">{totalCount}</span>)}
                </Link>
            </div>
        </nav>
    );
}