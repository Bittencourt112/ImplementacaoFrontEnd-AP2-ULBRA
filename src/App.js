import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from "./pages/Home";
import Products from './pages/Products';
import NewProduct from './pages/NewProduct';
import ProductDetails from './pages/ProductDetails';
import EditProduct from './pages/EditProduct';
import Contact from './pages/Contact';
import { ProductContext } from "./contexts/ProductContext";

function App() {

  const [product, setProduct] = useState([]);

  return (

    <ProductContext.Provider value={{ product, setProduct }}>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/newproduct" element={<NewProduct/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
            <Route path="/editproduct" element={<EditProduct/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </ProductContext.Provider>
  );
}

export default App;
