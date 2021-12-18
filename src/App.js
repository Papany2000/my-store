import React from 'react'
import './App.css';
import Header from './Component/Heder/Header.jsx'
import Products from './Component/Product/Products';
import Carts from './Component/Carts/Carts'
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom';



function App() {





  return (
    
    <div className="App">
       <Router>
      <Header/>
        <Routes>
     <Route path = "/Products" element = {<Products/>} /> 
     <Route path = "/Carts" element = {<Carts/>} /> 
     </Routes>
     </Router>
    </div>
   
  );
}

export default App;
