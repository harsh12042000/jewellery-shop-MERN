import './App.css';
import Headers from './components/Headers'
import Home from './modules/Home';
import { Register, Signin } from './modules/Account';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ProductScreen from './components/Products/ProductScreen';
import Shipping from './components/Policys/shipping';
import { Footer } from './components/Footer';
import Privacy from './components/Policys/privacy';
import { Products } from './components/Products';
import ContactUs from './components/Contact';
import { AboutUs } from './components/AboutUs';
import CartScreen from './components/CartScreen';
import ShippingAddressScreen from './components/ShippingAddressScreen';
import PaymentMethodScreen from './components/PaymentMethodScreen';
import PlaceOrderScreen from './components/PlaceOrderScreen';
import OrderScreen from './components/OrderScreen';
import OrderHistoryScreen from './components/OrderHistoryScreen';
import ProfileScreen from './components/ProfileScreen';
import SearchScreen from './components/SearchScreen';
import DashboardScreen from './components/Admin/DashboardScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Headers/>
        <Routes>
          <Route path='/products/:slug' element={<ProductScreen/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/privacy/shipping' element={<Shipping/>}></Route>
          <Route path='/privacy/policy' element={<Privacy/>}></Route>

          {/* temp */}
          <Route path='/category/:slug' element={<Products/>}></Route>

          <Route path='/contactus' element={<ContactUs/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/signup' element={<Register/>}></Route>
          <Route path='/aboutus' element={<AboutUs/>}></Route>
          <Route path="/cart" element={<CartScreen />} />
          <Route path='/shipping' element={<ShippingAddressScreen/>}></Route>
          <Route path='/payment' element={<PaymentMethodScreen/>}></Route>
          <Route path="/order/:id" element={<OrderScreen/>}></Route>
          <Route path='/placeorder' element={<PlaceOrderScreen/>}></Route>
          <Route path='/orderhistory' element={<OrderHistoryScreen/>}></Route>
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/admin/dashboard" element={<DashboardScreen/>}></Route>
          <Route path='/search' element={<SearchScreen/>}></Route>
        </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
