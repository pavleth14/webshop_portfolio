import { Link, useLocation } from 'react-router-dom'; // Import za ruter
import { useSelector } from 'react-redux';
import './header.css';
import { FaBars } from 'react-icons/fa'; // Import hamburger ikone
import { useState } from 'react';

const Header = () => {
    const totalItems = useSelector(state => state.shop.allItems);
    const location = useLocation();
    const [isFaBarsClicked, setIsFaBarsClicked] = useState(false);

    const handleFaBars = () => {
        setIsFaBarsClicked(prev => !prev);
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'end'}}>
                {/* Prikazivanje broja artikala u korpi */}
                {location.pathname === '/cart' ? (
                        <Link to="/">Go Home</Link>
                    ) : (
                        <Link to="/cart">Go to Cart: {totalItems.length}</Link>
                    )}
            </div>
            <div className='headerDiv'>
                <h1>Header</h1>
                <div className='rightSideHeader'>
                    {/* Standardni linkovi za veće ekrane */}
                    <div className='headerLinks'>
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                            <li><Link to={'/contact'}>Contact</Link></li>
                        </ul>
                    </div>

                    {/* Hamburger ikona */}
                    <div className="hamburger">
                        <FaBars onClick={handleFaBars} className="hamburger-icon" size={30} />
                    </div>

                    
                </div>
            </div>

            {/* Meni sa linkovima koji se prikazuje kada je hamburger ikona kliknuta */}
            {isFaBarsClicked && (
                <ul className='mobileBars'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            )}
        </div>
    );
}

export default Header;
