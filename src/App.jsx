import './App.css'
import { useEffect, useState } from 'react'
import Item from './components/item/Item';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import za ruter
import Cart from './components/cart/Cart';

function App() {

  const totalItems = useSelector(state => state.shop.allItems);   
  console.log(totalItems);
  
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setAllData(json);
      })
  }, []);

  return (
    <Router> {/* Router treba da obavija celu aplikaciju */}
      <div>
        {/* Prikazuje broj stavki u korpi i link za Cart */}        
        

        <Routes>
          {/* Ruta za glavnu stranicu */}
          <Route path="/" element={
            <div>
              <Link to="/cart">Go to Cart: {totalItems.length}</Link>
            <div className='mainDiv'>
              
              {allData.map(item => (
                <Item key={item.id} item={item} />
              ))}
            </div>
            </div>
          } />
          
          {/* Ruta za Cart stranicu */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
