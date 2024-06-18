// src/api.js
export async function fetchProducts() {
    const response = await fetch('http://localhost:3000/api/productos');
    if (!response.ok) {
        throw new Error('Error fetching products');
    }
    return response.json();
}

export async function addProductToCart(product) {
    const response = await fetch('http://localhost:3000/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    if (!response.ok) {
        throw new Error('Error adding product to cart');
    }
    return response.json();
}

