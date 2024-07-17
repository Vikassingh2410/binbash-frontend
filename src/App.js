import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Component/Home";
import AboutUs from "./Component/AboutUs";
import Products from "./Component/Products";
import Resources from "./Component/Resources";
import Login from "./Component/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Resources' element={<Resources />} />
          <Route path='/Login' element={<Login />} />
        </Routes>

      </BrowserRouter>
      </>
      );
}
export default App;