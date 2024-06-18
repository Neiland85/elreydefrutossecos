// src/components/Product.js
import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import './Product.css';

function Product({ product }) {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-item border rounded shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover hover:scale-105 transform transition-transform duration-300" />
            <h2 className="text-xl mt-2">{product.name}</h2>
            <p className="text-lg">${product.price}</p>
            <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-3 py-1 rounded mt-2">Añadir al Carrito</button>
        </div>
    );
}

export default Product;

