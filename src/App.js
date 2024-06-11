
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';

function App() {
  const [login, setlogin] = useState(false);
  return (
    

    <div className="App">
        {login ?<LoginPopUp setlogin={setlogin} />:<></>}
    <Navbar setlogin={setlogin} />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/order" element={<PlaceOrder/>} />
      
    </Routes>
    <Footer />
    </div>


  );

}

export default App;
