import Login from "./components/Login";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";
import AddProduct from "./components/addProduct";
import Product from "./components/Products";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/" Component={Login} />
        <Route path="/Signup" Component={Signup} />
        <Route path="/product" Component={Product} />
        <Route path="/Details" Component={Details} />
        <Route path="/addproduct" Component={AddProduct} />

      </Routes>
      <div className=" container">

      </div>
    </BrowserRouter>
  );
}

export default App;
