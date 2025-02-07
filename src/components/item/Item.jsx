import './item.css';
import { addToCart } from '../../store/shopSlice';
import { useDispatch } from 'react-redux';

const Item = ({ item }) => {

    const dispatch = useDispatch();

    const handleAddToCart = () => {        
        dispatch(addToCart(item));
    }

    return (
        <div className="itemImageDiv">
            <div>{item.title}</div>
            <div>{item.price} $</div>
            <img className="itemImage" src={item.image} alt="item image" />
            <div>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Item;