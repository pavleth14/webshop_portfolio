import './App.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Cart from './components/cart/Cart';
import Header from './components/header/header';
import Shopping from './components/shopping/Shopping';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';

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
    <div className='container'>

      <Router basename="/webshop_portfolio">


        <Routes>

          <Route path="/" element={

            <div>
              <Header />
              <Home allData={allData} />
            </div>
          } />

          <Route path="/cart" element={<Cart />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>


      </Router>
    </div>
  );
}

export default App
