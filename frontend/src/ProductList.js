// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import Product from './Product';
import { fetchProducts } from '../api';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            try {
                const productsData = await fetchProducts();
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        getProducts();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;

