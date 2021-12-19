import React, {useState} from 'react'
import './App.css';
import Header from './Component/Heder/Header.jsx'
import Products from './Component/Product/Products';
import Carts from './Component/Carts/Carts'
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom';



function App() {
  const [goods, setGoods] = useState([
    {id: 1, name: 'Лечо', price: 500, image: 'https://img.povar.ru/list/6f/8e/c4/b9/ogurchiki_v_tomatnom_soke-306497.JPG'},
    {id: 2, name: 'Яблоки', price: 400, image: 'https://kartinkin.net/uploads/posts/2021-07/thumbs/1626217214_28-kartinkin-com-p-marinovannie-ovoshchi-yeda-krasivo-foto-33.jpg'},
    {id: 3, name: 'Огурцы', price: 300, image: 'https://img.povar.ru/list/6d/77/d7/43/ostrie_marinovannie_ogurchiki-308112.JPG'},
    {id: 4, name: 'Яблоки', price: 400, image: 'https://kartinkin.net/uploads/posts/2021-07/thumbs/1626217214_28-kartinkin-com-p-marinovannie-ovoshchi-yeda-krasivo-foto-33.jpg'},
   
  ])
  



  return (
    
    <div className="App">
       <Router>
      <Header/>
        <Routes>
     <Route path = "/Products" element = {<Products goods = {goods}/>} /> 
     <Route path = "/Carts" element = {<Carts/>} /> 
     </Routes>
     </Router>
    </div>
   
  );
}

export default App;
