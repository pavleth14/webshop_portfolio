import './item.css';
import { addToCart } from '../../store/shopSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Item = ({ item, showMoreThenOneItem }) => {

    const [quantity, setQuantity] = useState('');        
    const dispatch = useDispatch();    

    const handleAddToCart = () => {        
        item.quantity = parseInt(quantity);        
        dispatch(addToCart(item));
        setQuantity('');
    }

    // pavle need improvment? isNaN()
    const inputHandler = (e) => {        
        if(typeof parseInt(e.target.value) === 'number' && e.target.value > 0) {
            setQuantity(e.target.value);            
        } else {
            setQuantity(1);
        }        
    }

    return (  
        <div className="itemImageDiv">
            <div>{item.title}</div>
            <div>{item.price} $</div>
            <img className="itemImage" src={item.image} alt="item image" />
            <div>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
            {showMoreThenOneItem && <input value={quantity} onChange={inputHandler} type="number" placeholder='You can only put number...' />}            
        </div>        
    );
}

export default Item;