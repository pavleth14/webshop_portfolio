import { Link, useLocation } from 'react-router-dom'; // Import za ruter
import { useSelector } from 'react-redux';
import './header.css'


const Header = () => {

    const totalItems = useSelector(state => state.shop.allItems);
    const location = useLocation();

    return (
        <div className='headerDiv'>
            <h1>Header</h1>
            <div className='rightSideHeader'>
                <ul>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact</Link>
                </ul>                
                    {location.pathname === '/cart' ? (
                        <Link to="/">Go Home</Link>
                    ) : (
                        <Link to="/cart">Go to Cart: {totalItems.length}</Link>
                    )}
            </div>
        </div>
    );
}

export default Header;