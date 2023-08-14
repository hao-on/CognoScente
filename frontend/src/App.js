import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import ProductList from "./Pages/ProductList";
import Success from "./Pages/Success";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "font-awesome/css/font-awesome.min.css";
import Checkout from "./Pages/Checkout";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/products/:query" element={<ProductList />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            exact
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
