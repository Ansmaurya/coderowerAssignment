import { useEffect, useState } from 'react';
import './App.css';
import Update from './component/Update';
import ProductList from './component/ProductList';
import Nav from './component/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// const API="http://localhost:4500/products"

function App() {
  
  return (
   <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="/" element={<ProductList/>} />
      <Route path="/update" element={<Update/>} />
      {/* <Route path="/" element={<Header/>} /> */}
      </Routes>
    
  
    
    </BrowserRouter>
   </div>
  );
}

export default App;
