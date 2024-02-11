
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Body_SecOne from './components/Body_SecOne';
import NavBar from './components/NavBar';
import Shop from "./components/Shop";
import Product from './components/product';
import Carousel from './components/Carosel';
import Cart from './components/Cart';
import Signup from './components/Signup';
import Login from './components/Login';
import Admin from './components/Admin-components/Admin';
import AdminProducts from './components/Admin-components/Admin-products';
import AdminSideNav from './components/Admin-components/Admin-sideNav';
import CreateProduct from './components/Admin-components/Admin-createpost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body_SecOne />} />
          <Route path="/shop" element={<Shop />} />
          <Route path='/sideNav' element={<sideNav />} />
          <Route path='/shop/details/:productId' element={<Product />} />
          <Route path="/Carousel" element={<Carousel />} />
          <Route path="/Navbar" element={<NavBar />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Admins" element={<Admin />} />
          <Route path="/Admins/Admin-sideNav" element={<AdminSideNav />} />
          <Route path="/Admins/products" element={<AdminProducts />} /> 
          <Route path="/Admins/Create-products" element={<CreateProduct />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
