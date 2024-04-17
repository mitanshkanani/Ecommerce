import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Policy from './footerpages/Policy';
import Conditions from './footerpages/Conditions';
import About from './footerpages/About';
import Main from './pages/Main';
import Contact from './footerpages/Contact';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/main" element={<Main />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/conditions" element={<Conditions />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/products" element={<Products />} />
      <Route path="/admin/categories" element={<Categories />} />
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/users/:id" element={<User />} />
      <Route path="/admin/products/:id" element={<Product />} />
      <Route path="/admin/categories/:id" element={<Category />} /> */}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
