import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import CartScreen from './screens/CartScreen.js';
import SigninScreen from './screens/SigninScreen.js';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen.js';
import ProductsScreen from './screens/ProductsScreen.js';
import ShippingScreen from './screens/ShippingScreen.js';
import PaymentScreen from './screens/PaymentScreen.js';
import PlaceOrderScreen from './screens/PlaceOrderScreen.js';
import OrderScreen from './screens/OrderScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import OrdersScreen from './screens/OrdersScreen.js';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">amazona</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <button>Admin</button>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/category/Pants">Pants</Link>
            </li>

            <li>
              <Link to="/category/Shirts">Shirts</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Routes>
              <Route path="/orders" element={<OrdersScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/order/:id" element={<OrderScreen />} />
              <Route path="/products" element={<ProductsScreen />} />
              <Route path="/shipping" element={<ShippingScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart/:id?" element={<CartScreen />} />
              <Route path="/category/:id" element={<HomeScreen />} />
              <Route path="/" exact={true} element={<HomeScreen />} />
            </Routes>
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
