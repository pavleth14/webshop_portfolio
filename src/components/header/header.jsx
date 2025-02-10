import { Link } from 'react-router-dom'; // Import za ruter
import { useSelector } from 'react-redux';
import './header.css'


const Header = () => {

    const totalItems = useSelector(state => state.shop.allItems);   

    return ( 
        <div className='headerDiv'>
            <h1>Header</h1>
            <Link to="/cart">Go to Cart: {totalItems.length}</Link>
        </div>
     );
}
 
export default Header;