import React, {useEffect, useState} from 'react'
import './App.css';
import Header from './Component/Heder/Header'
import Products from './Component/Product/Products';
import Carts from './Component/Carts/Carts'
import {Routes, Route } from 'react-router-dom';
import { getProducts} from './api/products'
import CreateProductForm from './Component/Ui/forma/createProductForm'


function App() {
  const [goods, setGoods] = useState([]);
  useEffect(() => {
    getProducts()
      .then(
        (result) => {
          setGoods(result.data);
        }
      )
  }, [])
  const [cartGoods, setCartGoods] = useState([])
  const createTocart = (newItem) =>{
    const isexsist = cartGoods.filter(elem => elem.id === newItem.id)
    !isexsist[0] ? setCartGoods([...cartGoods, {...newItem, count: 1}]) :  setCartGoods([...cartGoods.map(el => el.id === newItem.id ? {...el, count: el.count + 1} : el)])
    alert('Товар добавлен')
  }
  const removeTocart = (newItem) =>{
   if (newItem.count > 1) { setCartGoods([...cartGoods.map(el => el.id === newItem.id ? {...el, count: el.count - 1} : el)])} else {setCartGoods(cartGoods.filter(el => el.id !== newItem.id))}
 }
 const cartClear = () => setCartGoods([])

 const [style, setStyle] = useState([{display: 'none'}])
 let visible = () => {
   setStyle([{display: 'block'}])
  } 
  let inVisible = () => {
    setStyle([{display: 'none'}])
   } 
  const [sum, setSum] = useState([{price: 0}])
  let check = () => { 
    let total = {price: cartGoods.reduce((total, el) => total  + el.price * el.count, 0)}
   setSum(sum.map(el => el.price = total ))
}

  return (
    
    <div className="App">
      
     < Header/>
     <Routes>
         <Route path = "/adminPanel" element = {<CreateProductForm goods = {goods} children = {'удалить с сервера'} setgoods={setGoods} />} />   
         <Route path = "/Products" element = {<Products goods = {goods} createTocart = {createTocart}/>} /> 
         <Route path = "/Product/:id" element = {<Products goods = {goods} createTocart = {createTocart}/>} />
         <Route path = "/Carts" element = {<Carts cartGoods = {cartGoods} check = {check } removeTocart = {removeTocart} cartClear = {cartClear} style = {style}  visible = {visible} inVisible = {inVisible} sum = {sum}/>} /> 
     </Routes>
    
    </div>
   
   
  );
}

export default App;
