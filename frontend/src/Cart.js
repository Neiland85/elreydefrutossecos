// src/components/Cart.js
import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext);

    return (
        <div className="cart">
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>${item.price}</p>
                                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;

