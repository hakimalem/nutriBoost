import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { ContactUS } from './pages/AboutUS';
import { Layout } from './components/common/Layout';
import { Home } from './pages/Home';
import { SingleProduct } from './pages/SingleProduct';
import { Orders } from './pages/OrderHistory';
import ProductsPage from './pages/ProductsPage';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Settings } from './pages/Settings';
import { Wishlist } from './pages/Wishlist';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './components/common/RequireAuth';

function App() {
  axios.defaults.baseURL = 'http://172.20.10.8:6106/';
  // axios.defaults.headers.common['Authorization'] =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDZhYTI5NTM1YjJhMDA0MjFmYTEyNTgiLCJpYXQiOjE2ODQ3MTAzNDUsImV4cCI6MTY5MjQ4NjM0NX0.pd88_1MriegCLeRh0-JB8OXRqYVciPvtscQ5K4rHe-Q';

  // // Default config options
  // const defaultOptions = {
  //   baseURL: 'http://192.168.137.78:6106/',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },*
  // };

  // // Create instance
  // let instance = axios.create(defaultOptions);

  // // Set the AUTH token for any request
  // instance.interceptors.request.use(function (config) {
  //   const token =
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDZhYTI5NTM1YjJhMDA0MjFmYTEyNTgiLCJpYXQiOjE2ODQ3MTAzNDUsImV4cCI6MTY5MjQ4NjM0NX0.pd88_1MriegCLeRh0-JB8OXRqYVciPvtscQ5K4rHe-Q';
  //   config.headers.Authorization = token ? `Bearer ${token}` : '';
  //   return config;
  // });

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/search" element={<ProductsPage />} />
            <Route path="products/category" element={<ProductsPage />} />
            <Route path="products/brand" element={<ProductsPage />} />
            <Route path="products/priceFilter" element={<ProductsPage />} />

            <Route path="products/:id" element={<SingleProduct />} />
            <Route path="contact" element={<ContactUS />} />
            <Route path="orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
            <Route element={<RequireAuth />}>
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="settings" element={<Settings />} />
              <Route path="wishlist" element={<Wishlist />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
