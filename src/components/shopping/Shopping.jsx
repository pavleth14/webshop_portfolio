import { useState } from 'react';
import { useSelector } from 'react-redux';
import './shopping.css'; // Uvoz CSS fajla za stilizaciju
import { Link } from 'react-router-dom';

const Shopping = () => {
    const cartItems = useSelector(state => state.shop.allItems); // Uzmi podatke iz Redux store-a
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        address: '',
        phone: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    // Funkcija za izračunavanje ukupne cene
    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };

    // Funkcija za rukovanje promenama u formi
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Funkcija za slanje podataka na backend
    const handleSubmit = (e) => {
        e.preventDefault();

        // Kombinuj podatke iz forme sa podacima iz Redux-a
        const orderData = {
            user: userData,
            products: cartItems,
            total: calculateTotal()
        };        

        // pavle order data
        console.log('order data', orderData);

        alert('Thank you for ordering! :)')

        // pavle Ovde šaljemo podatke na backend, recimo kroz fetch ili axios

        // fetch('/api/submitOrder', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(orderData)
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Success:', data);
        //         setIsSubmitted(true); // Postavi stanje nakon uspešnog slanja
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });
    };

    return (
        <div className="shoppingContainer">

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>Shopping</h1>
                <Link to='/cart'>Cart</Link>
            </div>

            {cartItems.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <div>
                    <h2>Total price: ${calculateTotal()}</h2>

                    {/* Forma za unos korisničkih podataka */}
                    <form onSubmit={handleSubmit} className="userForm">
                        <div className="formGroup">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={userData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={userData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={userData.address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="phone">Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={userData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <button type="submit">Submit Order</button>
                    </form>

                    {isSubmitted && <p>Your order has been successfully placed!</p>}


                </div>
            )}
        </div>
    );
};

export default Shopping;
