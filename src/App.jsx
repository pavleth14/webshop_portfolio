import './App.css'
import { useEffect, useState } from 'react'
import Item from './components/item/Item';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import za ruter
import Cart from './components/cart/Cart';
import Header from './components/header/header';
import Shopping from './components/shopping/Shopping';

function App() {

  const totalItems = useSelector(state => state.shop.allItems);
  console.log(totalItems);

  const [allData, setAllData] = useState([]);
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
  

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setAllData(json);
      })
  }, []);

  return (
    <div className='container'>

      <Router basename="/webshop_portfolio">


        <Routes>

          <Route path="/" element={

            <div>
              <Header />
              <div style={{ display: 'flex', marginBottom: '20px', marginTop: '20px' }}>
                <button onClick={handleShowMoreThanOneItem}>{showInputsButtonText}</button>
              </div>

              <div className='mainDiv'>
                {allData.map(item => (
                  <Item key={item.id} item={item} showMoreThenOneItem={showMoreThenOneItem} />
                ))}
              </div>

            </div>
          } />

          <Route path="/cart" element={<Cart />} />
          <Route path="/shopping" element={<Shopping />} />

        </Routes>


      </Router>
    </div>
  );
}

export default App
