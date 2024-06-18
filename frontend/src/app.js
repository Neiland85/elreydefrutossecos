// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="container mx-auto">
          <Header />
          <main className="mt-5">
            <Switch>
              <Route path="/" exact component={ProductList} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

