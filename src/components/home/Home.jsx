import './home.css';
import { useState } from "react";
import Item from "../item/Item";

const Home = ({ allData, allFilteredData, setFilteredAllData }) => {
    const [showMoreThenOneItem, setShowMoreThenOneItem] = useState(false);
    const [showInputsButtonText, setShowInputButtonText] = useState('Add more than one product');
    const [filterText, setFilterText] = useState(''); // Držimo tekst filtera u state-u

    const handleShowMoreThenOneItem = () => {
        // Toggling između dva stanja za dugme
        setShowMoreThenOneItem(prev => !prev);
        // Menjanje teksta dugmeta
        setShowInputButtonText(prevText =>
            prevText === 'Add more than one product' ? 'Add only one product' : 'Add more than one product'
        );
    }

    const filterHandler = (e) => {

        const value = e.target.value;
        setFilterText(value); 
        
        if (value === '') {
            setFilteredAllData(allData);
        } else {
            setFilteredAllData(allData.filter(item => item.title.toLowerCase().includes(value.toLowerCase())));
        }

    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px'}}>
                <button style={{outline: 'none'}} onClick={handleShowMoreThenOneItem}>{showInputsButtonText}</button>
                <div>
                    <input className='input'
                        onChange={filterHandler} 
                        type="text" 
                        value={filterText} // Povezivanje sa stanjem
                        placeholder='Filter products...' 
                    />
                </div>
            </div>
            <div className='mainDiv'>
                {/* Ako postoji filtrirani podatak, koristi ih, inače koristi sve podatke */}
                {(allFilteredData.length > 0 ? allFilteredData : allData).map(item => (
                    <Item key={item.id} item={item} showMoreThenOneItem={showMoreThenOneItem} />
                ))}
            </div>
        </div>
    );
}

export default Home;
