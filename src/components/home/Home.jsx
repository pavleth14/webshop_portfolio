import './home.css'
import { useState } from "react";
import Item from "../item/Item";



const Home = ({ allData }) => {

    const [showMoreThenOneItem, setShowMoreThenOneItem] = useState(false);
    const [showInputsButtonText, setShowInputButtonText] = useState('Add more than one item');

    const handleShowMoreThanOneItem = () => {
        // Toggling između dva stanja za dugme
        setShowMoreThenOneItem(prev => !prev);
        // Menjanje teksta dugmeta
        setShowInputButtonText(prevText =>
            prevText === 'Add more than one item' ? 'Add only one item' : 'Add more than one item'
        );
    }

    return (
        <div>
            <div style={{ display: 'flex', marginBottom: '20px', marginTop: '20px' }}>
                <button onClick={handleShowMoreThanOneItem}>{showInputsButtonText}</button>
            </div>
            <div className='mainDiv'>
                {allData.map(item => (
                    <Item key={item.id} item={item} showMoreThenOneItem={showMoreThenOneItem} />
                ))}
            </div>
        </div>
    );
}

export default Home;