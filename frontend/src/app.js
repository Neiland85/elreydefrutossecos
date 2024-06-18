// src/app.js

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

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

