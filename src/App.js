import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Detail from "./page/Detail";
import "./App.css";
import Shop from "./page/Shop";
import Navbar from "./Layout/Navbar/Navbar";
import Cart from "./page/Cart";
import Checkout from "./page/Checkout";
import Login from "./page/Login";
import Register from "./page/Register";
import Footer from "./Layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
